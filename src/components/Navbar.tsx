'use client';

import { FaGamepad } from "react-icons/fa";
import DesktopNavLinks from "./DesktopNavLinks";
import Link from "next/link";
import useAuth from "@/contexts/AuthContext";

export default function Navbar() {
    const { user } = useAuth();
    return (
        <nav className="fixed top-0 w-full py-4 bg-black/40 border-b border-black left-0 z-10 px-6 flex justify-between backdrop-blur-md">
            <div className="flex gap-x-2 items-center cursor-pointer">
                <FaGamepad className="size-9 text-purple-700" />
                <h1 className="text-xl font-bold">GameStore</h1>
            </div>
            <DesktopNavLinks />
            <div className="hidden md:flex gap-x-3 items-center text-sm">
                <Link href="/login" className="py-2 px-3 cursor-pointer text-white hover:text-white/60 duration-300">{user ? user.name : "Login"}</Link>
                <Link href="/register" className="py-2 px-3 cursor-pointer bg-blue-800 rounded-full hover:bg-blue-700 duration-300">Register</Link>
            </div>
        </nav>
    )
}