import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";

export default function GameCard() {
    return (
        <div className="flex flex-col gap-y-3 bg-gradient-to-b from-white/20 via/black/40 to-purple-950/40 rounded-xl cursor-pointer hover:scale-105 duration-300">
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
                    <h4 className="text-xl font-bold">Mobile Legends</h4>
                    <p className="text-sm text-slate-400">MOBA</p>
                </div>
            </div>
            </div>
            <div className="px-4 py-2 flex flex-col gap-y-3">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                <FaStar className="text-yellow-500 size-4" />
                <p className="text-sm">4.8</p>
                </div>
                <IoLogoGameControllerB className="text-purple-900 size-8" />
            </div>
            <p className="text-slate-300 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, ducimus.</p>
            <button className="mt-auto w-full py-2 text-center bg-purple-800 font-bold cursor-pointer hover:bg-purple-600 duration-300 rounded-md">View Products</button>
            </div>
        </div>
    )
}