import Image from "next/image"
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
                    <Image
                        src="/assets/mobile-legends.jpg"
                        alt="Mobile Legends"
                        width={1000}
                        height={1000}
                        className="w-full object-fill"
                    />
                </div>
            </td>
            <td className="p-4 text-left">
                <div className="flex flex-col gap-y-2">
                    <p>Mobile Legends</p>
                    <p className="text-sm text-slate-400">MOBA</p>
                </div>
            </td>
            <td className="p-4 text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem delectus veniam, quos vitae tempora quasi.</td>
            <td className="p-4 text-left">Diamonds</td>
            <td className="p-4 text-left">
                <div className="flex gap-x-2 items-center">
                    <button onClick={() => setIsEdit(true)} className="rounded-md py-2 px-4 bg-purple-800 hover:bg-purple-700 duration-300 cursor-pointer">Edit</button>
                    <button onClick={() => setIsDelete(true)} className="rounded-md py-2 px-4 bg-red-500 hover:bg-red-400 duration-300 cursor-pointer">Delete</button>
                </div>
            </td>
        </tr>
    )
}