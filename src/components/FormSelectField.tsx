import { OptionType } from "@/lib/type"

export default function FormSelectField({
    name,
    title,
    placeholder,
    options
}: {
    name: string,
    title: string,
    placeholder: string,
    options: OptionType[]
}) {
    return (
        <div className="flex w-full flex-col gap-y-2">
            <label htmlFor={name}>{title} :</label>
            <select name={name} id={name} className="py-2 px-4 rounded-md bg-slate-800 border border-slate-500 outline-none cursor-pointer duration-30">
                <option value="">{placeholder}</option>
                {options.map((option, id) => (
                    <option key={id} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}