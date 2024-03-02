import React from 'react';
import Image from "next/image";

const ContactPage = () => {
    return (
        <div className="max-w-screen-2xl mx-auto mt-10 text-gray-900 sm:px-5 lg:px-20 xl:px-48">
            <div
                className="grid grid-cols-1 lg:grid-cols-5 md:gap-6 items-center justify-center">
                <div className="lg:col-span-2 mx-auto">
                    <Image src="/contact.png" className="transform" alt="developer" height={512} width={512}></Image>
                </div>
                <div className="lg:col-span-3 mx-auto flex flex-col gap-8 justify-center w-full p-10">
                    <div className="grid grid-cols-1 gap-0 md:px-4 w-full">
                        <div className="justify-start self-end p-0">
                            <h1 className="text-3xl font-extrabold text-orange-500">drop me a line</h1>
                        </div>
                        <form>
                            <div className="flex flex-col gap-4 mb-6 mt-10">
                                <div>
                                    <label htmlFor="name"
                                           className="block mb-2 text-md font-semibold text-gray-700">Your name</label>
                                    <input type="text" id="name"
                                           className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                           placeholder="your name" required/>
                                </div>
                                <div>
                                    <label htmlFor="input-group-1"
                                           className="block mb-2 text-md font-semibold text-gray-700">Your email</label>
                                    <div className="relative ">
                                        <div
                                            className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 16">
                                                <path
                                                    d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                                <path
                                                    d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                            </svg>
                                        </div>
                                        <input type="email" id="input-group-1"
                                               className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                                               placeholder="your email" required/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message"
                                           className="block mb-2 text-md font-semibold text-gray-700">Your
                                        message</label>
                                    <textarea id="message" rows={4}
                                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                              placeholder="Write your message here..."></textarea>

                                </div>
                                <button type="submit"
                                        className="text-white bg-teal-700 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Send
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
