import React from 'react';
import Image from "next/image";

const experiences = [
    {
        year: "2021-Present",
        company: "Paypal",
        role: "Software Development Engineer 3",
        location: "Chennai",
        responsibilities: "Roles and responsibilities. " +
            "Leading a team and working as a full stack developer for a Product team.\n" +
            "Automating and Scheduling of routines using Java and Python and managing deployments on servers.\n" +
            "Designing and Implementations of Web Services and Security Services.",
        techStack: ["Java", "SpringBoot", "NextJS", "React", "NodeJS", "RestAPI", "Splunk", "GraphQL", "Docker"]

    },
    {
        year: "2019-2021",
        company: "Accolite",
        role: "Associate Technical Delivery Manager",
        location: "Chennai",
        responsibilities: "Roles and responsibilities. " +
            "Leading a team and working as a full stack developer for a Product team.\n" +
            "Automating and Scheduling of routines using Java and Python and managing deployments on servers.\n" +
            "Designing and Implementations of Web Services and Security Services.",
        techStack: ["Java", "Angular", "NodeJS", "SpringBoot", "MongoDB", "Postgresql", "ReactJS", "Python"]

    },
    {
        year: "2018-2019",
        company: "SMI",
        role: "Senior Software Engineer",
        location: "Madurai",
        responsibilities: "Roles and responsibilities. " +
            "Leading a team and working as a full stack developer for a Product team.\n" +
            "Automating and Scheduling of routines using Java and Python and managing deployments on servers.\n" +
            "Designing and Implementations of Web Services and Security Services.",
       techStack: ["Java", "Python", "Ionic", "Swift", "Objective C"]

    },
    {
        year: "2017-2018",
        company: "Altimetrik",
        role: "Senior Software Engineer",
        location: "Chennai",
        responsibilities: "Roles and responsibilities. " +
            "Leading a team and working as a full stack developer for a Product team.\n" +
            "Automating and Scheduling of routines using Java and Python and managing deployments on servers.\n" +
            "Designing and Implementations of Web Services and Security Services.",
        techStack: ["Java", "Python", "Ionic", "Swift", "Objective C"]

    },
    {
    year: "2014-2017",
    company: "Payoda Technologies",
    role: "Project Specialist",
    location: "Coimbatore",
        responsibilities: "Roles and responsibilities. " +
            "Leading a team and working as a full stack developer for a Product team.\n" +
            "Automating and Scheduling of routines using Java and Python and managing deployments on servers.\n" +
            "Designing and Implementations of Web Services and Security Services.",
   techStack: ["Java", "Python", "Ionic", "Swift", "Objective C"]

}
]

const AboutPage = () => {
    return (
        <div className="max-w-screen-2xl mx-auto mt-10 text-gray-900 sm:px-5 lg:px-20 xl:px-48">
            <div
                className="grid grid-cols-2 md:gap-6 items-center justify-center">
                <div className="col-span-2 lg:col-span-1 mx-auto">
                    <Image src="/about.png" alt="developer" height={512} width={512}></Image>
                </div>
                <div className="col-span-2 mx-auto lg:col-span-1 flex flex-col gap-8 justify-center">
                    <div className="grid grid-cols-1 grid-rows-3 gap-0 px-4">
                        <div className="justify-start self-end p-0">
                            <h1 className="text-3xl font-extrabold text-orange-500">Hello there!</h1>
                        </div>
                        <div className="row-span-2 mt-5 justify-center items-center">
                            <p className="text-gray-600 font-semibold  leading-7">
                                My name is <span className="font-extrabold text-emerald-800">Santhosh Kalisamy</span>.
                                I am a computer science engineering graduate and a software developer with <b
                                className="text-orange-500">10 years of experience</b>, adept in both front-end and back-end development. Passionate about crafting innovative solutions for real-world challenges, I am a polyglot and avid learner of new technologies and languages. With a strong problem-solving mindset and hands-on Full Stack experience, I&apos;m eager to contribute my expertise to drive impactful results in a new opportunity.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-1 gap-8 mx-auto">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="uppercase underline underline-offset-2">Age</h1>
                            <h2 className="font-bold">32</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="uppercase underline underline-offset-2">Location</h1>
                            <h2 className="font-bold">Coimbatore</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="uppercase underline underline-offset-2">Email</h1>
                            <h2 className="font-bold">santhoshkalisamy@gmail.com</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="uppercase underline underline-offset-2">Phone</h1>
                            <h2 className="font-bold">0422-6794164</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 ml-10 flex flex-col max-w-screen-sm">
                <div className="flex flex-row justify-start items-center">
                    <div className="h-4 w-4 rounded-full p-2 border-emerald-600 border-4"></div>
                    <div className="h-2 w-2 bg-orange-400 rounded-full -translate-x-4"></div>
                    <h1 className="font-bold text-orange-500 text-2xl">Education</h1>
                </div>
                <div className="flex flex-col mt-6">
                    <div className="flex md:flex-row flex-col gap-2 md:gap-0 justify-between">
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl text-gray-600">
                                Computer Science & Engineering
                            </h1>
                            <h2 className="font-semibold text-md text-gray-500">
                                KGiSL Institute of Technology
                            </h2>
                        </div>
                        <div
                            className="flex justify-center items-center border-2 p-2 border-orange-500 rounded-3xl mr-10 md:mr-0">
                            <span>2010 - 2014</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 ml-10 flex flex-col max-w-screen-sm">
                <div className="flex flex-row justify-start items-center">
                    <div className="h-4 w-4 rounded-full p-2 border-emerald-600 border-4"></div>
                    <div className="h-2 w-2 bg-orange-400 rounded-full -translate-x-4"></div>
                    <h1 className="font-bold text-orange-500 text-2xl">Experience</h1>
                </div>
                { experiences.map((experience, index) =>
                <div key={index} className="grid grid-cols-12 mt-5">
                    <div className="col-span-2 font-bold">{experience.year}</div>
                    <div className="col-span-1">
                        <div className="h-4 w-4 rounded-full bg-orange-400 ring-4 ring-orange-300"></div>
                        <div className="h-full translate-x-1.5 -translate-y-1 w-1 rounded-full bg-orange-400"></div>
                        <div className="h-3 translate-x-1.5 -translate-y-1.5 w-1 rounded-full bg-orange-400"></div>
                    </div>
                    <div className="col-span-8 flex flex-col">
                        <div>
                            <h1 className="font-bold text-xl text-gray-800">{experience.role}</h1>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <h2 className="font-semibold text-md text-gray-700">{experience.company},</h2>
                            <h2 className="font-semibold text-md text-gray-700">{experience.location}</h2>
                        </div>
                        <div className="text-gray-600 mt-4">
                            <p>{experience.responsibilities}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-8 md:gap-6 md:grid-cols-4 mt-6 justify-items-center">
                            { experience.techStack.map((technology, index) =>
                            <div key={index}>
                            <h2 className="whitespace-nowrap inline border border-black rounded-xl p-2 bg-gray-800 text-white">{technology}</h2>
                            </div>)
                            }
                        </div>
                    </div>
                </div>)
                }
            </div>

        </div>
    );
};

export default AboutPage;
