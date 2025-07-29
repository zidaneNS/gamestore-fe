'use client';

import { FaGamepad } from "react-icons/fa";
import DesktopNavLinks from "./DesktopNavLinks";
import Link from "next/link";
import useAuth from "@/contexts/AuthContext";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const { user, logout } = useAuth();

    const [openDesktopNav, setOpenDesktopNav] = useState<boolean>(false);

    const desktopNavRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (desktopNavRef.current && !desktopNavRef.current.contains(event.target as Node)) {
                setOpenDesktopNav(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [desktopNavRef]);
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
                        <button onClick={() => setOpenDesktopNav(prev => !prev)} className="py-2 px-4 rounded-md cursor-pointer flex items-center gap-x-2 hover:bg-white/20 duration-300 relative">
                            <p>{user.name}</p>
                            <IoMdSettings className="size-6" />
                        </button>
                        <div ref={desktopNavRef} className={`flex flex-col gap-y-3 py-2 px-4 rounded-md shadow-xl bg-slate-700 absolute ${openDesktopNav ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} origin-top top-full right-8 duration-300`}>
                            <div className="flex gap-x-2 items-center">
                                <div className="w-8 h-8 rounded-full bg-white"></div>
                                <div className="flex flex-col items-start">
                                    <p>{user.name}</p>
                                    <p className="text-sm text-slate-400">{user.email}</p>
                                </div>
                            </div>
                            <span className="border-b border-slate-400 w-full"></span>
                            <div className="flex flex-col gap-y-2">
                                {user.role === 'admin' && (
                                    <Link href="/admin" className="w-full text-center bg-slate-800 rounded-md py-2 px-4 cursor-pointer hover:bg-slate-600 duration-300">Admin Panel</Link>
                                )}
                                <Link href="/dashboard" className="w-full text-center bg-slate-800 rounded-md py-2 px-4 cursor-pointer hover:bg-slate-600 duration-300">Dashboard</Link>
                            </div>
                        </div>
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