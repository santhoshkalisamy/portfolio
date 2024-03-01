import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({subsets: ["latin"]});

import { Poppins } from 'next/font/google'
import Footer from "@/components/Footer";

//👇 Configure our font object
const poppins = Poppins({
    subsets: ['devanagari'],
    display: 'fallback',
    weight: "500",
    variable: '--font-poppins'
})

export const metadata: Metadata = {
    title: "Santhosh Kalisamy",
    description: "Santhosh Kalisamy's Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} ${poppins.variable}` }>
        <div className="h-screen overflow-auto lg:h-screen p-2 w-full flex flex-col justify-start bg-gradient-to-b from-emerald-50 to-[rgb(239,239,239)]"> {/*to-[rgb(239,239,239)]*/}
            <div>
                <Navbar/>
            </div>
            <div className="flex-grow">
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
        </body>
        </html>
    );
}
