import React from 'react';
import Image from "next/image";


const skills = [
    {
        section: "Frontend",
        icon: "/frontend.png",
        skills: [
            {
                name: "JavaScript",
                icon: "/javascript.png",
                level: "Advanced"
            },
            {
                name: "Jquery",
                icon: "/jquery.png",
                level: "Intermediate",
            },
            {
                name: "Angular",
                icon: "/angular.png",
                level: "Advanced"
            },
            {
                name: "React",
                icon: "/react.png",
                level: "Advanced"
            },
            {
                name: "NextJs",
                icon: "/nextjs.png",
                level: "Advanced"
            },
            {
                name: "Tailwind CSS",
                icon: "/tailwindcss.png",
                level: "Intermediate"
            },
            {
                name: "Material UI",
                icon: "/materialui.png",
                level: "Intermediate"
            }
        ]
    },
    {
        section: "Backend",
        icon: "/backend.png",
        skills: [
            {
              name: "Java",
                icon: "/java.png",
                level: "Advanced"
            },
            {
                name: "Spring Boot",
                icon: "/springboot.svg",
                level: "Advanced"
            },
            {
                name: "Python",
                icon: "/python.png",
                level: "Intermediate"

            },
            {
                name: "NodeJs",
                icon: "/nodejs.png",
                level: "Advanced"
            },
            {
                name: "ExpressJs",
                icon: "/expressjs.png",
                level: "Intermediate"
            },
            {
                name: "GoLang",
                icon: "/golang.png",
                level: "Beginner"
            },
            {
                name: "MongoDB",
                icon: "/mongodb.png",
                level: "Intermediate"
            },
            {
                name: "Firebase",
                icon: "/firebase.png",
                level: "Intermediate"
            },
            {
                name: "GraphQL",
                icon: "/graphql.png",
                level: "Beginner"
            }
        ]
    },
    {
        section: "Databases",
        icon: "/database.png",
        skills: [
            {
                name: "MongoDB",
                icon: "/mongodb.png",
                level: "Advanced"
            },
            {
                name: "Firebase",
                icon: "/firebase.png",
                level: "Intermediate"
            },
            {
                name: "PostgreSQL",
                icon: "/postgresql.png",
                level: "Advanced"
            },
            {
                name: "MySQL",
                icon: "/mysql.png",
                level: "Advanced"
            },
            {
                name: "SQLite",
                icon: "/sqlite.svg",
                level: "Intermediate"
            },
            {
                name: "Redis",
                icon: "/redis.svg",
                level: "Intermediate"
            }
        ]
    },
    {
        section: "Mobile",
        icon: "/smartphone.png",
        skills: [
            {
                name: "React Native",
                icon: "/react.png",
                level: "Beginner"
            },
            {
                name: "Expo",
                icon: "/expo.png",
                level: "Beginner"
            },
            {
                name: "Swift",
                icon: "/swift.png",
                level: "Beginner"
            },
            {
                name: "Kotlin",
                icon: "/kotlin.svg",
                level: "Beginner"
            },
            {
                name: "Flutter",
                icon: "/flutter.svg",
                level: "Beginner"
            }
        ]
    },
    {
        section: "DevOps",
        icon: "/devops.svg",
        skills: [
            {
                name: "Docker",
                icon: "/docker.svg",
                level: "Intermediate"
            },
            {
                name: "Kubernetes",
                icon: "/kubernetes.svg",
                level: "Beginner"
            },
            {
                name: "Jenkins",
                icon: "/jenkins.svg",
                level: "Beginner"
            },
            {
                name: "AWS",
                icon: "/aws.svg",
                level: "Beginner"
            }
        ]
    },
    {
        section: "Architecture",
        icon: "/architecture.png",
        skills: [
            {
                name: "Microservices",
                icon: "/microservices.png",
                level: "Advanced"
            },
            {
                name: "REST",
                icon: "/rest.png",
                level: "Advanced"
            },
            {
                name: "GraphQL",
                icon: "/graphql.png",
                level: "Beginner"
            },
            {
                name: "Serverless",
                icon: "/serverless.png",
                level: "Beginner"
            },
            {
                name: "Progressive Web Apps",
                icon: "/pwa.png",
                level: "Intermediate"
            },
            {
                name: "Single Page Applications",
                icon: "/spa.png",
                level: "Intermediate"
            },
            {
                name: "Websockets",
                icon: "/websockets.png",
                level: "Intermediate"
            },
            {
                name: "WebRTC",
                icon: "/webrtc.png",
                level: "Beginner"
            },
            {
                name: "Webhooks",
                icon: "/webhooks.png",
                level: "Advanced"
            },
            {
                name: "WebAssembly",
                icon: "/webassembly.png",
                level: "Beginner"
            },
            {
                name: "Authentication and Authorization",
                icon: "/auth.png",
                level: "Advanced"
            },
            {
                name: "Caching",
                icon: "/caching.png",
                level: "Intermediate"
            },
            {
                name: "Internationalization",
                icon: "/i18n.png",
                level: "Intermediate"
            },
            {
                name: "Localization",
                icon: "/l10n.png",
                level: "Intermediate"
            },
            {
                name: "Web Security",
                icon: "/security.png",
                level: "Intermediate"
            },
            {
                name: "Data Structures and Algorithms",
                icon: "/dsa.png",
                level: "Advanced"
            },
            {
                name: "Design Patterns",
                icon: "/designpatterns.png",
                level: "Advanced"
            },
            {
                name: "HLD and LLD",
                icon: "/hldlld.png",
                level: "Advanced",
            },
            {
                name: "ER Diagrams",
                icon: "/erdiagrams.png",
                level: "Intermediate"
            },
        ]
    },
    {
        section: "Tools",
        icon: "/tools.png",
        skills: [
            {
                name: "Adobe Photoshop",
                icon: "/photoshop.png",
                level: "Intermediate"
            },
            {
                name: "Talend ETL",
                icon: "/talend.png",
                level: "Intermediate"
            },
            {
                name: "Kibana",
                icon: "/kibana.png",
                level: "Beginner"
            },
            {
                name: "IntelliJ IDEA",
                icon: "/intellij.svg",
                level: "Advanced"
            },
            {
                name: "Visual Studio Code",
                icon: "/vscode.svg",
                level: "Advanced"
            },
            {
                name: "Postman",
                icon: "/postman.svg",
                level: "Advanced"
            },
            {
                name: "Insomnia",
                icon: "/insomnia.svg",
                level: "Advanced"
            },
            {
                name: "Git",
                icon: "/github.png",
                level: "Advanced"
            },
            {
                name: "Eclipse",
                icon: "/eclipse.svg",
                level: "Advanced"
            },
            {
                name: "XCode",
                icon: "/xcode.png",
                level: "Intermediate"
            },
            {
                name: "Android Studio",
                icon: "/androidstudio.svg",
                level: "Intermediate"
            },
        ]
    },
    {
        section: "Languages",
        icon: "/languages.png",
        skills: [
            {
                name: "Tamil",
                icon: "/tamil.jpg",
                level: "Native"
            },
            {
                name: "English",
                icon: "/english.png",
                level: "Fluent"
            }
        ]
    }
]

const SkillsPage = () => {
    return (
        <div>
            <div className="p-5">
                <h1 className="text-4xl font-bold text-center text-orange-500 mb-5">Skills</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skills.map((skill, index) =>
                            <div key={index} className="bg-opacity-30 bg-white p-5 shadow-lg rounded-lg">
                        <div className="flex flex-row justify-center">
                            <Image height={48} width={48} src={skill.icon} alt={skill.section}/>
                        </div>
                        <h2 className="text-2xl font-bold text-center text-gray-800">{skill.section}</h2>
                        <div className="grid grid-cols-1 gap-2 text-gray-800 mt-5">
                            <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {skill.skills.map((skill, index) =>
                                    <div key={index} className="flex flex-col bg-green-50 p-2 border-2 border-gray-200 shadow-lg rounded-xl gap-2 justify-center items-center text-center">
                                        <Image height={48} width={48} src={skill.icon} alt={skill.name}/>
                                        <span className="block">{skill.name}</span>
                                        <span className="text-xs font-semibold text-gray-500">{skill.level}</span>
                                    </div>)}
                            </div>
                        </div>
                        </div>
                        )}
                    </div>
                        </div>
                        </div>
                        );
                    };

export default SkillsPage;
