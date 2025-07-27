'use client';

import { fetchData } from "@/lib/action";
import { LoginDto } from "@/lib/dto";
import { LoginFormSchema } from "@/lib/formSchema";
import { LoginFormState, User } from "@/lib/type"
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react"

export type AuthContextType = {
    user: User | null,
    login: (state: LoginFormState, formData: FormData) => Promise<{
        errors: {
            email?: string[] | undefined;
            password?: string[] | undefined;
        };
        message?: undefined;
    } | {
        message: string;
        errors?: undefined;
    } | undefined>,
    logout: () => Promise<void>
}

const initContext: AuthContextType = {
    user: null,
    login: async () => undefined,
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

        if (result) {
            if ('message' in result) {
                return { message: result.message }
            } else {
                setUser(result);
                router.back();
            }
        }
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

    return <authContext.Provider value={{ login, user, logout }}>{children}</authContext.Provider>
}