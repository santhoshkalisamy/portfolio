import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full h-24 flex flex-row items-center justify-center">
            <h1 className="text-emerald-600">Made in 💚 with
                <a className="underline underline-offset-2 mx-1" target="_blank" href="https://nextjs.org/">NextJs</a>
                and
                <a className="underline underline-offset-2 mx-1" target="_blank" href="https://tailwindcss.com/">Tailwind CSS</a>
            </h1>
        </footer>
);
};

export default Footer;
