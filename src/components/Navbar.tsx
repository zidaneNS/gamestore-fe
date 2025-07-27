'use client';

import { FaGamepad } from "react-icons/fa";
import DesktopNavLinks from "./DesktopNavLinks";
import Link from "next/link";
import useAuth from "@/contexts/AuthContext";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";

export default function Navbar() {
    const { user, logout } = useAuth();
    return (
        <nav className="fixed top-0 w-full py-4 bg-black/40 border-b border-black left-0 z-10 px-6 flex justify-between backdrop-blur-md">
            <div className="flex gap-x-2 items-center cursor-pointer">
                <FaGamepad className="size-9 text-purple-700" />
                <h1 className="text-xl font-bold">GameStore</h1>
            </div>
            <DesktopNavLinks />
            <div className="hidden md:flex gap-x-3 items-center text-sm">
                {user ? (
                    <>
                        <button className="py-2 px-4 rounded-md cursor-pointer flex items-center gap-x-2 hover:bg-white/20 duration-300">
                            <p>{user.name}</p>
                            <IoMdSettings className="size-6" />
                        </button>
                        <button onClick={logout} className="py-2 px-4 rounded-md cursor-pointer flex items-center bg-red-500 gap-x-2 hover:bg-red-400 duration-300">
                            <p>Logout</p>
                            <MdLogout className="size-6" />
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className="py-2 px-3 cursor-pointer text-white hover:text-white/60 duration-300">Login</Link>
                        <Link href="/register" className="py-2 px-3 cursor-pointer bg-blue-800 rounded-full hover:bg-blue-700 duration-300">Register</Link>
                    </>
                )}
            </div>
        </nav>
    )
}