'use client';

import AddGameForm from "@/components/admin/AddGameForm";
import AddProductForm from "@/components/admin/AddProductForm";
import DeleteProductForm from "@/components/admin/DeleteProductForm";
import EditProductForm from "@/components/admin/EditProductForm";
import ProductTable from "@/components/admin/ProductTable";
import RevenueTable from "@/components/admin/RevenueTable";
import { useState } from "react";
import { IconType } from "react-icons";
import { FaRegUser } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";

export default function AdminPanelContent() {
    type StatType = {
        icon: IconType,
        iconColors: string,
        title: string,
        value: string | number
    }
    
    const stats: StatType[] = [
        {
            icon: GoPackage,
            iconColors: "bg-purple-900",
            title: "Total Products",
            value: 16
        },
        {
            icon: MdAttachMoney,
            iconColors: "bg-green-700",
            title: "Total Revenue",
            value: 100000
        },
        {
            icon: FaRegUser,
            iconColors: "bg-blue-800",
            title: "Total Users Active",
            value: 160
        }
    ];

    const [isAddGame, setIsAddGame] = useState<boolean>(false);
    const [isAddProduct, setIsAddProduct] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isDelete, setIsDelete] = useState<boolean>(false);
    const [selectedStat, setSelectedStat] = useState<StatType>(stats[0]);

    return (
        <main className="min-h-screen flex justify-center bg-gradient-to-b from-purple-950 to-black relative">
            <div className="absolute inset-0 bg-black/50"></div>

            {isAddGame && <AddGameForm setIsAddGame={setIsAddGame} />}
            {isAddProduct && <AddProductForm setIsAddProduct={setIsAddProduct} />}
            {isEdit && <EditProductForm setIsEdit={setIsEdit} />}
            {isDelete && <DeleteProductForm setIsDelete={setIsDelete} />}
            
            <div className="relative mt-30 flex flex-col gap-y-6 w-7xl">
                {/* Header */}
                <section className="w-full flex justify-between items-center">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                        <p className="text-slate-300">Manage products and monitor store performance</p>
                    </div>
                    <div className="flex gap-x-3 items-center">
                        <button onClick={() => setIsAddGame(true)} className="py-2 px-4 rounded-md bg-purple-900 cursor-pointer flex gap-x-2 items-center hover:bg-purple-700 duration-300">
                            <IoMdAdd className="size-6" />
                            <p>Add Game</p>
                        </button>
                        <button onClick={() => setIsAddProduct(true)} className="py-2 px-4 rounded-md bg-purple-900 cursor-pointer flex gap-x-2 items-center hover:bg-purple-700 duration-300">
                            <IoMdAdd className="size-6" />
                            <p>Add Product</p>
                        </button>
                    </div>
                </section>

                {/* Stat */}
                <section className="grid grid-cols-3 w-full gap-x-4">
                    {stats.map((stat, id) => (
                        <div onClick={() => setSelectedStat(stat)} key={id} className={`bg-gradient-to-b from-white/5 to-purple-950/60 border border-purple-950/60 rounded-md px-6 py-4 flex gap-x-4 items-center shadow-xl cursor-pointer hover:bg-white/10 duration-300 ${selectedStat.title === stat.title && 'bg-white/10'}`}>
                            <div className={`flex justify-center items-center p-4 rounded-md ${stat.iconColors}`}>
                                <stat.icon className="size-6" />
                            </div>
                            <div className="flex justify-between flex-col">
                                <p className="text-slate-300">{stat.title}</p>
                                <p className="text-xl font-bold">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Stat Details */}
                {selectedStat.title === stats[0].title ? 
                    <ProductTable 
                        setIsEdit={setIsEdit}
                        setIsDelete={setIsDelete}
                    />
                :
                    <RevenueTable
                        setIsEdit={setIsEdit}
                        setIsDelete={setIsDelete}
                    />
                }
            </div>
        </main>
    )
}