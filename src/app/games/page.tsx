import GameCard from "@/components/GameCard";
import { CiFilter, CiSearch } from "react-icons/ci";

export default function Page() {
    return (
        <main className="bg-gradient-to-b from-purple-950 to-black relative min-h-screen flex justify-center">
            <div className="inset-0 absolute bg-black/50"></div>
            <div className="relative flex flex-col gap-y-4 h-full w-7xl mt-30">
                <section className="w-full flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-4xl font-bold">All Games</h1>
                        <p className="text-slate-300 text-sm">Choose your game and select the perfect top-up package</p>
                    </div>
                    <div className="w-1/2">
                        <div className="grid grid-cols-2 gap-x-3 w-full">
                            {/* Search */}
                            <div className="rounded-md px-4 py-2 border border-slate-400 flex items-center gap-x-2 bg-slate-950 cursor-pointer">
                                <CiSearch className="text-purple-400 size-6" />
                                <input type="text" name="search" id="search" placeholder="Search Games" className="bg-transparent w-full rounded-md outline-none" />
                            </div>

                            {/* Select Categories */}
                            <div className="rounded-md px-4 py-2 border border-slate-400 flex items-center gap-x-2 bg-slate-950 cursor-pointer">
                                <CiFilter className="text-purple-400 size-6" />
                                <select name="category" id="category" className="w-full bg-slate-950 cursor-pointer outline-none">
                                    <option value="all">All Categories</option>
                                    <option value="moba">MOBA</option>
                                    <option value="shooter">Shooter</option>
                                    <option value="adventure">Adventure</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full overflow-y-auto h-screen pr-4 scrollbar-thin">
                    <div className="grid grid-cols-3 w-full gap-x-8 gap-y-4 py-4">
                        {Array.from({ length: 12 }).map((_, id) => (
                            <GameCard key={id} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}