import React from 'react';
import Image from "next/image";

const experiences = [
    {
        year: "2021-Present",
        company: "Paypal",
        role: "Software Development Engineer 3",
        location: "Chennai",
        responsibilities: [
            "An individual contributor working primarily on Java and Spring stack.",
            "Developing highly scalable financial solutions. Involved in end-to-end development and deployment process.",
            "Collaborating with multiple stakeholders to understand the business requirements of the product.",
            "Performing Code Reviews and delegating tasks to individuals based on the complexity of work.",
            "Actively involved in design, development, and unit testing in accordance with established standards.",
            "Contributed to development of an API simulator framework for end-to-end testing."
        ],
        techStack: ["Java", "SpringBoot", "NextJS", "React", "NodeJS", "RestAPI", "Splunk", "GraphQL", "Docker"]

    },
    {
        year: "2019-2021",
        company: "Accolite",
        role: "Associate Technical Delivery Manager",
        location: "Chennai",
        responsibilities: [
            "Worked directly with one of the leading shipping companies.",
            "Worked as an Associate Technical Delivery Manager, managing a team of 5 members.",
            "Worked on end-to-end development of a Crew Management System.",
            "Implemented some of the complex features including a canvas-based room booking application in Angular.",
            "Led a team and worked as a full stack developer for a Product team.",
            "Automated and scheduled routines using Java and Python and managed deployments on servers.",
            "Designed and implemented Web Services and Security Services.",
            "Also worked on Node.js for certain parts of the project."
        ],
        techStack: ["Java", "Angular", "NodeJS", "SpringBoot", "MongoDB", "Postgresql", "ReactJS", "Python"]

    },
    {
        year: "2018-2019",
        company: "SMI",
        role: "Senior Software Engineer",
        location: "Madurai",
        responsibilities: [
            "Worked as a Senior Software Developer and Team Lead on a supply chain management project.",
            "Responsible for end-to-end development of various new features, including database design and maintenance.",
            "Worked on both frontend and backend. Backend was primarily developed using Java and Spring, with MongoDB and MySQL as data stores.",
            "Implemented Ehcache for caching to improve application performance.",
            "On the frontend side, worked with Angular for developing user interfaces."
        ],
        techStack: ["Java", "Springboot", "MongoDB", "ElasticSearch", "MySQL", "Angular"]

    },
    {
        year: "2017-2018",
        company: "Paypal [Contract via Altimetrik]",
        role: "Senior Software Engineer",
        location: "Chennai",
        responsibilities: [
            "Worked as a Senior Software Developer in a contract role, working directly at Paypal.",
            "Involved in the integrations of different banks and card networks with Paypal services, primarily using Java and Spring Boot for development.",
            "Contributed to the development of a monitoring dashboard using Node.js, Angular, Elasticsearch, and MongoDB.",
            "Worked as an individual contributor."
        ],
        techStack: ["Java", "SpringBoot", "NextJS", "React", "NodeJS", "RestAPI", "Splunk", "GraphQL", "Docker"]

    },
    {
        year: "2014-2017",
        company: "Payoda Technologies",
        role: "Project Specialist",
        location: "Coimbatore",
        responsibilities : [
            "Started my career as an iOS application developer, developing and maintaining various iOS applications.",
            "Transitioned into a Hybrid application developer role, working with Ionic and Cordova frameworks to build cross-platform mobile applications.",
            "Spent 6 months as a Python developer, working on various backend services and data processing tasks.",
            "Moved into a Java developer position, where I worked on a Cloud Networking Application using Java, Spring, OSI, MySQL, Hadoop, HBase, and Angular. This role involved both development and maintenance of the application, as well as dealing with cloud networking complexities.",
            "Progressed to a team lead role, where I was responsible for mentoring around 6 junior developers, guiding them through their tasks and helping them grow as professionals.",
            "Received multiple spot awards and was recognized as the most valuable person during my tenure at Payoda for my contributions and leadership."
        ],
        techStack: ["Java", "Python", "Ionic", "Swift", "Objective C", "Spring", "MySQL", "Hadoop", "HBase", "Angular"]

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
                                className="text-orange-500">10 years of experience</b>, adept in both front-end and
                                back-end development. Passionate about crafting innovative solutions for real-world
                                challenges, I am a polyglot and avid learner of new technologies and languages. With a
                                strong problem-solving mindset and hands-on Full Stack experience, I&apos;m eager to
                                contribute my expertise to drive impactful results in a new opportunity.</p>
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
            <div className="grid grid-cols-1 xl:grid-cols-12">
                <div className="xl:col-span-6 mt-10 ml-10 flex flex-col max-w-screen-sm">
                    <div className="flex flex-row justify-start items-center">
                        <div className="h-4 w-4 rounded-full p-2 border-emerald-600 border-4"></div>
                        <div className="h-2 w-2 bg-orange-400 rounded-full -translate-x-4"></div>
                        <h1 className="font-bold text-orange-500 text-2xl">Education</h1>
                    </div>
                    <div className="flex flex-col mt-6">
                        <div className="flex lg:flex-col gap-2 md:gap-0 justify-between">
                            <div className="flex flex-col">
                                <h1 className="font-bold text-xl text-gray-600">
                                    Computer Science & Engineering
                                </h1>
                                <h2 className="font-semibold text-md text-gray-500">
                                    KGiSL Institute of Technology
                                </h2>
                            </div>
                            <div
                                className="flex w-1/4 mt-5 justify-center items-center border-2 p-2 border-orange-500 rounded-3xl mr-10 md:mr-0">
                                <span>2010 - 2014</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 mt-10 ml-10 flex flex-col max-w-screen-sm">
                    <div className="flex flex-row justify-start items-center">
                        <div className="h-4 w-4 rounded-full p-2 border-emerald-600 border-4"></div>
                        <div className="h-2 w-2 bg-orange-400 rounded-full -translate-x-4"></div>
                        <h1 className="font-bold text-orange-500 text-2xl">Experience</h1>
                    </div>
                    {experiences.map((experience, index) =>
                        <div key={index} className="grid grid-cols-12 mt-5">
                            <div className="col-span-3 font-bold sm:translate-x-0">{experience.year}</div>
                            <div className="col-span-1">
                                <div className="h-4 w-4 rounded-full bg-orange-400 ring-4 ring-orange-300"></div>
                                <div
                                    className="h-full translate-x-1.5 -translate-y-1 w-1 rounded-full bg-orange-400"></div>
                                <div
                                    className="h-3 translate-x-1.5 -translate-y-1.5 w-1 rounded-full bg-orange-400"></div>
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
                                    <p>
                                        <ul>
                                            {experience.responsibilities.map((responsibility, index) => (
                                                <li className="block" key={index}>▸ {responsibility}</li>
                                            ))}
                                        </ul>
                                    </p>
                                </div>
                                <div
                                    className="grid grid-cols-2 auto-cols-auto gap-8 md:gap-6 md:grid-cols-3 2xl:grid-cols-4 mt-6 justify-items-center">
                                    {
                                        experience.techStack.map((technology, index) =>
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
        </div>
    );
};

export default AboutPage;
