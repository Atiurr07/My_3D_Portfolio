import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowUpRight,
    BriefcaseBusiness,
    MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

import { experience } from "../../data/experience";
import ExperienceBackground from "./ExperienceBackground";

const Experience = ({ isPage = false }) => {
    const reduceMotion = useReducedMotion();

    const reveal = {
        initial: reduceMotion ? false : { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
        transition: { duration: reduceMotion ? 0 : 0.55 },
    };

    return (
        <section
            id="experience"
            aria-labelledby="experience-heading"
            className={`relative isolate overflow-hidden bg-[#050816] text-white ${
                isPage
                    ? "min-h-screen py-16 sm:py-20 lg:py-24"
                    : "py-24 sm:py-28 lg:py-32"
            }`}
        >
            <ExperienceBackground />

            <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-16">
                <motion.header
                    {...reveal}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300 sm:text-xs">
                        {isPage ? "Career & Development" : "My Journey"}
                    </span>

                    <h2
                        id="experience-heading"
                        className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        Professional{" "}
                        <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-400 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                        My journey through software development, backend
                        engineering, AI/ML exploration and technical systems.
                        Each milestone represents skills developed and
                        practical experience gained.
                    </p>
                </motion.header>

                <div className="relative mx-auto mt-16 max-w-5xl sm:mt-20">
                    {/* Timeline rail */}
                    <div
                        aria-hidden="true"
                        className="absolute bottom-8 left-[13px] top-4 w-px bg-gradient-to-b from-cyan-400/10 via-cyan-400/50 to-violet-500/10 lg:left-1/2 lg:-translate-x-1/2"
                    />

                    <div className="space-y-8 lg:space-y-10">
                        {experience.map((item, index) => {
                            const isLeft = index % 2 !== 0;

                            return (
                                <motion.article
                                    key={item.id}
                                    initial={
                                        reduceMotion
                                            ? false
                                            : { opacity: 0, y: 24 }
                                    }
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{
                                        once: true,
                                        amount: 0.12,
                                    }}
                                    transition={{
                                        duration: reduceMotion ? 0 : 0.5,
                                        delay: reduceMotion
                                            ? 0
                                            : (index % 2) * 0.06,
                                    }}
                                    className="relative grid min-w-0 grid-cols-[28px_minmax(0,1fr)] items-start gap-4 lg:grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] lg:gap-5"
                                >
                                    {/* Timeline marker */}
                                    <div className="relative z-10 col-start-1 mt-7 flex justify-center lg:col-start-2">
                                        <motion.div
                                            whileHover={
                                                reduceMotion
                                                    ? undefined
                                                    : { scale: 1.12 }
                                            }
                                            className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/50 bg-[#050816] shadow-[0_0_20px_rgba(34,211,238,0.16)]"
                                        >
                                            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                                        </motion.div>
                                    </div>

                                    {/* Experience card */}
                                    <motion.div
                                        whileHover={
                                            reduceMotion
                                                ? undefined
                                                : { y: -3 }
                                        }
                                        className={`group relative col-start-2 min-w-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950/70 p-5 shadow-[0_12px_50px_rgba(0,0,0,0.15)] transition-colors duration-300 hover:border-cyan-400/30 sm:p-6 ${
                                            isLeft
                                                ? "lg:col-start-1"
                                                : "lg:col-start-3"
                                        }`}
                                    >
                                        <div
                                            aria-hidden="true"
                                            className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/[0.06] blur-3xl transition-colors group-hover:bg-cyan-400/[0.12]"
                                        />

                                        <div className="relative flex flex-wrap items-center justify-between gap-3">
                                            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-semibold text-cyan-300">
                                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                                                {item.year}
                                            </span>

                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                                                {item.type}
                                            </span>
                                        </div>

                                        <h3 className="relative mt-5 text-lg font-bold leading-snug text-white sm:text-xl">
                                            {item.title}
                                        </h3>

                                        <div className="relative mt-3 flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
                                            <span className="inline-flex items-start gap-2">
                                                <BriefcaseBusiness
                                                    size={14}
                                                    aria-hidden="true"
                                                    className="mt-0.5 shrink-0 text-cyan-400"
                                                />
                                                <span>{item.company}</span>
                                            </span>

                                            <span className="inline-flex items-start gap-2">
                                                <MapPin
                                                    size={14}
                                                    aria-hidden="true"
                                                    className="mt-0.5 shrink-0 text-violet-400"
                                                />
                                                <span>{item.location}</span>
                                            </span>
                                        </div>

                                        <p className="relative mt-4 break-words text-sm leading-7 text-slate-400">
                                            {item.description}
                                        </p>

                                        {Array.isArray(item.technologies) &&
                                            item.technologies.length > 0 && (
                                                <div className="relative mt-5 flex flex-wrap gap-2">
                                                    {item.technologies.map(
                                                        (technology) => (
                                                            <span
                                                                key={technology}
                                                                className="rounded-lg border border-white/[0.07] bg-white/[0.035] px-2.5 py-1.5 text-[10px] font-medium text-slate-300"
                                                            >
                                                                {technology}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            )}

                                        {item.action?.url && (
                                            <div className="relative mt-6">
                                                <a
                                                    href={item.action.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`${item.action.label} — opens in a new tab`}
                                                    className="group/action inline-flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-400/[0.06] px-4 py-2.5 text-xs font-semibold text-cyan-300 transition-colors duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                                                >
                                                    {item.action.label}
                                                    <ArrowUpRight
                                                        size={15}
                                                        aria-hidden="true"
                                                        className="transition-transform duration-300 group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5"
                                                    />
                                                </a>
                                            </div>
                                        )}
                                    </motion.div>

                                    {/* Balances the alternating desktop timeline */}
                                    <div
                                        aria-hidden="true"
                                        className="hidden lg:block"
                                    />
                                </motion.article>
                            );
                        })}
                    </div>
                </div>

                {!isPage && (
                    <motion.div
                        {...reveal}
                        className="mt-12 flex justify-center"
                    >
                        <Link
                            to="/experience"
                            className="group inline-flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-6 py-3.5 text-sm font-semibold text-cyan-300 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                        >
                            Explore Full Journey
                            <ArrowUpRight
                                size={17}
                                aria-hidden="true"
                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Experience;
