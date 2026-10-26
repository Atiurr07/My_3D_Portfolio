import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowUpRight,
    BrainCircuit,
    CloudSun,
    Compass,
    Database,
    Layers3,
    ShoppingBag,
    Truck,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const artwork = {
    campus: {
        Icon: BrainCircuit,
        label: "INTELLIGENT CAMPUS",
        accent: "text-cyan-300",
        glow: "bg-cyan-400/20",
        shape: "border-cyan-300/30",
        symbols: ["AI", "360°", "CAMPUS"],
    },
    fleet: {
        Icon: Truck,
        label: "FLEET OPERATIONS",
        accent: "text-emerald-300",
        glow: "bg-emerald-400/20",
        shape: "border-emerald-300/30",
        symbols: ["VEHICLES", "TRACKING", "CONTROL"],
    },
    ecommerce: {
        Icon: ShoppingBag,
        label: "DIGITAL COMMERCE",
        accent: "text-violet-300",
        glow: "bg-violet-400/20",
        shape: "border-violet-300/30",
        symbols: ["PRODUCTS", "SHOP", "EXPERIENCE"],
    },
    django: {
        Icon: Database,
        label: "BACKEND SYSTEM",
        accent: "text-green-300",
        glow: "bg-green-400/20",
        shape: "border-green-300/30",
        symbols: ["PYTHON", "DJANGO", "API"],
    },
    weather: {
        Icon: CloudSun,
        label: "WEATHER INSIGHTS",
        accent: "text-sky-300",
        glow: "bg-sky-400/20",
        shape: "border-sky-300/30",
        symbols: ["FORECAST", "CLIMATE", "LIVE DATA"],
    },
};

const fallbackArtwork = {
    Icon: Layers3,
    label: "PROJECT OVERVIEW",
    accent: "text-cyan-300",
    glow: "bg-cyan-400/20",
    shape: "border-cyan-300/30",
    symbols: ["BUILD", "CREATE", "EXPLORE"],
};

const ProjectCard = ({ project, index = 0 }) => {
    const reduceMotion = useReducedMotion();

    const visual = artwork[project.preview] || fallbackArtwork;
    const Icon = visual.Icon;
    const destination = project.liveUrl || project.repository;

    return (
        <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
                duration: reduceMotion ? 0 : 0.45,
                delay: reduceMotion ? 0 : (index % 3) * 0.06,
            }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className="group flex min-w-0 flex-col"
        >
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.09] bg-[#080d20]/90 shadow-[0_18px_70px_rgba(0,0,0,0.2)] transition-colors duration-300 group-hover:border-cyan-300/30">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent"
                />

                {/* Decorative project artwork */}
                <div
                    aria-hidden="true"
                    className="relative flex aspect-[16/10] shrink-0 items-center justify-center overflow-hidden border-b border-white/[0.07] bg-[#080d20]"
                >
                    <div
                        className={`absolute inset-0 ${visual.glow} opacity-40 blur-3xl`}
                    />

                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.1),#080d20_78%)]" />

                    <div
                        className={`absolute h-48 w-48 rounded-full border ${visual.shape} opacity-40 [transform:rotateX(65deg)]`}
                    />

                    <div
                        className={`absolute h-36 w-36 rounded-full border ${visual.shape} opacity-60 [transform:rotateY(65deg)]`}
                    />

                    <div className="absolute inset-5 rounded-2xl border border-white/[0.06] [transform:perspective(700px)_rotateX(5deg)_rotateY(-6deg)]" />

                    <motion.div
                        animate={
                            reduceMotion
                                ? undefined
                                : { y: [0, -5, 0], rotateY: [0, 7, 0] }
                        }
                        transition={{
                            duration: 5,
                            repeat: reduceMotion ? 0 : Infinity,
                            ease: "easeInOut",
                        }}
                        className={`relative flex h-20 w-20 items-center justify-center rounded-2xl border ${visual.shape} bg-slate-950/80 ${visual.accent} shadow-[0_0_40px_rgba(34,211,238,0.08)] [transform-style:preserve-3d]`}
                    >
                        <Icon size={37} strokeWidth={1.4} />
                    </motion.div>

                    <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                        {visual.symbols.map((symbol) => (
                            <span
                                key={symbol}
                                className="rounded-md border border-white/10 bg-slate-950/70 px-2 py-1 text-[8px] font-semibold tracking-[0.15em] text-slate-300 backdrop-blur"
                            >
                                {symbol}
                            </span>
                        ))}
                    </div>

                    <span className="absolute right-4 top-4 max-w-[70%] truncate rounded-full border border-white/10 bg-slate-950/75 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-slate-300 backdrop-blur">
                        {project.category}
                    </span>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="min-w-0 break-words text-lg font-bold leading-snug text-white sm:text-xl">
                            {project.title}
                        </h3>

                        <ArrowUpRight
                            size={19}
                            aria-hidden="true"
                            className="mt-1 shrink-0 text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                        />
                    </div>

                    <p className="mt-3 flex-1 break-words text-sm leading-7 text-slate-400">
                        {project.description}
                    </p>

                    {Array.isArray(project.technologies) &&
                        project.technologies.length > 0 && (
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-lg border border-white/[0.07] bg-white/[0.035] px-2.5 py-1.5 text-[10px] font-medium text-slate-300"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        )}

                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
                        <span className="inline-flex min-w-0 items-center gap-2 text-xs font-semibold text-cyan-300">
                            {project.liveUrl ? (
                                <Compass
                                    size={15}
                                    aria-hidden="true"
                                    className="shrink-0"
                                />
                            ) : (
                                <FaGithub
                                    size={15}
                                    aria-hidden="true"
                                    className="shrink-0"
                                />
                            )}

                            <span>
                                {project.liveUrl
                                    ? "View Live Project"
                                    : "View Repository"}
                            </span>
                        </span>

                        {destination ? (
                            <a
                                href={destination}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${project.title} ${
                                    project.liveUrl
                                        ? "live website"
                                        : "GitHub repository"
                                } in a new tab`}
                                className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-[10px] font-semibold text-slate-500 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                            >
                                OPEN
                                <ArrowUpRight
                                    size={12}
                                    aria-hidden="true"
                                />
                            </a>
                        ) : (
                            <span className="text-[10px] text-slate-600">
                                COMING SOON
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default ProjectCard;

