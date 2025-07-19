import { IconType } from "react-icons";
import { FaRegUser } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";

export default function Page() {
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

    return (
        <main className="min-h-screen flex justify-center bg-gradient-to-b from-purple-950 to-black relative">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative mt-30 flex flex-col gap-y-6 w-7xl">
                {/* Header */}
                <section className="w-full flex justify-between items-center">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                        <p className="text-slate-300">Manage products and monitor store performance</p>
                    </div>
                    <div className="flex gap-x-3 items-center">
                        <button className="py-2 px-4 rounded-md bg-purple-900 cursor-pointer flex gap-x-2 items-center hover:bg-purple-700 duration-300">
                            <IoMdAdd className="size-6" />
                            <p>Add Game</p>
                        </button>
                        <button className="py-2 px-4 rounded-md bg-purple-900 cursor-pointer flex gap-x-2 items-center hover:bg-purple-700 duration-300">
                            <IoMdAdd className="size-6" />
                            <p>Add Product</p>
                        </button>
                    </div>
                </section>

                {/* Stat */}
                <section className="grid grid-cols-3 w-full gap-x-4">
                    {stats.map((stat, id) => (
                        <div key={id} className="bg-gradient-to-b from-white/5 to-purple-950/60 border border-purple-950/60 rounded-md px-6 py-4 flex gap-x-4 items-center shadow-xl">
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

                {/* Products */}
                <div className="flex flex-col gap-y-4 bg-white/5 px-6 py-4 rounded-xl w-full">
                    <h2 className="text-2xl font-bold">Products Management</h2>
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-500 text-slate-400">
                                <td className="p-4 text-left">Product</td>
                                <td className="p-4 text-left">Game</td>
                                <td className="p-4 text-left">Price</td>
                                <td className="p-4 text-left">Status</td>
                                <td className="p-4 text-left">Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 8 }).map((_, id) => (
                                <tr key={id} className="border-b border-slate-500">
                                    <td className="p-4 text-left">
                                        <div className="flex gap-x-2 items-center">
                                            <div className="w-14 h-14 rounded-md bg-slate-400"></div>
                                            <p>56 Diamonds</p>
                                        </div>
                                    </td>
                                    <td className="p-4 text-left">Mobile Legends</td>
                                    <td className="p-4 text-left">
                                        <div className="flex flex-col gap-y-2">
                                            <p>Rp 10000</p>
                                            <p className="text-sm text-slate-400 line-through">Rp 12000</p>
                                        </div>
                                    </td>
                                    <td className="p-4 text-left">
                                        <div className="flex gap-x-2 items-center">
                                            <p className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-yellow-300 w-fit text-xs font-semibold">Popular</p>
                                            <p className="px-6 py-2 rounded-full bg-red-500 w-fit text-xs font-semibold">Sale</p>
                                        </div>
                                    </td>
                                    <td className="p-4 text-left">
                                        <div className="flex gap-x-2 items-center">
                                            <button className="rounded-md py-2 px-4 bg-purple-800 hover:bg-purple-700 duration-300 cursor-pointer">Edit</button>
                                            <button className="rounded-md py-2 px-4 bg-red-500 hover:bg-red-400 duration-300 cursor-pointer">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}