'use client'

import React, {useState} from 'react';
import Image from "next/image";
import {IoMdDoneAll} from "react-icons/io";
import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {handleContactFormSubmit} from "@/actions/contactFormAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email({
        message: "Valid email is required"
    }),
    message: z.string().min(10, "Message must contain at least 10 characters")
})

export type ContactForm = z.infer<typeof contactFormSchema>;


const ContactPage = () => {
    const [showMessageSentDialog, setShowMessageSentDialog] = useState(false);
    const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<ContactForm>({
        resolver: zodResolver(contactFormSchema)
    });
    const submitHandler: SubmitHandler<ContactForm> = async (data: ContactForm) => {
        const result = await handleContactFormSubmit(data);
        console.log(result);
        if (result) {
            setShowMessageSentDialog(true);
        }
        reset();
    }
    return (
        <div className="max-w-screen-2xl mx-auto -mt-10 lg:mt-5 text-gray-900 sm:px-5 lg:px-20 xl:px-48">
            <div
                className="grid grid-cols-1 lg:grid-cols-5 md:gap-6 items-center justify-center">
                <div className="lg:col-span-3 mx-auto flex flex-col gap-8 justify-center w-full p-10">
                    <div className="grid grid-cols-1 grid-rows-2 gap-0 md:px-4 w-full">
                        <div className="justify-start self-end p-0">
                            <h1 className="text-3xl font-extrabold text-orange-500 self-center text-center">let&apos;s
                                connect.</h1>
                        </div>
                        <div className="mt-2 text-gray-500">
                            <span className="block text-lg text-center self-center">
                                Connect with me on social / email
                            </span>
                            <span className="block text-lg text-center self-center">
                                or
                            </span>
                            <span className="block text-lg text-center self-center">
                                drop me a message
                            </span>
                        </div>
                        <div
                            className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-6 mt-10 justify-center items-center justify-items-center">
                            <div className="flex flex-col justify-center items-center h-20 w-20">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                                    <path
                                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                                </svg>
                                <Link href={"https://twitter.com/santhoshK_cbe"} target="_blank">
                                    <span className="underline underline-offset-2">Twitter</span>
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center items-center h-20 w-20">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 496 512">
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                </svg>
                                <Link href={"https://github.com/santhoshkalisamy"} target="_blank">
                                    <span className="underline underline-offset-2">Github</span>
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center items-center h-20 w-20">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 448 512">
                                    <path
                                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                </svg>
                                <Link href={"https://www.linkedin.com/in/santhoshkalisamy/"} target="_blank">
                                    <span className="underline underline-offset-2">Linkedin</span>
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center items-center h-20 w-20">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 448 512">
                                    <path
                                        d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/>
                                </svg>
                                <Link href={"https://www.instagram.com/santhosh_kalisamy/"} target="_blank">
                                    <span className="underline underline-offset-2">Instagram</span>
                                </Link>
                            </div>
                            <div className="col-span-2 sm:col-span-4 underline underline-offset-4 text-emerald-800 font-bold">
                                <Link href="mailto:santhoshkalisamy@gmail.com"
                                      target="_blank">santhoshkalisamy@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 mx-auto">
                    <Image style={{ transform: "scaleX(-1)" }} src="/contact.png" alt="developer" height={512} width={512}></Image>
                </div>
            </div>
            <div className="lg:col-span-3 mx-auto flex flex-col gap-8 justify-center w-full p-10">
                <div className="grid grid-cols-1 gap-0 md:px-4 w-full">
                    <div className="justify-start self-end p-0">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-orange-500 whitespace-nowrap">drop me a message</h1>
                    </div>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className="flex flex-col gap-4 mb-6 mt-10">
                            <div>
                                <label htmlFor="name"
                                       className="block mb-2 text-md font-semibold text-gray-700">Your name</label>
                                <input {...register("name")} type="text" id="name"
                                       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Please enter your name"/>
                                <p className="text-red-500 text-xs italic">{errors.name?.message}</p>
                            </div>
                            <div>
                                <label htmlFor="input-group-1"
                                       className="block mb-2 text-md font-semibold text-gray-700">Your email</label>
                                <input {...register("email")} type="email" id="input-group-1"
                                       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Please enter your email"/>
                                <p className="text-red-500 text-xs italic">{errors.email?.message}</p>
                            </div>
                            <div>
                                <label htmlFor="message"
                                       className="block mb-2 text-md font-semibold text-gray-700">Your
                                    message</label>
                                <textarea {...register("message")} id="message" rows={4}
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                          placeholder="Write your message here..."></textarea>
                                <p className="text-red-500 text-xs italic">{errors.message?.message}</p>
                            </div>
                            <button disabled={isSubmitting} type="submit"
                                    className="text-white bg-teal-700 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                                {isSubmitting && <svg aria-hidden="true" role="status"
                                                      className="inline w-4 h-4 me-3 text-white animate-spin"
                                                      viewBox="0 0 100 101"
                                                      fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="#E5E7EB"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentColor"/>
                                </svg>}
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="popup-modal" tabIndex={-1}
                 className={`${!showMessageSentDialog ? "hidden" : "flex"} overflow-y-auto backdrop-blur-sm fixed overflow-x-hidden inset-0 z-50 w-full h-[calc(100%-1rem)] max-h-full items-center justify-center`}>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-gray-100 opacity-90 rounded-lg shadow-lg">
                        <button type="button" onClick={() => setShowMessageSentDialog(false)}
                                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                data-modal-hide="popup-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-4 md:p-5 text-center">
                            <IoMdDoneAll
                                className="mx-auto h-12 w-12 mb-2 text-emerald-600 font-extrabold"></IoMdDoneAll>
                            <h3 className="mb-5 text-lg font-bold text-gray-500">Your message has been sent.</h3>
                            <button onClick={() => setShowMessageSentDialog(false)} data-modal-hide="popup-modal"
                                    type="button"
                                    className="text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                Alright
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
