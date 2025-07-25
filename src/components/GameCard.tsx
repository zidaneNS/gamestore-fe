'use client';

import { Game } from "@/lib/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GoPackage } from "react-icons/go";

export default function GameCard({ game }: { game: Game }) {
    const router = useRouter();

    return (
        <div className="flex flex-col bg-gradient-to-b from-white/20 via/black/40 to-purple-950/40 rounded-xl cursor-pointer hover:scale-105 duration-300">
            <div className="relative">
                <Image
                    src="/assets/mobile-legends.jpg"
                    alt="img"
                    className="w-full h-50 object-fill"
                    width={1000}
                    height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/40 flex flex-col py-4 px-6 justify-between">
                    <p className="py-2 px-6 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-yellow-300 text-center w-fit text-xs font-semibold">Popular</p>
                    <div className="flex flex-col gap-y-2">
                        <h4 className="text-xl font-bold">{game.title}</h4>
                        <p className="text-sm text-slate-400">{game.category.name}</p>
                    </div>
                </div>
            </div>
            <div className="px-6 py-4 flex flex-col gap-y-3">
                <div className="flex gap-x-2 items-center bg-blue-500/20 border border-blue-500 rounded-full text-blue-500 w-fit px-4 py-2">
                    <GoPackage className="size-4" />
                    <p className="text-sm">{game.products.length} Products</p>
                </div>
                <p className="text-slate-300 text-sm">{game.description}</p>
                <button onClick={() => router.push('/games/1')} className="mt-auto w-full py-2 text-center bg-purple-800 font-bold cursor-pointer hover:bg-purple-600 duration-300 rounded-md">View Products</button>
            </div>
        </div>
    )
}