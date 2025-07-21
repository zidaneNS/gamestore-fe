import { MdClose } from "react-icons/md";
import FormInputField from "../FormInputField";
import Modal from "../Modal";
import { Dispatch, SetStateAction } from "react";
import FormTextField from "../FormTextField";
import FormSelectField from "../FormSelectField";
import DragAndDropFileInput from "../DragAndDropFileInput";

export default function AddGameForm({
    setIsAddGame
}: {
    setIsAddGame: Dispatch<SetStateAction<boolean>>
}) {
    return (
        <Modal>
            <div className="flex flex-col gap-y-4 py-4 px-6 rounded-md bg-slate-700 shadow-xl w-1/3 max-h-[90vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-track-white/30 scrollbar-thumb-slate-700">
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
                    <FormTextField
                        title="Description"
                        placeholder="Enter Game Description"
                        name="description"
                    />
                    <FormSelectField
                        name="category_id"
                        placeholder="Select Game Category"
                        title="Category"
                        options={[
                            {
                                value: 1,
                                label: "MOBA"
                            },
                            {
                                value: 2,
                                label: "FPS"
                            },
                            {
                                value: 3,
                                label: "Battle Royale"
                            },
                        ]}
                    />
                    <DragAndDropFileInput
                        title="Image"
                        name="img"
                    />
                    <button type="submit" className="bg-blue-500 py-2 w-full text-center cursor-pointer rounded-md hover:bg-blue-400 duration-300">Submit</button>
                </form>
            </div>
        </Modal>
    )
}