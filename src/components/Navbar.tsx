'use client'

import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/NavLink";

const menuItems = [
    {
        url: "/",
        title: "Home"
    },
    {
        url: "/about",
        title: "About"
    },
    {
        url: "/portfolio",
        title: "Portfolio"
    },
    {
        url: "/contact",
        title: "Contact"
    },
]

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div
            className="text-gray-900 h-full flex items-center justify-between px-5 lg:px-20 xl:px-48">
            <div className="sm:hidden md:block">
                <Link href="/" className="text-sm font-semibold shadow border border-black border-s-2 py-2">
                    <span className="text-white bg-gray-900 py-2 px-1">Santhosh</span>
                    <span className="text-gray-900 bg-white py-2 px-1">Kalisamy</span>
                </Link>
            </div>
            <div className="hidden md:flex">
                <ul className="flex flex-row gap-5">
                    {menuItems.map((menuItem, index) => <li key={index}>
                        <NavLink href={menuItem.url} title={menuItem.title}></NavLink>
                    </li>)}
                </ul>
            </div>
            <div className="hidden md:flex flex-row gap-4">
                <Link href="#">
                    <Image src="/github.png" alt="github logo" height={24} width={24}></Image>
                </Link>
                <Link href="#">
                    <Image src="/linkedin.png" alt="github logo" height={24} width={24}></Image>
                </Link>
                <Link href="#">
                    <Image src="/instagram.png" alt="github logo" height={24} width={24}></Image>
                </Link>
            </div>
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}
                        className="h-8 w-10 flex flex-col justify-evenly z-50 relative">
                    <div className={`transition-all duration-300 w-10 h-1 ${menuOpen ? "bg-white rotate-45 translate-y-3" : "bg-gray-900"}`}></div>
                    <div className={`transition-all duration-300 w-10 h-1 ${menuOpen ? "bg-white -rotate-45" : "bg-gray-900"}`}></div>
                    <div className={`w-10 h-1 ${menuOpen ? "bg-white hidden" : "bg-gray-900"}`}></div>

                </button>
                {menuOpen &&
                    <div className="absolute top-0 left-0 bg-gray-900 text-white">
                        <ul className="h-screen w-screen flex flex-col items-center justify-center gap-8 text-4xl">
                            {menuItems.map((menuItem, index) => <li key={index}>
                                <Link href={menuItem.url}>{menuItem.title}</Link>
                            </li>)}
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;
