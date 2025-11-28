import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Skills() {
    const skills = [
        { name: "MySQL", icon: "/skills/mysql.svg" },
       { name: "Cypress", icon: "/skills/cypress.svg" },
{ name: "Appium", icon: "/apium.png" },
{ name: "Locust", icon: "/skills/locust.png" },
        { name: "HTML", icon: "/skills/html.svg" },
        { name: "JavaScript", icon: "/skills/javascript.svg" },
        { name: "Laravel", icon: "/skills/laravel.svg" },
        { name: "Python", icon: "/skills/python.svg" },
        { name: "Flutter", icon: "/skills/flutter.svg" },
        { name: "React JS", icon: "/skills/react.svg" },
        { name: "Git", icon: "/skills/git.svg" },
        { name: "Java", icon: "/skills/java.svg" },
        { name: "Node JS", icon: "/skills/nodejs.svg" },
        { name: "Raspberry PI", icon: "/skills/raspberrypi.svg" },
    ];

    return (
        <section id="skills" className="w-full py-24">
            <div className="mx-auto max-w-6xl px-4 text-center">
                <FadeIn direction="up">
                    <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
                        Skills & Technologies
                    </h2>
                </FadeIn>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {skills.map((skill, index) => (
                        <FadeIn key={skill.name} delay={index * 0.05} direction="up">
                            <div
                                className="group flex flex-col items-center gap-4 rounded-2xl border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:bg-white hover:shadow-md"
                            >
                                <div className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-110">
                                    <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-sm font-medium text-zinc-700 group-hover:text-primary">{skill.name}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
