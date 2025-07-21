import { Dispatch, SetStateAction } from "react";
import Modal from "../Modal";
import { CiWarning } from "react-icons/ci";

export default function DeleteProductForm({
    setIsDelete
}: {
    setIsDelete: Dispatch<SetStateAction<boolean>>
}) {
    return (
        <Modal>
            <div className="flex flex-col items-center gap-y-4 py-4 px-6 rounded-md bg-slate-700 shadow-xl w-1/3 max-h-[90vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-track-white/30 scrollbar-thumb-slate-700">
                <div className="flex items-center justify-center p-2 rounded-full bg-white/10">
                    <CiWarning className="size-12 text-red-500" />
                </div>
                <h1 className="text-xl font-bold">Are you sure want to delete this product ?</h1>
                <div className="flex flex-col text-slate-300 text-sm w-full">
                    <p>Name: Diamonds</p>
                    <p>Amount: 86</p>
                    <p>Game: Mobile Legends</p>
                </div>
                <button className="w-full text-center py-2 rounded-md cursor-pointer bg-red-500 hover:bg-red-400 duration-300">Delete</button>
                <button onClick={() => setIsDelete(false)} className="w-full text-center py-2 rounded-md cursor-pointer border border-slate-500 hover:bg-white/20 duration-300">Cancel</button>
            </div>
        </Modal>
    )
}