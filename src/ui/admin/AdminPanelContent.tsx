'use client';

import AddGameForm from "@/components/admin/AddGameForm";
import AddProductForm from "@/components/admin/AddProductForm";
import DeleteProductForm from "@/components/admin/DeleteProductForm";
import EditProductForm from "@/components/admin/EditProductForm";
import GameTable from "@/components/admin/GameTable";
import NotificationTable from "@/components/admin/NotificationTable";
import ProductTable from "@/components/admin/ProductTable";
import RevenueTable from "@/components/admin/RevenueTable";
import UserTable from "@/components/admin/UserTable";
import useAuth from "@/contexts/AuthContext";
import { redirect } from "next/navigation";
import { useState } from "react";
import { IconType } from "react-icons";
import { CiSearch } from "react-icons/ci";
import { FaGamepad, FaRegUser } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { IoMdAdd, IoMdNotifications } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";

export default function AdminPanelContent() {
    const { user } = useAuth();

    if (user) {
        return redirect('/');
    }
    
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
        },
        {
            icon: IoMdNotifications,
            iconColors: "bg-red-500",
            title: "Notifications",
            value: 16
        },
        {
            icon: FaGamepad,
            iconColors: "bg-slate-500",
            title: "Games",
            value: 3
        }
    ];

    const [isAddGame, setIsAddGame] = useState<boolean>(false);
    const [isAddProduct, setIsAddProduct] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isDelete, setIsDelete] = useState<boolean>(false);
    const [selectedStat, setSelectedStat] = useState<StatType>(stats[0]);

    return (
        <main className="min-h-screen flex justify-center bg-gradient-to-b from-purple-950 to-black relative pb-8">
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
                <section className="grid grid-cols-5 w-full gap-x-4">
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

                {/* Search Bar */}
                <div className="w-2/3 border border-slate-600 rounded-md bg-black/30 flex gap-x-3 items-center py-2 px-3">
                    <CiSearch className="size-6" />
                    <input type="text" name="search" id="search" placeholder="Search..." className="w-full bg-transparent outline-none" />
                </div>

                {/* Stat Details */}
                {selectedStat.title === stats[0].title ? 
                    <ProductTable 
                        setIsEdit={setIsEdit}
                        setIsDelete={setIsDelete}
                    />
                : selectedStat.title === stats[1].title ?
                    <RevenueTable />
                :  selectedStat.title === stats[2].title ? 
                    <UserTable />
                : selectedStat.title === stats[3].title ?
                    <NotificationTable />
                :   <GameTable
                        setIsEdit={setIsEdit}
                        setIsDelete={setIsDelete}
                    />
                }
            </div>
        </main>
    )
}