import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-zinc-200 bg-white pt-16 pb-8">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid gap-12 md:grid-cols-4">
                    
                    {/* Profile Section */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="mb-4 text-xl font-bold text-zinc-900">
                            Winda Vanecya Sembiring
                        </h3>
                        <p className="mb-6 max-w-sm text-zinc-600 text-justify">
    IT student specializing in Software Quality Assurance with experience in front-end development, 
    focused on creating reliable and user-centered technology.
</p>


                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <Link
                                href="https://github.com/windavanecya11"
                                target="_blank"
                                className="rounded-full bg-zinc-100 p-2 text-zinc-600 transition-colors hover:bg-primary hover:text-white"
                            >
                                <Github className="h-5 w-5" />
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/winda-sembiring/"
                                target="_blank"
                                className="rounded-full bg-zinc-100 p-2 text-zinc-600 transition-colors hover:bg-primary hover:text-white"
                            >
                                <Linkedin className="h-5 w-5" />
                            </Link>

                            <Link
                                href="https://wa.me/6281930278699"
                                target="_blank"
                                className="rounded-full bg-zinc-100 p-2 text-zinc-600 transition-colors hover:bg-primary hover:text-white"
                            >
                                <Phone className="h-5 w-5" />
                            </Link>

                            <Link
                                href="mailto:windavanecya@gmail.com"
                                className="rounded-full bg-zinc-100 p-2 text-zinc-600 transition-colors hover:bg-primary hover:text-white"
                            >
                                <Mail className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-zinc-900">Navigation</h4>
                        <ul className="space-y-2 text-sm text-zinc-600">
                            <li><Link href="/" className="hover:text-primary">Home</Link></li>
                            <li><Link href="#about" className="hover:text-primary">About</Link></li>
                            <li><Link href="#experience" className="hover:text-primary">Experience</Link></li>
                            <li><Link href="#projects" className="hover:text-primary">Projects</Link></li>
                            <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-4 font-semibold text-zinc-900">Contact</h4>
                        <ul className="space-y-2 text-sm text-zinc-600">
                            <li>Medan, Indonesia</li>
                            <li>hello@winda.dev</li>
                            <li>+62 812 3456 7890</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-16 border-t border-zinc-100 pt-8 text-center text-sm text-zinc-500">
                    <p>&copy; {new Date().getFullYear()} Winda Vanecya Sembiring. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
