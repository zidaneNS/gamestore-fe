'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNavLinks() {
    type LinkType = {
        href: string,
        label: string
    }

    const links: LinkType[] = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/games",
            label: "Games"
        }
    ];

    const pathname = usePathname();

    return (
        <div className="md:flex gap-x-3 items-center hidden">
            {links.map((link, id) => (
                <Link key={id} href={link.href} className={`py-2 px-3 rounded-md cusor-pointer hover:bg-white/20 ${pathname === link.href ? "bg-white/20" : "bg-transparent"} duration-300`}>{link.label}</Link>
            ))}
        </div>
    )
}