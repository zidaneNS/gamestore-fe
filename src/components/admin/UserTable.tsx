import UserTableRow from "./UserTableRow";

export default function UserTable() {
    return (
        <div className="flex flex-col gap-y-4 bg-white/5 px-6 py-4 rounded-xl w-full">
            <h2 className="text-2xl font-bold">User List</h2>
            <table className="w-full">
                <thead>
                    <tr className="border-b border-slate-500 text-slate-400">
                        <td className="p-4 text-left">User</td>
                        <td className="p-4 text-left">Email</td>
                        <td className="p-4 text-left">Order History</td>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 8 }).map((_, id) => (
                        <UserTableRow 
                            key={id}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}