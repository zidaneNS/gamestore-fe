'use client';

import { Game, Product } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function GameDetailContent({
    game
}: {
    game: Game
}) {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>();

    return (
        <div className="flex flex-col gap-y-4 w-full">
            <Link href="/games" className="flex gap-x-2 items-center cursor-pointer hover:text-white/70 duration-300">
                <IoIosArrowRoundBack className="size-6" />
                <p>Back to games</p>
            </Link>
            <div className="flex gap-x-4 items-center">
                <div className="h-20 w-20 bg-slate-500 rounded-md"></div>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">{game.title}</h2>
                    <p className="text-slate-400">{game.category.name}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 w-full py-8">
                <div className="flex flex-col w-full gap-y-8">
                    <div className="flex flex-col gap-y-2 py-4 px-6 rounded-md border border-purple-950 bg-purple-950/40">
                        <label htmlFor="user_id">User Id :</label>
                        <input type="text" name="user_id" id="user_id" placeholder="Enter User ID" className="bg-purple-950 w-full py-1 px-2 outline-none" />
                    </div>
                    <div className="grid grid-cols-4 w-full gap-x-6 gap-y-4">
                        {game.products.map((product, id) => (
                            <div key={id} onClick={() => setSelectedProduct(product)} className={`flex flex-col gap-y-4 px-4 py-2 bg-gradient-to-b from-white/5 to-purple-950/60 border-purple-700 w-full rounded-md cursor-pointer hover:scale-105 duration-300 hover:border ${selectedProduct?.id === product.id && "border scale-105"}`}>
                                <Image
                                    src="/assets/diamond-mobile-legends.jpg"
                                    width={1000}
                                    height={1000}
                                    alt="diamond"
                                    className="size-10 object-fill rounded-md"
                                />
                                <div className="flex flex-col">
                                    <p>{product.amount}</p>
                                    <div className="text-sm text-slate-400">{game.currency_name}</div>
                                </div>
                                <div className="font-bold">Rp {product.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full h-fit flex flex-col gap-y-4 rounded-md bg-purple-950/40 border border-purple-700 py-2 px-4">
                    <div className="flex gap-x-2 items-center">
                        <Image
                            src="/assets/diamond-mobile-legends.jpg"
                            width={1000}
                            height={1000}
                            alt="diamond"
                            className="size-8 object-fill rounded-md"
                        />
                        <p>{selectedProduct?.amount || 0} {game.currency_name}</p>
                    </div>
                    <div className="flex justify-between py-2 border-y border-purple-900 w-full text-sm">
                        <p className="text-slate-400/60">Delivery Time</p>
                        <p>7 mins - 10 mins</p>
                    </div>
                    <p className="w-full text-right text-xl font-bold">Total: Rp {selectedProduct?.price || 0}</p>
                    <div className="w-full py-2 rounded-md text-center font-bold bg-green-700 cursor-pointer hover:bg-green-500 duration-300">Checkout</div>
                </div>
            </div>
        </div>
    )
}