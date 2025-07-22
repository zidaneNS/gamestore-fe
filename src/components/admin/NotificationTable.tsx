import NotificationTableRow from "./NotificationTableRow";

export default function NotificationTable() {
    return (
        <div className="flex flex-col gap-y-4 bg-white/5 px-6 py-4 rounded-xl w-full">
            <h2 className="text-2xl font-bold">Notifications</h2>
            <table className="w-full">
                <thead>
                    <tr className="border-b border-slate-500 text-slate-400">
                        <td className="p-4 text-left">Product</td>
                        <td className="p-4 text-left">Price</td>
                        <td className="p-4 text-left">User</td>
                        <td className="p-4 text-left">Payment</td>
                        <td className="p-4 text-left">Status</td>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 8 }).map((_, id) => (
                        <NotificationTableRow 
                            key={id}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}