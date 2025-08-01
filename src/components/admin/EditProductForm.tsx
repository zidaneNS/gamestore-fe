import { MdClose } from "react-icons/md";
import FormInputField from "../FormInputField";
import Modal from "../Modal";
import { Dispatch, SetStateAction } from "react";
import FormSelectField from "../FormSelectField";
import DragAndDropFileInput from "../DragAndDropFileInput";

export default function EditProductForm({
    setIsEdit
}: {
    setIsEdit: Dispatch<SetStateAction<boolean>>
}) {
    return (
        <Modal>
            <div className="flex flex-col gap-y-4 py-4 px-6 rounded-md bg-slate-700 shadow-xl w-1/3 max-h-[90vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-track-white/30 scrollbar-thumb-slate-700">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">Edit Product</h1>
                    <button onClick={() => setIsEdit(false)} className="flex items-center justify-center p-1 border border-slate-500 rounded-md cursor-pointer hover:bg-white/10 duration-300">
                        <MdClose className="size-4" />
                    </button>
                </div>
                <form action="" className="flex flex-col gap-y-3">
                    <FormInputField
                        title="Name"
                        type="text"
                        placeholder="Diamonds"
                        name="name"
                    />
                    <FormInputField
                        title="Amount"
                        type="number"
                        placeholder="Enter Amount of Product"
                        name="amount"
                    />
                    <FormInputField
                        title="Price"
                        type="number"
                        placeholder="100000"
                        name="price"
                    />
                    <FormInputField
                        title="Original Price"
                        type="number"
                        placeholder="Can Empty"
                        name="original_price"
                    />
                    <FormSelectField
                        name="game_id"
                        placeholder="Select Game"
                        title="Game"
                        options={[
                            {
                                value: 1,
                                label: "Mobile Legends"
                            },
                            {
                                value: 2,
                                label: "Call Of Duty"
                            },
                            {
                                value: 3,
                                label: "PUBG"
                            },
                        ]}
                    />
                    <DragAndDropFileInput
                        title="Image"
                        name="img"
                        maxWidth={800}
                        maxHeight={800}
                    />
                    <button type="submit" className="bg-blue-500 py-2 w-full text-center cursor-pointer rounded-md hover:bg-blue-400 duration-300">Submit</button>
                </form>
            </div>
        </Modal>
    )
}