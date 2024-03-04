'use client'

import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/NavLink";
import { motion } from 'framer-motion';

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
        url: "/skills",
        title: "Skills"
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
            className="h-24 text-gray-900 flex items-center justify-between px-4 lg:px-20 xl:px-48">
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
                <Link href="https://github.com/santhoshkalisamy" target="_blank">
                    <Image src="/github.png" alt="github logo" height={24} width={24}></Image>
                </Link>
                <Link href="https://www.linkedin.com/in/santhoshkalisamy/" target="_blank">
                    <Image src="/linkedin.png" alt="github logo" height={24} width={24}></Image>
                </Link>
                <Link href="https://www.instagram.com/santhosh_kalisamy/" target="_blank">
                    <Image src="/instagram.png" alt="github logo" height={24} width={24}></Image>
                </Link>
            </div>
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}
                        className="h-8 w-10 flex flex-col justify-between z-50 relative">
                    <div
                        className={`origin-left transition-all duration-300 w-10 h-1 ${menuOpen ? "bg-white rotate-45" : "bg-gray-900"}`}></div>
                    <div className={`w-10 h-1 ${menuOpen ? "bg-white opacity-0" : "bg-gray-900"}`}></div>
                    <div
                        className={`origin-left transition-all duration-300 w-10 h-1 ${menuOpen ? "bg-white -rotate-45" : "bg-gray-900"}`}></div>

                </button>
                {menuOpen &&
                    <motion.div initial={{
                        opacity: 0,
                    }} animate={{
                        opacity: 1,
                    }} transition={{
                        duration: 0.2
                    }}
                                className="absolute top-0 left-0 bg-gray-900 text-white">
                        <ul className="h-screen w-screen flex flex-col items-center justify-center gap-8 text-4xl">
                            {menuItems.map((menuItem, index) => <li key={index}>
                                <Link onClick={() => setMenuOpen(!menuOpen)} href={menuItem.url}>{menuItem.title}</Link>
                            </li>)}
                            <div className="flex flex-row gap-8 md:hidden mt-10">
                                <Link href="https://github.com/santhoshkalisamy" target="_blank">
                                    <Image className="bg-gray-50 ring-4 ring-white rounded" src="/github.png" alt="github logo" height={36} width={36}></Image>
                                </Link>
                                <Link href="https://www.linkedin.com/in/santhoshkalisamy/" target="_blank">
                                    <Image className="bg-gray-50 ring-4 ring-white rounded" src="/linkedin.png" alt="github logo" height={36} width={36}></Image>
                                </Link>
                                <Link href="https://www.instagram.com/santhosh_kalisamy/" target="_blank">
                                    <Image className="bg-gray-50 ring-4 ring-white rounded" src="/instagram.png" alt="github logo" height={36} width={36}></Image>
                                </Link>
                            </div>
                        </ul>
                    </motion.div>
                }
            </div>
        </div>
    );
};

export default Navbar;
