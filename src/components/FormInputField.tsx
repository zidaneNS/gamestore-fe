import { HTMLInputTypeAttribute } from "react"

export default function FormInputField({
    name,
    title,
    placeholder,
    type
}: {
    name: string,
    title: string,
    placeholder: string,
    type: HTMLInputTypeAttribute
}) {
    return (
        <div className="flex w-full flex-col gap-y-2">
            <label htmlFor={name} className="font-semibold">{title} :</label>
            <input type={type} name={name} id={name} placeholder={placeholder} autoComplete="off" className="py-2 px-4 rounded-md bg-black/20 border border-slate-500 outline-none" />
        </div>
    )
}