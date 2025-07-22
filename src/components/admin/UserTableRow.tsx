import { FaEye } from "react-icons/fa";

export default function UserTableRow() {
    return (
        <tr className="border-b border-slate-500">
            <td className="p-4 text-left">
                <div className="flex gap-x-2 items-center">
                    <div className="w-14 h-14 rounded-full bg-slate-400"></div>
                    <p>John Doe</p>
                </div>
            </td>
            <td className="p-4 text-left">john@example.com</td>
            <td className="p-4 text-left">
                <div className="flex gap-x-2 items-center py-2 px-4 rounded-md w-fit bg-purple-900">
                    <p className="text-sm">12 orders</p>
                    <button className="flex gap-x-2 items-center py-2 px-4 rounded-xl cursor-pointer hover:bg-white/5 duration-300 w-fit">
                        <FaEye className="size-4" />
                    </button>
                </div>
            </td>
        </tr>
    )
}