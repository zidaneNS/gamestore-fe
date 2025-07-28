'use server';

import { getGame } from "@/lib/action";
import { Game } from "@/lib/type";
import GameDetailContent from "@/ui/games/GameDetailContent";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    const game: Game | null = await getGame(id);

     if (!game) {
        return notFound();
     }

    return (
        <main className="min-h-screen flex justify-center bg-gradient-to-b from-purple-950 to-black relative">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative mt-30 flex flex-col w-7xl">
                <GameDetailContent game={game} />
            </div>
        </main>
    )
}