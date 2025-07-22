'use client';

import { useState } from "react";

export default function NotificationTableRow() {
    type statusType = 'pending' | 'success' | 'failed';

    const [status, setStatus] = useState<statusType>('pending');

    const statusColor: Record<statusType, string> = {
        pending: 'bg-yellow-500',
        success: 'bg-green-500',
        failed: 'bg-red-500'
    }

    return (
        <tr className="border-b border-slate-500">
            <td className="p-4 text-left">
            <div className="flex gap-x-2 items-center">
                    <div className="w-14 h-14 rounded-md bg-slate-400"></div>
                    <div className="flex flex-col gap-y-2">
                        <p>86 Diamonds</p>
                        <p className="text-sm text-slate-400">Mobile Legends</p>
                    </div>
                </div>
            </td>
            <td className="p-4 text-left">
                <div className="flex flex-col gap-y-2">
                    <p>Rp 10000</p>
                    <p className="text-sm text-slate-400 line-through">Rp 12000</p>
                </div>
            </td>
            <td className="p-4 text-left">
                <div className="flex flex-col gap-y-2">
                    <p>John</p>
                    <p className="text-sm text-slate-400">john@example.com</p>
                </div>
            </td>
            <td className="p-4 text-left">
                <p className="py-2 px-4 text-center border border-blue-500 text-blue-500 rounded-full bg-blue-800/10">QRIS</p>
            </td>
            <td className="p-4 text-left">
                <div className="flex gap-x-2 items-center">
                    <select onChange={(e) => setStatus(e.target.value as statusType)} name="status" id="status" className={` w-fit cursor-pointer outline-none py-2 px-4 rounded-md ${statusColor[status]}`}>
                        <option value="pending">Pending</option>
                        <option value="success">Success</option>
                        <option value="failed">Failed</option>
                    </select>
                </div>
            </td>
        </tr>
    )
}