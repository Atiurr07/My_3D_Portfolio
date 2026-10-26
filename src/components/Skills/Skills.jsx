import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { allSkills, skillCategories } from "../../data/skills";

import SkillsBackground from "./SkillsBackground";
import SkillsOrbit from "./SkillsOrbit";
import SkillCategoryTabs from "./SkillCategoryTabs";

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const reduceMotion = useReducedMotion();

    const categories = useMemo(
        () => ["All", ...skillCategories.map((category) => category.title)],
        []
    );

    const visibleSkills = useMemo(() => {
        if (activeCategory === "All") {
            return allSkills;
        }

        return allSkills.filter(
            (skill) => skill.category === activeCategory
        );
    }, [activeCategory]);

    const entrance = (distance = 25) => ({
        initial: reduceMotion ? false : { opacity: 0, y: distance },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: {
            duration: reduceMotion ? 0 : 0.6,
            ease: "easeOut",
        },
    });

    return (
        <section
            id="skills"
            aria-labelledby="skills-heading"
            className="
                relative isolate overflow-hidden bg-[#050816]
                py-24 sm:py-28 lg:py-32
            "
        >
            <SkillsBackground />

            <div
                className="
                    relative z-10 mx-auto w-full max-w-[1450px]
                    px-5 sm:px-8 lg:px-12 xl:px-16
                "
            >
                {/* Section heading */}
                <motion.div
                    {...entrance(35)}
                    className="mx-auto max-w-4xl text-center"
                >
                    <span
                        className="
                            inline-flex rounded-full border
                            border-cyan-400/20 bg-cyan-400/[0.06]
                            px-4 py-2 text-[10px] font-bold
                            uppercase tracking-[0.35em] text-cyan-300
                            backdrop-blur-xl sm:px-5 sm:text-xs
                        "
                    >
                        Skills &amp; Technologies
                    </span>

                    <h2
                        id="skills-heading"
                        className="
                            mt-6 text-4xl font-black leading-[1.05]
                            tracking-tight text-white sm:text-5xl lg:text-6xl
                        "
                    >
                        Technologies{" "}
                        <span
                            className="
                                bg-gradient-to-r from-cyan-300 via-white
                                to-violet-400 bg-clip-text text-transparent
                            "
                        >
                            I Work With
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto mt-6 max-w-2xl text-sm leading-7
                            text-slate-500 sm:text-base sm:leading-8
                        "
                    >
                        A living technology ecosystem representing the
                        languages, frameworks, AI tools and engineering
                        technologies I use to build intelligent digital
                        experiences.
                    </p>
                </motion.div>

                {/* Category controls */}
                <motion.div
                    {...entrance(25)}
                    transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.1 }}
                    className="mt-12"
                >
                    <SkillCategoryTabs
                        categories={categories}
                        activeCategory={activeCategory}
                        onChange={setActiveCategory}
                    />
                </motion.div>

                {/* Animated skill orbit */}
                <SkillsOrbit skills={visibleSkills} />

                {/* Bottom information */}
                <motion.div
                    {...entrance(25)}
                    className="
                        mx-auto flex max-w-3xl flex-col items-center
                        justify-between gap-6 border-t border-white/[0.06]
                        pt-8 sm:flex-row
                    "
                >
                    <div className="text-center sm:text-left">
                        <p
                            className="
                                text-[10px] font-bold uppercase
                                tracking-[0.3em] text-slate-600
                            "
                        >
                            Technology Ecosystem
                        </p>

                        <p className="mt-2 text-sm text-slate-400" aria-live="polite">
                            {visibleSkills.length} technologies currently
                            represented
                        </p>
                    </div>

                    <Link
                        to="/skills"
                        className="
                            group inline-flex items-center gap-3 rounded-xl
                            border border-cyan-400/20 bg-cyan-400/[0.06]
                            px-5 py-3 text-xs font-semibold text-cyan-300
                            backdrop-blur-xl transition-colors duration-300
                            hover:border-cyan-400/40 hover:bg-cyan-400/10
                            focus-visible:outline-none focus-visible:ring-2
                            focus-visible:ring-cyan-300
                        "
                    >
                        Explore Complete Skills
                        <ArrowUpRight
                            size={16}
                            aria-hidden="true"
                            className="
                                transition-transform duration-300
                                group-hover:-translate-y-1
                                group-hover:translate-x-1
                            "
                        />
                    </Link>
                </motion.div>
            </div>

            {/* Section separator */}
            <div
                aria-hidden="true"
                className="
                    absolute bottom-0 left-0 h-px w-full
                    bg-gradient-to-r from-transparent via-cyan-400/20
                    to-transparent
                "
            />
        </section>
    );
};

export default Skills;
