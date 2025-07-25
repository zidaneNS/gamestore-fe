import { Dispatch, SetStateAction } from "react";
import GameTableRow from "./GameTableRow";

export default function GameTable({
    setIsEdit,
    setIsDelete
}: {
    setIsEdit: Dispatch<SetStateAction<boolean>>,
    setIsDelete: Dispatch<SetStateAction<boolean>>
}) {
    return (
        <div className="flex flex-col gap-y-4 bg-white/5 px-6 py-4 rounded-xl w-full">
            <h2 className="text-2xl font-bold">Game Management</h2>
            <table className="w-full">
                <thead>
                    <tr className="border-b border-slate-500 text-slate-400">
                        <td className="p-4 text-left">Banner</td>
                        <td className="p-4 text-left">Title</td>
                        <td className="p-4 text-left">Description</td>
                        <td className="p-4 text-left">Currency</td>
                        <td className="p-4 text-left">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 8 }).map((_, id) => (
                        <GameTableRow
                            key={id}
                            setIsEdit={setIsEdit}
                            setIsDelete={setIsDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}