import { MdClose } from "react-icons/md";
import FormInputField from "../FormInputField";
import Modal from "../Modal";
import { Dispatch, SetStateAction } from "react";

export default function AddGameForm({
    setIsAddGame
}: {
    setIsAddGame: Dispatch<SetStateAction<boolean>>
}) {
    return (
        <Modal>
            <div className="flex flex-col gap-y-4 py-4 px-6 rounded-md bg-slate-700 shadow-xl w-1/3">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">Add Game</h1>
                    <button onClick={() => setIsAddGame(false)} className="flex items-center justify-center p-1 border border-slate-500 rounded-md cursor-pointer hover:bg-white/10 duration-300">
                        <MdClose className="size-4" />
                    </button>
                </div>
                <form action="" className="flex flex-col gap-y-3">
                    <FormInputField
                        title="Title"
                        type="text"
                        placeholder="Enter Game Title"
                        name="title"
                    />
                    <FormInputField
                        title="Description"
                        type="text"
                        placeholder="Enter Game Title"
                        name="title"
                    />
                </form>
            </div>
        </Modal>
    )
}