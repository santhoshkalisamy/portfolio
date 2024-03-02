'use server'

import {ContactForm} from "@/app/contact/page";
import nodemailer from "nodemailer";


export const handleContactFormSubmit = async (data: ContactForm) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const info = await transporter.sendMail({
        from: data.email,
        to: "santhoshkalisamy@gmail.com",
        subject: "Your received a new message from your portfolio!",
        text: data.message + " from " + data.email + " by " + data.name,
        html: data.message + " from " + data.email + " by " + data.name,
    });
    return !!info;
}
