import PaymentTable from "@/components/dashboard/PaymentTable";
import { IconType } from "react-icons";
import { FaCreditCard, FaEdit } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";

export default function Page() {
    type StatType = {
        icon: IconType,
        iconColors: string,
        title: string,
        value: string | number
    }
    
    const stats: StatType[] = [
        {
            icon: FaCreditCard,
            iconColors: "bg-purple-800",
            title: "Total Spent",
            value: 100000
        },
        {
            icon: IoIosTimer,
            iconColors: "bg-blue-800",
            title: "Pending Orders",
            value: 160
        },
        {
            icon: IoIosTimer,
            iconColors: "bg-green-800",
            title: "Successfull Orders",
            value: 160
        },
    ];

    return (
        <main className="min-h-screen flex justify-center bg-gradient-to-b from-purple-950 to-black relative pb-8">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative mt-30 flex flex-col gap-y-6 w-7xl">
                {/* Header */}
                <section className="flex gap-x-3 items-center">
                    <div className="w-20 h-20 rounded-full bg-slate-400"></div>
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">User</h1>
                        <p className="text-sm text-slate-400">user@example.com</p>
                    </div>
                    <button className="w-fit p-2 rounded-md cursor-pointer hover:bg-white/20 duration-300">
                        <FaEdit className="size-6 text-slate-400" />
                    </button>
                </section>

                {/* Stat */}
                <section className="grid grid-cols-3 w-full gap-x-4">
                    {stats.map((stat, id) => (
                        <div key={id} className={`bg-gradient-to-b from-white/5 to-purple-950/60 border border-purple-950/60 rounded-md px-6 py-4 flex gap-x-4 items-center shadow-xl cursor-pointer hover:bg-white/10 duration-300`}>
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

                <PaymentTable />
            </div>
        </main>
    )
}