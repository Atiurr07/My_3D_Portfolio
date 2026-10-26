import { ArrowUp, Heart } from "lucide-react";
import { FaGithub, FaLinkedin} from "react-icons/fa";

const footerLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
                ? "auto"
                : "smooth",
        });
    };

    return (
        <footer
            id="footer"
            className="relative overflow-hidden border-t border-white/[0.08] bg-[#040612] text-white"
        >
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
            />

            <div className="mx-auto w-full max-w-[1450px] px-5 pb-7 pt-12 sm:px-8 sm:pt-14 lg:px-12 xl:px-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
                    {/* Branding */}
                    <div className="max-w-md">
                        <a
                            href="/#home"
                            className="inline-flex items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                            aria-label="Go to portfolio homepage"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] text-sm font-black text-cyan-300">
                                AR
                            </span>

                            <span className="text-lg font-bold tracking-tight">
                                Atiurr<span className="text-cyan-300">.</span>
                            </span>
                        </a>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                            Building thoughtful digital experiences
                            through software development, AI, and
                            continuous learning.
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                            <a
                                href="https://github.com/Atiurr07"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profile"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-cyan-300/30 hover:text-cyan-300"
                            >
                                <FaGithub size={18} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/atiurr-rahman07/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn profile"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-cyan-300/30 hover:text-cyan-300"
                            >
                                <FaLinkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:justify-self-end">
                        <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-300">
                            Explore
                        </h3>

                        <nav
                            aria-label="Footer navigation"
                            className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3"
                        >
                            {footerLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="w-fit text-sm text-slate-400 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="my-8 h-px bg-white/[0.07] sm:my-10" />

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-6 text-slate-500">
                        © {currentYear} Atiurr Rahman. All rights reserved.
                    </p>

                    <p className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                        Designed and built with
                        <Heart
                            size={13}
                            className="fill-cyan-300/70 text-cyan-300"
                        />
                        using React
                    </p>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan-300/30 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                        Back to top
                        <ArrowUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
