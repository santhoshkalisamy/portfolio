import Image from "next/image";
import Link from "next/link";
import {ImProfile} from "react-icons/im";
import {MdContactPhone} from "react-icons/md";
import {FaAnglesRight} from "react-icons/fa6";
import 'typeface-poppins';

export default function Home() {
    return (
        <div className="max-w-screen-2xl mx-auto mt-10 grid grid-cols-2 gap-6 items-center justify-center text-gray-900 sm:px-5 lg:px-20 xl:px-48">
            <div className="col-span-2 lg:col-span-1 mx-auto">
                <Image src="/dev.png" alt="developer" height={512} width={512}></Image>
            </div>
            <div className="col-span-2  mx-auto lg:col-span-1 flex flex-col gap-8 items-center justify-center">
                <div className="grid grid-cols-1 grid-rows-5 gap-0 pt-2 px-4 lg:pt-24">
                    <div className="justify-start self-end p-0">
                        <h1 className="text-3xl font-extrabold text-orange-500">I&apos;m</h1>
                    </div>
                    <div className="self-end justify-self-start p-0 animate-slideRight">
                        <h1 className="text-6xl font-extrabold lg:ml-5">Santhosh</h1>
                    </div>
                    <div className="lg:self-end lg:justify-self-end p-0 animate-slideLeft">
                        <h1 className="text-6xl font-extrabold lg:ml-5">Kalisamy</h1>
                    </div>
                    <div className="row-span-2 mt-5 justify-center">
                    <p className="text-gray-600 font-semibold  leading-7">
                        Full-stack Software Developer adept in both front-end and back-end development. Passionate about crafting innovative solutions for real-world challenges.</p>
                    </div>
                </div>
                {/*<h2 className="text-2xl font-bold self-center text-center rounded-lg ring-1 ring-gray-500 p-2">with 10*/}
                {/*    years of experience</h2>*/}

                <div className="flex gap-8 flex-col">
                    <div className="w-full mx-auto">
                        <div
                            className="mb-5 flex flex-row justify-center items-center gap-4 w-full font-extrabold whitespace-nowrap rounded ring-1 bg-gray-50 ring-black text-gray-700">
                            <Link className="p-4 hover:text-xl transition-all duration-300 text-orange-500" href="/skills">&lt; My
                                Skills &gt;</Link>
                        </div>
                        <div
                            className="flex flex-row justify-center items-center gap-4 w-full font-extrabold whitespace-nowrap rounded ring-1 bg-gray-50 ring-black text-gray-700">
                            <Link className="p-4 hover:text-xl transition-all duration-300" href="/about">More about
                                me</Link>
                            <FaAnglesRight className="text-lg animate-slide"></FaAnglesRight>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 mb-10">
                        <button
                            className="hover:text-emerald-100 flex items-center justify-center gap-1 font-bold whitespace-nowrap p-2 rounded ring-1 bg-black text-white">
                            <ImProfile className="inline"></ImProfile>
                            <a href="/Santhosh_Resume.pdf" target="_blank" download>Download Resume</a>
                        </button>
                        <button
                            className="hover:text-emerald-100 flex items-center justify-center gap-1 font-bold whitespace-nowrap p-2 rounded ring-1 ring-black bg-black text-white">
                            <MdContactPhone className="inline"></MdContactPhone>
                            <Link href="/contact">Contact</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
