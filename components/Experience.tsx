import { Briefcase, Calendar } from "lucide-react";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Experience() {
    const experiences = [
        {
            company: "Digital Talent Scholarship",
            role: "Cybersecurity Digital Talent Scholarship",
            period: "Aug 2025 - Sep 2025",
            description:
                "Completed intensive cybersecurity training under the Digital Talent Scholarship program by Kominfo. Gained hands-on experience in threat analysis, vulnerability assessment, and fundamental security practices. Demonstrated practical skills through project-based learning and received official certification from the program.",
            icon: <Image src="/digitalent.jpeg" alt="Digital Talent Scholarship" fill className="object-cover" />,
        },
        {
            company: "Postman",
            role: "Postman API Fundamentals Student Expert",
            period: "Aug 2025 - Sep 2025",
            description:
                "Proficient in REST API testing: creating GET/POST/PUT/DELETE requests, handling headers, authentication, and interpreting JSON responses. Skilled in API automation and testing workflow using Postman — including environment setup, collections, and test scripting for reliable API validation.",
            icon: <Image src="/postman.jpeg" alt="Postman API Fundamentals Student Expert" fill className="object-cover" />,
        },
        {
            company: "Google",
            role: "Google IT Automation with Python",
            period: "Aug 2025 - Sep 2025",
            description:
                "Gained hands-on experience in Python programming focused on automating IT tasks and workflows. Developed skills in Git, GitHub, troubleshooting, debugging, and applying automation at scale using configuration management and cloud tools.",
            icon: <Image src="/google.png" alt="Google IT Automation with Python" fill className="object-cover" />,
        },
        {
            company: "SanberCode",
            role: "Quality Assurance (QA)",
            period: "Feb 2025 - March 2025",
            description:
                "Comprehensive understanding of QA processes, including SDLC and STLC, test scenarios and cases, bug lifecycle, and testing principles. Experienced in manual and automation testing using Cypress, Selenium, Appium, Robot Framework, Katalon, JMeter, and Postman. Conducted performance testing and created structured QA documentation.",
            icon: <Image src="/sanbercode.jpeg" alt="Quality Assurance (QA)" fill className="object-cover" />,
        },
        {
            company: "Institute Technology Del",
            role: "Committee Staff, BBC 2025",
            period: "Nov 2025 - Nov 2025",
            description:
                "Served as Committee Staff at BBC 2025, an international conference on Bioinformatics and Biodiversity. Coordinated logistics, speaker communication, documentation, and session management across hybrid formats, strengthening teamwork and problem-solving skills.",
            icon: <Image src="/del.jpeg" alt="Institute Technology Del" fill className="object-cover" />,
        },
        {
            company: "IDG Committee Program IT Del",
            role: "Member of Visualization Division",
            period: "Aug 2024 - Sep 2024",
            description:
                "Created and managed visual content for campus events, including promotional materials, backdrops, and presentation designs. Collaborated with divisions to maintain cohesive visual branding and improve audience engagement.",
            icon: <Image src="/del.jpeg" alt="IDG Committee Program IT Del" fill className="object-cover" />,
        },
        {
            company: "Del Software Development IT Del",
            role: "Member of Web Developer",
            period: "Jan 2024 - Current",
            description:
                "Contributed to the development and maintenance of web applications for UMKM clients. Collaborated in designing features, improving system stability, assisting with deployment, and conducting quality checks to ensure smooth and reliable performance.",
            icon: <Image src="/delsoftware.jpeg" alt="Del Software Development" fill className="object-cover" />,
        },
    ];

    return (
        <section id="experience" className="w-full py-24">
            <div className="mx-auto max-w-4xl px-4">
                <FadeIn direction="up">
                    <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
                        Organization & Work Experience
                    </h2>
                </FadeIn>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-zinc-500 before:to-transparent md:before:mx-auto md:before:translate-x-0">
                    {experiences.map((exp, index) => (
                        <FadeIn key={index} delay={index * 0.1} direction={index % 2 === 0 ? "right" : "left"}>
                            <div
                                className={`relative flex items-center justify-between md:justify-normal ${
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                } group is-active`}
                            >
                                {/* Icon */}
                                <div className="absolute left-0 h-10 w-10 shrink-0 rounded-full border border-zinc-200 bg-white p-2 shadow-sm md:order-1 md:left-1/2 md:-translate-x-1/2">
                                    <Briefcase className="h-full w-full text-primary" />
                                </div>

                                {/* Content Card */}
                                <div className="ml-16 w-full rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md md:ml-0 md:w-[calc(50%-2.5rem)] text-left">
                                    <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                        <div className="flex items-center gap-3">
                                            <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-zinc-50">
                                                {exp.icon}
                                            </div>
                                            <h3 className="font-bold text-zinc-900">{exp.company}</h3>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs font-medium text-zinc-500">
                                            <Calendar className="h-3 w-3" />
                                            {exp.period}
                                        </div>
                                    </div>
                                    <h4 className="mb-2 text-sm font-semibold text-primary">{exp.role}</h4>

                                    {/* DESCRIPTION JUSTIFY DI SINI */}
                                    <p className="text-sm text-zinc-600 leading-relaxed text-justify">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
