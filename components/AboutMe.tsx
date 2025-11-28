import { Globe, ShieldCheck, Workflow, ClipboardCheck, Smartphone, Database } from "lucide-react";
import FadeIn from "./FadeIn";

export default function AboutMe() {
    return (
        <section id="about" className="w-full py-24">
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex flex-col gap-16 md:flex-row md:items-center">
                    {/* Left Column - Text */}
                    <div className="flex-1 space-y-8">
                        <FadeIn direction="right">
                            <div>
                            
                                <h3 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                                    About Me
                                </h3>
                            </div>

                            <div className="mt-8 space-y-4 text-lg text-zinc-600 leading-relaxed">
                                <p className="text-justify">
                                    A fifth semester Information Technology student at Del Institute of Technology with a strong passion for Software Quality Assurance. My main career focus is on ensuring software quality through manual testing, automation, and systematic QA processes. I am adaptable, detail-oriented, and eager to learn, supported by hands on experience from academic projects and organizational activities that strengthened my problem-solving, teamwork, and communication skills. In addition to QA, I also have experience in Front-End Development, enabling me to understand software behavior from both the user interface and quality perspectives. I aim to continue growing and contributing to the development of reliable, user-centered, and sustainable technology solutions.
                                </p>
                            </div>
                        </FadeIn>

                    </div>

                    {/* Right Column - Services Grid */}
                    <div className="flex-1">
                        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
                            {[
                                {
                                    icon: <ShieldCheck className="h-6 w-6 text-blue-500" />,
                                    title: "Software Testing",
                                    description: "Ensuring software quality through manual and automated testing",
                                },
                                {
                                    icon: <Workflow className="h-6 w-6 text-blue-500" />,
                                    title: "Test Automation",
                                    description: "Building stable and efficient automated tests using Cypress, Katalon, and Appium",
                                },
                                {
                                    icon: <ClipboardCheck className="h-6 w-6 text-blue-500" />,
                                    title: "QA Engineering",
                                    description: "Delivering end-to-end quality processes, from test planning to defect tracking",
                                },
                                {
                                    icon: <Globe className="h-6 w-6 text-blue-500" />,
                                    title: "Web Development",
                                    description: "Full-stack development with modern technologies",
                                },
                                {
                                    icon: <Smartphone className="h-6 w-6 text-blue-500" />,
                                    title: "UI/UX Design",
                                    description: "Creating beautiful and intuitive interfaces",
                                },
                                {
                                    icon: <Database className="h-6 w-6 text-blue-500" />,
                                    title: "Web Solutions",
                                    description: "End-to-end web application solutions",
                                },
                            ].map((service, index) => (
                                <FadeIn key={index} delay={index * 0.1} direction="left">
                                    <div
                                        className="group flex items-start gap-4"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                                            {service.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-zinc-900">{service.title}</h4>
                                            <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
