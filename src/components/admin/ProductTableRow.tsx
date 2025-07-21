import { Dispatch, SetStateAction } from "react"

export default function ProductTableRow({
    setIsEdit,
    setIsDelete
}: {
    setIsEdit: Dispatch<SetStateAction<boolean>>,
    setIsDelete: Dispatch<SetStateAction<boolean>>
}) {
    return (
        <tr className="border-b border-slate-500">
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
                    <button onClick={() => setIsEdit(true)} className="rounded-md py-2 px-4 bg-purple-800 hover:bg-purple-700 duration-300 cursor-pointer">Edit</button>
                    <button onClick={() => setIsDelete(true)} className="rounded-md py-2 px-4 bg-red-500 hover:bg-red-400 duration-300 cursor-pointer">Delete</button>
                </div>
            </td>
        </tr>
    )
}