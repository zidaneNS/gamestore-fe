'use client';

import { fetchData } from "@/lib/action";
import { LoginDto } from "@/lib/dto";
import { LoginFormSchema } from "@/lib/formSchema";
import { LoginFormState, User } from "@/lib/type"
import React, { createContext, useContext, useState } from "react"

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
    } | undefined>
}

const initContext: AuthContextType = {
    user: null,
    login: async () => undefined
}

const authContext = createContext(initContext);

export default function useAuth() {
    return useContext(authContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

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
                setUser(result)
            }
        }
    }

    return <authContext.Provider value={{ login, user }}>{children}</authContext.Provider>
}