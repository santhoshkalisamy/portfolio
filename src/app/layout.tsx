import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({subsets: ["latin"]});

import { Poppins } from 'next/font/google'
import Footer from "@/components/Footer";
import Head from "next/head";
import {Analytics} from "@vercel/analytics/next";

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
    icons: {
        icon: "/icon.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className={`${inter.className} ${poppins.variable}` }>
        <Analytics />
        <div className="h-full md:h-screen md:overflow-auto p-2 w-full flex flex-col justify-start bg-gradient-to-b from-emerald-50 to-orange-100"> {/*to-[rgb(239,239,239)]*/}
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
