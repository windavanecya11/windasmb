import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between border-b border-zinc-200 bg-white/80 px-4 py-4 backdrop-blur-md md:px-8 lg:px-12">
            {/* Left - Name */}
            <div className="flex items-center">
                <Link href="/" className="text-lg font-bold text-zinc-900 transition-colors hover:text-primary">
                    Winda Vanecya Sembiring
                </Link>
            </div>

            {/* Middle - Menu */}
            <div className="hidden items-center gap-8 md:flex">
                <Link href="/" className="text-sm font-medium text-zinc-600 transition-colors hover:text-primary">
                    Home
                </Link>
                <Link href="#about" className="text-sm font-medium text-zinc-600 transition-colors hover:text-primary">
                    About
                </Link>
                <Link href="#experience" className="text-sm font-medium text-zinc-600 transition-colors hover:text-primary">
                    Experience
                </Link>
                <Link href="#projects" className="text-sm font-medium text-zinc-600 transition-colors hover:text-primary">
                    Projects
                </Link>
                <Link href="#contact" className="text-sm font-medium text-zinc-600 transition-colors hover:text-primary">
                    Contact
                </Link>
            </div>

            {/* Right - Socials */}
           <div className="flex items-center gap-4">
  <Link
    href="https://github.com/windavanecya11"
    target="_blank"
    className="text-zinc-500 transition-colors hover:text-black"
  >
    <Github className="h-5 w-5" />
  </Link>
  <Link
    href="https://www.linkedin.com/in/winda-sembiring/"
    target="_blank"
    className="text-zinc-500 transition-colors hover:text-[#0077b5]"
  >
    <Linkedin className="h-5 w-5" />
  </Link>
  <Link
    href="mailto:windavanecya@gmail.com"
    className="text-zinc-500 transition-colors hover:text-rose-500"
  >
    <Mail className="h-5 w-5" />
  </Link>
</div>

        </nav>
    );
}
