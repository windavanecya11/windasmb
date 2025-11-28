import { Briefcase, Calendar, Shield, Globe, Terminal, Award, Users, LayoutTemplate, Code } from "lucide-react";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Experience() {
    const experiences = [
        {
            company: "Digital Talent Scholarship",
            role: "Cybersecurity Digital Talent Scholarship",
            period: "Aug 2025 - Sep 2025",
            description: "Completed intensive cybersecurity training under the Digital Talent Scholarship program by Kominfo. Gained hands-on experience in threat analysis, vulnerability assessment, and fundamental security practices. Demonstrated practical skills through project-based learning and received official certification from the program.",
            icon: <Image src="/digitalent.jpeg" alt="Digital Talent Scholarship" fill className="object-cover" />,
        },
        {
            company: "Postman",
            role: "Postman API Fundamentals Student Expert",
            period: "Aug 2025 - Sep 2025",
            description: "Proficient in REST API testing: creating GET/POST/PUT/DELETE requests, handling headers, authentication, and interpreting JSON responses. Skilled in API automation & testing workflow using Postman — including environment setup, collections, and test scripting for reliable API validation. Capable of using Postman within CI/CD or automation pipelines, ensuring APIs remain stable and function correctly across development cycles.",
            icon: <Image src="/postman.jpeg" alt="Postman API Fundamentals Student Expert" fill className="object-cover" />,
        },
        {
            company: "Google",
            role: "Google IT Automation with Python",
            period: "Aug 2025 - Sep 2025",
            description: "Gained hands-on experience in Python programming focused on automating IT tasks and workflows. Developed skills in Git, GitHub, troubleshooting, debugging, and applying automation at scale using configuration management and cloud tools. Prepared for advanced IT roles such as IT Support Specialist or Junior Systems Administrator through practical assessments and projects.",
            icon: <Image src="/google.png" alt="Google IT Automation with Python" fill className="object-cover" />,
        },
        {
            company: "SunberCode",
            role: "Quality Assurance (QA)",
            period: "Feb 2025 - March 2025",
            description: "Comprehensive understanding of QA processes, including SDLC & STLC, test scenarios and cases, bug lifecycle, and testing principles. Proficient in manual and automation testing, covering API testing, web automation using Cypress, mobile automation with Appium, and test management tools. Experienced in performance testing using JMeter, along with version control (Git & GitHub), project management frameworks (Scrum), and QA best practices for real-world projects.",
            icon: <Image src="/sanbercode.jpeg" alt="Quality Assurance (QA)" fill className="object-cover" />,
        },
        {
            company: "Institute Technology Del",
            role: "Committee Staff, BBC 2025",
            period: "Nov 2025 - Nov 2025",
            description: "Served as Committee Staff at BBC 2025, a hybrid international conference on “Bioinformatics for Biodiversity Sovereignty and Biotechnological Innovation”, contributing to the successful execution of the event. Coordinated event logistics, supported communication between speakers and organizing teams, and managed documentation and attendance for both on-site and online sessions. Strengthened teamwork, organization, and problem-solving skills in a fast-paced academic event.",
            icon: <Image src="/del.jpeg" alt="Institute Technology Del" fill className="object-cover" />,
        },
        {
            company: "IDG Commitee Program IT Del",
            role: "Member of Visualization Division",
            period: "Aug 2024 - Sep 2024",
            description: "Created and managed visual content for events, including promotional materials, backdrops, and presentation slides. Collaborated with other divisions to ensure cohesive visual branding and enhance audience engagement. Developed skills in graphic design, event branding, teamwork, and time management.",
            icon: <Image src="/del.jpeg" alt="IDG Commitee Program IT Del" fill className="object-cover" />,
        },
        {
            company: "Del Software Development IT Del",
            role: "Member of Web Developer",
            period: "Jan 2024 - Current",
            description: "Developed and maintained web applications for UMKM projects. Collaborated on team projects, enhancing communication and problem-solving skills. Facilitated hands-on workshops on Arduino and IoT for practical learning.",
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
                                className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? "md:flex-row-reverse" : ""} group is-active`}
                            >
                                {/* Icon */}
                                <div className="absolute left-0 h-10 w-10 shrink-0 rounded-full border border-zinc-200 bg-white p-2 shadow-sm md:order-1 md:left-1/2 md:-translate-x-1/2 md:translate-y-0">
                                    <Briefcase className="h-full w-full text-primary" />
                                </div>

                                {/* Content Card */}
                                <div className="ml-16 w-full rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md md:ml-0 md:w-[calc(50%-2.5rem)]">
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
                                    <p className="text-sm text-zinc-600 leading-relaxed">
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
