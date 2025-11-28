"use client";
import React from "react";
import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import ProfileCard from "@/components/ProfileCard";

import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import FadeIn from "@/components/FadeIn";
import Skills from "@/components/Skills";
import LiquidEther from "@/components/LiquidEther";

// ======================================
// ANIMATED HERO TEXT
// ======================================
const words = ["Quality Assurance", "Front End Developer"];

function HeroText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-primary font-semibold transition-all duration-500">
      {words[index]}
    </span>
  );
}

// ======================================
// PROJECTS DATA
// ======================================

const projects = [
  {
    title: "GKPI Sidikalang City Church – Website Design & Development",
    image: "/Sitoluama.png",
    description:
      "A Laravel-based church website that streamlines administration and provides secure access to worship schedules, bulletins, galleries, financial info, and staff management.",
    technologies: ["Laravel", "PHP", "JavaScript", "HTML", "CSS"],
    githubLink:
      "https://github.com/windavanecya11/GKPI-Sidikalang-City-Church-Website-Design-and-Development",
  },
  {
    title:
      "Schedule and Task Management Application – SMA Negeri 1 Girsang Sipangan Bolon",
    image: "/sahulos.png",
    description:
      "A web-based platform that helps teachers and students manage school schedules and assignments more efficiently.",
    technologies: ["React", "JavaScript", "Flutter", "SQLite", "Dart"],
    githubLink:
      "https://github.com/windavanecya11/Proyek-Akhir-2-Web-Schedule-and-Task-Management-SMA-Negeri-1-Girsang-Sipangan-Bolon-",
  },
  {
    title: "Smart Parking IoT Application",
    image: "/IoT.png",
    description:
      "An IoT-based smart parking system built with Python, Laravel, and MySQL to help users identify available parking spots in real time.",
    technologies: ["Python", "Laravel 11", "MySQL", "Bootstrap"],
    githubLink:
      "https://github.com/windavanecya11/Smart-Parking-IOT-Aplications",
  },
  {
    title: "GEMASTIK – SayLocal",
    image: "/gemastik.png",
    description:
      "A digital platform created for GEMASTIK that empowers local products with marketplace features and interactive learning tools.",
    technologies: ["React", "TypeScript", "JavaScript", "Tailwind"],
    figma: "https://www.figma.com",
    liveLink:
      "https://drive.google.com/file/d/1my3PDW4LRs-CYXW_qlt7DkipufI30-Wz/view?usp=sharing",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-10 w-full max-w-full">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Featured Projects
      </h2>

      {/* RESPONSIVE GRID: HP=1 | Tablet=2 | Laptop=4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#ffffff0d] border border-white/10 rounded-xl p-4 shadow-lg backdrop-blur-md
                       hover:scale-[1.02] transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />

            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

            <p className="text-sm text-gray-300 mb-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies?.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 px-2 py-1 rounded-md text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="text-sm text-blue-300 underline"
                >
                  GitHub →
                </a>
              )}

              {project.figma && (
                <a
                  href={project.figma}
                  target="_blank"
                  className="text-sm text-pink-300 underline"
                >
                  Figma →
                </a>
              )}

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="text-sm text-green-300 underline"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ======================================
// HOME PAGE
// ======================================
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden">

      {/* Background Effect */}
      <div className="fixed inset-0 -z-50 h-full w-full">
        <LiquidEther
          colors={["#3b82f6", "#8b5cf6", "#ec4899"]}
          mouseForce={20}
          cursorSize={100}
        />
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 pt-20 text-center md:flex-row md:justify-between md:px-12 md:text-left lg:px-24">
        <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">

          <div className="flex max-w-2xl flex-col items-center md:items-start animate-in fade-in slide-in-from-bottom-4 duration-1000">

            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Winda Vanecya Sembiring
              </span>
            </h1>

            {/* ANIMATED TEXT HERE */}
            <p className="mb-8 text-lg text-zinc-600 sm:text-xl">
              I am a <HeroText />
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/Resume.pdf"
                className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
                target="_blank"
              >
                Download CV
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="mt-8 md:mt-0 animate-in fade-in zoom-in duration-1000 delay-300">
            <ProfileCard
              name="Winda Vanecya"
              title="Quality Assurance"
              handle="windasmb_"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/wins.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
            />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <AboutMe />
      <Experience />

      {/* PROJECTS SECTION */}
      <section id="projects" className="w-full max-w-6xl px-4 py-24">
        <FadeIn direction="up">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:border-primary/50 hover:shadow-md">

                {/* IMAGE */}
                <div className="aspect-video w-full overflow-hidden bg-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-zinc-900">{project.title}</h3>
                  <p className="mb-4 text-sm text-zinc-600">{project.description}</p>

                  {/* TECHNOLOGIES */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies?.map((tech, i) => (
                      <span key={i} className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="flex items-center gap-4">
                    {project.liveLink && (
                      <Link href={project.liveLink} target="_blank" className="flex items-center gap-2 text-xs font-medium text-primary hover:underline">
                        Live Demo <ExternalLink className="h-3 w-3" />
                      </Link>
                    )}
                    {project.figma && (
                      <Link href={project.figma} target="_blank" className="flex items-center gap-2 text-xs font-medium text-pink-600 hover:underline">
                        Figma <ExternalLink className="h-3 w-3" />
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link href={project.githubLink} target="_blank" className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-black">
                        Source Code <Github className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Skills />

      {/* CONTACT */}
      <section id="contact" className="w-full max-w-4xl px-4 py-24 text-center">
        <FadeIn direction="up">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Let's Work Together</h2>

         <p className="mb-8 text-lg text-zinc-600">
  I’m open to collaborations, freelance projects, and new opportunities—especially in Quality Assurance and Front-End Development. 
  If you’re looking for someone detail-oriented, reliable, and passionate about building user-centered digital experiences, 
  I’d be happy to work with you.
</p>

          <div className="flex justify-center gap-6">
            <Link href="mailto:hello@example.com" className="group rounded-full bg-zinc-100 p-4 transition-colors hover:bg-primary hover:text-white">
              <Mail className="h-6 w-6" />
            </Link>
            <Link href="https://github.com" className="group rounded-full bg-zinc-100 p-4 transition-colors hover:bg-primary hover:text-white">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com" className="group rounded-full bg-zinc-100 p-4 transition-colors hover:bg-primary hover:text-white">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
