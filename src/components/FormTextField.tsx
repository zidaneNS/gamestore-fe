export default function FormTextField({
    name,
    title,
    placeholder
}: {
    name: string,
    title: string,
    placeholder: string
}) {
    return (
        <div className="flex w-full flex-col gap-y-2">
            <label htmlFor={name} className="font-semibold">{title} :</label>
            <textarea name={name} id={name} placeholder={placeholder} autoComplete="off" className="py-2 px-4 rounded-md bg-black/20 border border-slate-500 outline-none" />
        </div>
    )
}