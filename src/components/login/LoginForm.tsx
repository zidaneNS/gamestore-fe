'use client';

import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
import FormInputField from "../FormInputField";
import Link from "next/link";
import useAuth from "@/contexts/AuthContext";
import { useActionState } from "react";

export default function LoginForm() {
    const router = useRouter();
    const { login } = useAuth();

    const [state, action, pending] = useActionState(login, undefined);

    return (
        <div className="flex flex-col gap-y-8 rounded-md bg-slate-900 shadow-xl py-4 px-6 w-1/3 max-h-3/4 overflow-y-auto scrollbar-thin scrollbar-track-white/30 scrollbar-thumb-slate-700">
            <div className="w-full grid grid-cols-3 items-center">
                <button onClick={() => router.back()} className="flex gap-x-2 w-fit items-center cursor-pointer py-2 px-4 bg-white/10 rounded-xl hover:bg-white/5 duration-300">
                    <IoMdArrowBack className="size-4" />
                    <p>Back</p>
                </button>
                <h1 className="text-2xl font-bold w-full text-center">Login</h1>
            </div>
            <form action={action} className="flex flex-col gap-y-4 w-full">
                <FormInputField
                    title="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                />
                {state?.errors?.email && <p className="text-sm font-bold text-red-500 py-2 px-4 rounded-md bg-red-500/10">{state.errors.email}</p>}
                <FormInputField
                    title="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    />
                {state?.errors?.password && <p className="text-sm font-bold text-red-500 py-2 px-4 rounded-md bg-red-500/10">{state.errors.password}</p>}
                {state?.message && <p className="text-sm font-bold text-red-500 py-2 px-4 rounded-md bg-red-500/10">{state.message}</p>}

                { pending ? (
                    <p className="w-full text-center">Loading...</p>
                ) : (
                    <button className="w-full text-center bg-blue-800 py-2 rounded-md cursor-pointer hover:bg-blue-700 duration-300">Submit</button>
                )}
            </form>
            <div className="flex flex-col w-full items-center gap-y-2">
                <p className="text-sm">Not have an account ?</p>
                <Link href="/register" className="text-sm text-blue-600 hover:underline">Sign Up Here</Link>
            </div>
        </div>
    )
}