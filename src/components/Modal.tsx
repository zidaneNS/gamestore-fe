import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-20 flex justify-center items-center">{children}</div>
    )
}