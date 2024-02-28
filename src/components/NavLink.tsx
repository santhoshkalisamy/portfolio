'use client'

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

interface Props {
    href: string,
    title: string
}
const NavLink = ({href, title}:Props) => {

    const pathname = usePathname();

    return (
        <Link className={`rounded font-semibold transition-all duration-300 text-gray-900 hover:bg-gray-900 hover:text-white hover:p-2 ${pathname === href ? "bg-gray-900 text-white p-2" : ""} `} href={href}>{title}</Link>
    );
};

export default NavLink;
