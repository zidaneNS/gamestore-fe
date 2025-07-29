'use client';

import { fetchData } from "@/lib/action";
import { LoginDto, RegisterDto } from "@/lib/dto";
import { LoginFormSchema, RegisterFormSchema } from "@/lib/formSchema";
import { LoginFormState, RegisterFormState, User } from "@/lib/type"
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react"

export type AuthContextType = {
    user: User | null,
    login: (state: LoginFormState, formData: FormData) => Promise<LoginFormState>,
    register: (state: RegisterFormState, formData: FormData) => Promise<RegisterFormState>,
    logout: () => Promise<void>,
}

const initContext: AuthContextType = {
    user: null,
    login: async () => undefined,
    register: async () => undefined,
    logout: async () => {}
}

const authContext = createContext(initContext);

export default function useAuth() {
    return useContext(authContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    const login = async (state: LoginFormState, formData: FormData) => {
        const validatedFields = LoginFormSchema.safeParse({
            email: formData.get('email'),
            password: formData.get('password')
        });

        if (!validatedFields.success) {
            return { errors: validatedFields.error.flatten().fieldErrors }
        }

        const loginDto: LoginDto = validatedFields.data;

        const result = await fetchData<User>('login', {
            method: 'POST',
            body: JSON.stringify(loginDto)
        }, true);

        if ('message' in result) {
            return { message: result.message }
        } else {
            setUser(result);
            router.back();
        }
    }

    const register = async (state: RegisterFormState, formData: FormData) => {
        const validatedFields = RegisterFormSchema.safeParse({
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation'),
        });

        if (!validatedFields.success) {
            return { errors: validatedFields.error.flatten().fieldErrors }
        }

        const { name, email, password, password_confirmation } = validatedFields.data;

        if (password !== password_confirmation) {
            return { message: 'password does not match' }
        }

        const registerDto: RegisterDto = { name, email, role: 'user', password, password_confirmation };

        const result = await fetchData<User>('register', {
            method: 'POST',
            body: JSON.stringify(registerDto)
        }, true);

        if ('message' in result) {
            return { message: result.message }
        }

        router.push('/login');
    }

    const logout = async () => {
        try {
            const response = await fetch('api/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (response.status === 204) {
                setUser(null);
            }
        } catch (err) {
            console.log('error logout', err);
        }
    }

    useEffect(() => {
        const getUser = async () => {
            const user = await fetchData<User>('user', { method: 'GET' }, true);
            console.log('failed', user);
            if (user) {
                if (typeof user === 'object' && 'email' in user) {
                    console.log('success', user);
                    setUser(user);
                }
            }
        }

        getUser();
    }, []);

    return <authContext.Provider value={{ login, register, user, logout }}>{children}</authContext.Provider>
}