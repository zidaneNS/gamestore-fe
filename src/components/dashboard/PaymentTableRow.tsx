export default function PaymentTableRow() {
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
                <p className="py-2 px-4 text-sm rounded-full bg-yellow-900/30 border border-yellow-300 text-yellow-300 text-center">Pending</p>
            </td>
            <td className="p-4 text-left">Tue, 22-07-2025 13:15</td>
        </tr>
    )
}