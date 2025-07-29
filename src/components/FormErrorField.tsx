import React from "react";

export default function FormErrorField({ children }: { children: React.ReactNode }) {
    return <p className="text-sm font-bold text-red-500 py-2 px-4 rounded-md bg-red-500/10">{children}</p>
}