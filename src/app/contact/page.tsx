'use client'

import React, {useState} from 'react';
import Image from "next/image";
import {IoMdDoneAll} from "react-icons/io";
import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {handleContactFormSubmit} from "@/actions/contactFormAction";

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
        <div className="max-w-screen-2xl mx-auto mt-10 text-gray-900 sm:px-5 lg:px-20 xl:px-48">
            <div
                className="grid grid-cols-1 lg:grid-cols-5 md:gap-6 items-center justify-center">
                <div className="lg:col-span-2 mx-auto">
                    <Image src="/contact.png" alt="developer" height={512} width={512}></Image>
                </div>
                <div className="lg:col-span-3 mx-auto flex flex-col gap-8 justify-center w-full p-10">
                    <div className="grid grid-cols-1 gap-0 md:px-4 w-full">
                        <div className="justify-start self-end p-0">
                            <h1 className="text-3xl font-extrabold text-orange-500">drop me a line</h1>
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
                                    { isSubmitting && <svg aria-hidden="true" role="status"
                                          className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101"
                                          fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="#E5E7EB"/>
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentColor"/>
                                    </svg> }
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                        </form>
                    </div>
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
                            <button onClick={() => setShowMessageSentDialog(false)} data-modal-hide="popup-modal" type="button"
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
