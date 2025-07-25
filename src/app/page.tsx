'use server';

import GameCard from "@/components/GameCard";
import { getAllGames } from "@/lib/action";
import { IconType } from "react-icons";
import { FaRegStar } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoFlash } from "react-icons/io5";

export default async function Page() {
  type WhyType = {
    icon: IconType,
    iconColors: string,
    title: string,
    description: string
  }

  const whys: WhyType[] = [
    {
      icon: IoFlash,
      iconColors: 'bg-purple-800',
      title: "Instant Delivery",
      description: "Get your gaming currency delivered instantly to your account"
    },
    {
      icon: FaRegStar,
      iconColors: 'bg-blue-700',
      title: "Best Prices",
      description: "Competitive pricing with regular discounts and special offers"
    },
    {
      icon: FaArrowTrendUp,
      iconColors: 'bg-green-800',
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your gaming needs"
    },
  ];

  const games = await getAllGames() || [];

  return (
    <main className="flex flex-col">
      <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 h-[80vh] flex pt-20 justify-center items-center relative flex-col gap-y-4">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="text-5xl font-bold relative">Power Up Your Gaming</h1>
        <p className="relative text-slate-300 text-xl max-w-4xl text-center">Get instant top-ups for your favorite games. Fast, secure, and reliable gaming currency delivery.</p>
        <div className="flex gap-x-3 items-center relative">
          <button className="bg-purple-800 py-2 px-4 rounded-md cursor-pointer hover:bg-purple-700 duration-300 text-xl">Browse Games</button>
          <button className="py-2 px-4 rounded-md cursor-pointer border-2 border-white hover:bg-white hover:text-black duration-300 text-xl">Join Now</button>
        </div>
      </section>

      <section className="bg-slate-950 flex flex-col gap-y-8 py-6 px-8 relative">
        <div className="inset-0 absolute bg-white/10"></div>
        <div className="flex flex-col gap-y-4 items-center relative">
          <h3 className="text-3xl font-bold">Why Choose GameStore ?</h3>
          <p className="text-sm text-slate-300 text-center">Experience the fastest and most secure way to top up your gaming accounts</p>
        </div>
        <div className="grid grid-cols-3 gap-x-3 relative">
          {whys.map((why, id) => (
            <div key={id} className="flex flex-col gap-y-4 items-center w-full h-auto">
              <div className={`flex justify-center items-center p-3 ${why.iconColors} rounded-full`}>
                <why.icon className="size-12" />
              </div>
              <p className="text-xl font-bold">{why.title}</p>
              <p className="text-slate-300 text-center">{why.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gradient-to-b from-slate-950 via-slate-950 to-black flex flex-col gap-y-6 py-8 items-center">
        <h2 className="text-3xl font-bold text-center">Featured Games</h2>
        <p className="text-slate-300 text-center">Top up your favorite games instantly with secure payment methods</p>
        <div className="grid grid-cols-3 w-full gap-x-6 gap-y-3 max-w-7xl">
          {games.map((game, id) => (
            <GameCard key={id} game={game} />
          ))}
        </div>
        <button className="w-fit py-2 px-4 text-xl text-slate-400 border border-slate-400 rounded-md cursor-pointer hover:bg-white/20 duration-300">View All Games</button>
      </div>
    </main>
  )
}