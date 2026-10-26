import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { navigationLinks } from "../../constants/navigation";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
                fixed
                top-0
                left-0
                right-0
                z-50
                transition-all
                duration-300
                ${
                    scrolled
                        ? "bg-[#050816]/80 backdrop-blur-2xl border-b border-white/10 shadow-lg"
                        : "bg-transparent"
                }
            `}
        >
            <nav
                className="
                    mx-auto
                    flex
                    h-20
                    max-w-[1400px]
                    items-center
                    justify-between
                    px-6
                    sm:px-8
                    lg:px-12
                "
            >
                {/* Logo */}

                <a
                    href="#home"
                    className="
                        text-3xl
                        font-black
                        tracking-widest
                        bg-gradient-to-r
                        from-cyan-400
                        via-blue-500
                        to-violet-500
                        bg-clip-text
                        text-transparent
                    "
                >
                    AETHER
                </a>

                {/* Desktop Menu */}

                <ul
                    className="
                        hidden
                        lg:flex
                        items-center
                        gap-10
                    "
                >
                    {navigationLinks.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.href}
                                className="
                                    relative
                                    text-slate-300
                                    font-medium
                                    transition-all
                                    duration-300
                                    hover:text-cyan-400
                                    after:absolute
                                    after:left-0
                                    after:-bottom-1
                                    after:h-[2px]
                                    after:w-0
                                    after:bg-cyan-400
                                    after:transition-all
                                    after:duration-300
                                    hover:after:w-full
                                "
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hire Me */}

                <a
                    href="#contact"
                    className="
                        hidden
                        lg:inline-flex
                        items-center
                        justify-center
                        rounded-xl
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-600
                        px-6
                        py-3
                        text-white
                        font-semibold
                        shadow-[0_10px_30px_rgba(34,211,238,0.35)]
                        transition-all
                        duration-300
                        hover:scale-105
                    "
                >
                    Hire Me
                </a>

                {/* Mobile Menu Button */}

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="
                        lg:hidden
                        text-white
                        p-2
                    "
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}

            <div
                className={`
                    lg:hidden
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                        menuOpen
                            ? "max-h-[500px] border-t border-white/10"
                            : "max-h-0"
                    }
                    bg-[#050816]/95
                    backdrop-blur-2xl
                `}
            >
                <ul
                    className="
                        flex
                        flex-col
                        gap-6
                        px-6
                        py-6
                    "
                >
                    {navigationLinks.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="
                                    block
                                    text-lg
                                    text-slate-300
                                    transition-colors
                                    duration-300
                                    hover:text-cyan-400
                                "
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}

                    <a
                        href="/#contact"
                        onClick={() => setMenuOpen(false)}
                        className="
                            mt-2
                            rounded-xl
                            bg-gradient-to-r
                            from-cyan-500
                            to-blue-600
                            py-3
                            text-center
                            font-semibold
                            text-white
                        "
                    >
                        Hire Me
                    </a>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;