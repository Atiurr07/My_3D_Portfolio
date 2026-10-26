// import { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowLeft, ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";

// import { allSkills, skillCategories } from "../data/skills";

// import SkillsBackground from "../components/Skills/SkillsBackground";
// import SkillsOrbit from "../components/Skills/SkillsOrbit";
// import SkillCategoryTabs from "../components/Skills/SkillCategoryTabs";

// const SkillsPage = () => {
//     const [activeCategory, setActiveCategory] = useState("All");

//     const categories = [
//         "All",
//         ...skillCategories.map((category) => category.title),
//     ];

//     const visibleSkills = useMemo(() => {
//         if (activeCategory === "All") {
//             return allSkills;
//         }

//         return allSkills.filter(
//             (skill) => skill.category === activeCategory
//         );
//     }, [activeCategory]);

//     return (
//         <main
//             className="
//                 relative
//                 isolate
//                 min-h-screen
//                 overflow-hidden
//                 bg-[#050816]
//                 text-white
//             "
//         >
//             <SkillsBackground />

//             <div
//                 className="
//                     relative
//                     z-10
//                     mx-auto
//                     w-full
//                     max-w-[1500px]
//                     px-5
//                     pb-24
//                     pt-12
//                     sm:px-8
//                     sm:pb-28
//                     lg:px-12
//                     lg:pb-32
//                     xl:px-16
//                 "
//             >
//                 {/* Back button */}
//                 <motion.div
//                     initial={{
//                         opacity: 0,
//                         x: -20,
//                     }}
//                     animate={{
//                         opacity: 1,
//                         x: 0,
//                     }}
//                     transition={{
//                         duration: 0.6,
//                     }}
//                 >
//                     <Link
//                         to="/"
//                         className="
//                             group
//                             inline-flex
//                             items-center
//                             gap-2
//                             rounded-xl
//                             border
//                             border-white/10
//                             bg-white/[0.035]
//                             px-4
//                             py-2.5
//                             text-xs
//                             font-semibold
//                             text-slate-400
//                             backdrop-blur-xl
//                             transition-all
//                             duration-300
//                             hover:border-cyan-400/30
//                             hover:bg-cyan-400/[0.06]
//                             hover:text-cyan-300
//                         "
//                     >
//                         <ArrowLeft
//                             size={16}
//                             className="
//                                 transition-transform
//                                 duration-300
//                                 group-hover:-translate-x-1
//                             "
//                         />

//                         Back to Home
//                     </Link>
//                 </motion.div>

//                 {/* Page heading */}
//                 <motion.header
//                     initial={{
//                         opacity: 0,
//                         y: 35,
//                     }}
//                     animate={{
//                         opacity: 1,
//                         y: 0,
//                     }}
//                     transition={{
//                         duration: 0.8,
//                         delay: 0.1,
//                     }}
//                     className="
//                         mx-auto
//                         mt-16
//                         max-w-4xl
//                         text-center
//                         sm:mt-20
//                     "
//                 >
//                     <span
//                         className="
//                             inline-flex
//                             rounded-full
//                             border
//                             border-cyan-400/20
//                             bg-cyan-400/[0.06]
//                             px-4
//                             py-2
//                             text-[10px]
//                             font-bold
//                             uppercase
//                             tracking-[0.35em]
//                             text-cyan-300
//                             backdrop-blur-xl
//                             sm:px-5
//                             sm:text-xs
//                         "
//                     >
//                         Technical Arsenal
//                     </span>

//                     <h1
//                         className="
//                             mt-6
//                             text-4xl
//                             font-black
//                             leading-[1.05]
//                             tracking-tight
//                             text-white
//                             sm:text-5xl
//                             lg:text-7xl
//                         "
//                     >
//                         My{" "}
//                         <span
//                             className="
//                                 bg-gradient-to-r
//                                 from-cyan-300
//                                 via-white
//                                 to-violet-400
//                                 bg-clip-text
//                                 text-transparent
//                             "
//                         >
//                             Skills
//                         </span>{" "}
//                         Ecosystem
//                     </h1>

//                     <p
//                         className="
//                             mx-auto
//                             mt-6
//                             max-w-2xl
//                             text-sm
//                             leading-7
//                             text-slate-500
//                             sm:text-base
//                             sm:leading-8
//                         "
//                     >
//                         Explore the technologies, frameworks, AI tools,
//                         databases and engineering technologies that form the
//                         foundation of my development workflow.
//                     </p>
//                 </motion.header>

//                 {/* Category selector */}
//                 <motion.div
//                     initial={{
//                         opacity: 0,
//                         y: 25,
//                     }}
//                     animate={{
//                         opacity: 1,
//                         y: 0,
//                     }}
//                     transition={{
//                         duration: 0.7,
//                         delay: 0.25,
//                     }}
//                     className="mt-12"
//                 >
//                     <SkillCategoryTabs
//                         categories={categories}
//                         activeCategory={activeCategory}
//                         onChange={setActiveCategory}
//                     />
//                 </motion.div>

//                 {/* Main 3D ecosystem */}
//                 <motion.section
//                     initial={{
//                         opacity: 0,
//                         scale: 0.96,
//                     }}
//                     animate={{
//                         opacity: 1,
//                         scale: 1,
//                     }}
//                     transition={{
//                         duration: 1,
//                         delay: 0.35,
//                     }}
//                     className="
//                         relative
//                         mt-4
//                         rounded-[2rem]
//                         border
//                         border-white/[0.06]
//                         bg-white/[0.015]
//                         backdrop-blur-[2px]
//                     "
//                 >
//                     <SkillsOrbit skills={visibleSkills} />
//                 </motion.section>

//                 {/* Technology information */}
//                 <motion.section
//                     initial={{
//                         opacity: 0,
//                         y: 30,
//                     }}
//                     whileInView={{
//                         opacity: 1,
//                         y: 0,
//                     }}
//                     viewport={{
//                         once: false,
//                         amount: 0.15,
//                     }}
//                     transition={{
//                         duration: 0.7,
//                     }}
//                     className="mt-20"
//                 >
//                     <div className="mx-auto max-w-3xl text-center">
//                         <p
//                             className="
//                                 text-[10px]
//                                 font-bold
//                                 uppercase
//                                 tracking-[0.35em]
//                                 text-cyan-400
//                             "
//                         >
//                             Technology Matrix
//                         </p>

//                         <h2
//                             className="
//                                 mt-4
//                                 text-3xl
//                                 font-bold
//                                 text-white
//                                 sm:text-4xl
//                             "
//                         >
//                             Complete Technical Stack
//                         </h2>

//                         <p className="mt-4 text-sm leading-7 text-slate-500">
//                             A detailed view of the technologies currently
//                             represented in the portfolio ecosystem.
//                         </p>
//                     </div>

//                     {/* Technology cards */}
//                     <div
//                         className="
//                             mx-auto
//                             mt-12
//                             grid
//                             max-w-6xl
//                             grid-cols-1
//                             gap-4
//                             sm:grid-cols-2
//                             lg:grid-cols-3
//                         "
//                     >
//                         {skillCategories.map((category, categoryIndex) => (
//                             <motion.article
//                                 key={category.id}
//                                 initial={{
//                                     opacity: 0,
//                                     y: 25,
//                                 }}
//                                 whileInView={{
//                                     opacity: 1,
//                                     y: 0,
//                                 }}
//                                 viewport={{
//                                     once: false,
//                                     amount: 0.1,
//                                 }}
//                                 transition={{
//                                     duration: 0.5,
//                                     delay: categoryIndex * 0.06,
//                                 }}
//                                 className="
//                                     group
//                                     relative
//                                     overflow-hidden
//                                     rounded-2xl
//                                     border
//                                     border-white/[0.07]
//                                     bg-white/[0.025]
//                                     p-5
//                                     backdrop-blur-xl
//                                     transition-all
//                                     duration-300
//                                     hover:-translate-y-1
//                                     hover:border-cyan-400/20
//                                     hover:bg-white/[0.04]
//                                 "
//                             >
//                                 {/* Category glow */}
//                                 <div
//                                     className="
//                                         pointer-events-none
//                                         absolute
//                                         -right-10
//                                         -top-10
//                                         h-24
//                                         w-24
//                                         rounded-full
//                                         opacity-10
//                                         blur-3xl
//                                         transition-opacity
//                                         duration-300
//                                         group-hover:opacity-30
//                                     "
//                                     style={{
//                                         backgroundColor: category.color,
//                                     }}
//                                 />

//                                 <div
//                                     className="
//                                         relative
//                                         flex
//                                         items-center
//                                         justify-between
//                                     "
//                                 >
//                                     <div className="flex items-center gap-3">
//                                         <span
//                                             className="
//                                                 h-2.5
//                                                 w-2.5
//                                                 rounded-full
//                                                 shadow-[0_0_12px_currentColor]
//                                             "
//                                             style={{
//                                                 backgroundColor:
//                                                     category.color,
//                                                 color: category.color,
//                                             }}
//                                         />

//                                         <h3 className="text-base font-bold text-white">
//                                             {category.title}
//                                         </h3>
//                                     </div>

//                                     <span
//                                         className="
//                                             text-[10px]
//                                             font-semibold
//                                         "
//                                         style={{
//                                             color: category.color,
//                                         }}
//                                     >
//                                         {category.skills.length}
//                                     </span>
//                                 </div>

//                                 <p
//                                     className="
//                                         relative
//                                         mt-3
//                                         text-xs
//                                         leading-6
//                                         text-slate-500
//                                     "
//                                 >
//                                     {category.description}
//                                 </p>

//                                 <div
//                                     className="
//                                         relative
//                                         mt-5
//                                         flex
//                                         flex-wrap
//                                         gap-2
//                                     "
//                                 >
//                                     {category.skills.map((skill) => {
//                                         const Icon = skill.icon;

//                                         return (
//                                             <div
//                                                 key={skill.name}
//                                                 className="
//                                                     inline-flex
//                                                     items-center
//                                                     gap-2
//                                                     rounded-lg
//                                                     border
//                                                     border-white/[0.07]
//                                                     bg-black/20
//                                                     px-2.5
//                                                     py-2
//                                                 "
//                                             >
//                                                 <Icon
//                                                     size={14}
//                                                     style={{
//                                                         color: skill.color,
//                                                     }}
//                                                 />

//                                                 <span className="text-[10px] font-medium text-slate-400">
//                                                     {skill.name}
//                                                 </span>
//                                             </div>
//                                         );
//                                     })}
//                                 </div>
//                             </motion.article>
//                         ))}
//                     </div>
//                 </motion.section>

//                 {/* Bottom CTA */}
//                 <motion.div
//                     initial={{
//                         opacity: 0,
//                         y: 20,
//                     }}
//                     whileInView={{
//                         opacity: 1,
//                         y: 0,
//                     }}
//                     viewport={{
//                         once: false,
//                     }}
//                     transition={{
//                         duration: 0.7,
//                     }}
//                     className="
//                         mt-20
//                         flex
//                         justify-center
//                     "
//                 >
//                     <Link
//                         to="/"
//                         className="
//                             group
//                             inline-flex
//                             items-center
//                             gap-3
//                             rounded-xl
//                             border
//                             border-cyan-400/20
//                             bg-cyan-400/[0.06]
//                             px-6
//                             py-3.5
//                             text-sm
//                             font-semibold
//                             text-cyan-300
//                             backdrop-blur-xl
//                             transition-all
//                             duration-300
//                             hover:border-cyan-400/40
//                             hover:bg-cyan-400/10
//                         "
//                     >
//                         Return to Portfolio
//                         <ArrowUpRight
//                             size={17}
//                             className="
//                                 transition-transform
//                                 duration-300
//                                 group-hover:-translate-y-1
//                                 group-hover:translate-x-1
//                             "
//                         />
//                     </Link>
//                 </motion.div>
//             </div>
//         </main>
//     );
// };

// export default SkillsPage;


import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { allSkills, skillCategories } from "../data/skills";
import SkillsBackground from "../components/Skills/SkillsBackground";
import SkillsOrbit from "../components/Skills/SkillsOrbit";
import SkillCategoryTabs from "../components/Skills/SkillCategoryTabs";

const SkillsPage = () => {
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

    const reveal = (distance = 20) => ({
        initial: reduceMotion ? false : { opacity: 0, y: distance },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
        transition: { duration: reduceMotion ? 0 : 0.55 },
    });

    return (
        <main className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-white">
            <SkillsBackground />

            <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-24 pt-10 sm:px-8 sm:pb-28 sm:pt-12 lg:px-12 lg:pb-32 xl:px-16">
                <Link
                    to="/"
                    className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-xs font-semibold text-slate-400 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                    <ArrowLeft
                        size={16}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                    Back to Home
                </Link>

                <motion.header
                    {...reveal(30)}
                    className="mx-auto mt-16 max-w-4xl text-center sm:mt-20"
                >
                    <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-300 sm:px-5 sm:text-xs">
                        Technical Arsenal
                    </span>

                    <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
                        My{" "}
                        <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-400 bg-clip-text text-transparent">
                            Skills
                        </span>{" "}
                        Ecosystem
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                        Explore the technologies, frameworks, AI tools and
                        databases that form the foundation of my development
                        workflow.
                    </p>
                </motion.header>

                <motion.div {...reveal(20)} className="mt-12">
                    <SkillCategoryTabs
                        categories={categories}
                        activeCategory={activeCategory}
                        onChange={setActiveCategory}
                    />
                </motion.div>

                <motion.section
                    aria-label="Interactive skills orbit"
                    initial={
                        reduceMotion
                            ? false
                            : { opacity: 0, scale: 0.98 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: reduceMotion ? 0 : 0.6,
                        delay: reduceMotion ? 0 : 0.1,
                    }}
                    className="relative mt-5 rounded-[2rem] border border-white/[0.06] bg-white/[0.015]"
                >
                    <SkillsOrbit skills={visibleSkills} />
                </motion.section>

                <motion.section
                    {...reveal(25)}
                    aria-labelledby="technology-matrix-heading"
                    className="mt-20 sm:mt-24"
                >
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-400">
                            Technology Matrix
                        </p>

                        <h2
                            id="technology-matrix-heading"
                            className="mt-4 text-3xl font-bold text-white sm:text-4xl"
                        >
                            Complete Technical Stack
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                            Browse the technologies grouped by category.
                            Choose a category above to filter the interactive
                            orbit.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {skillCategories.map((category, index) => (
                            <motion.article
                                key={category.title}
                                initial={
                                    reduceMotion
                                        ? false
                                        : { opacity: 0, y: 18 }
                                }
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{
                                    duration: reduceMotion ? 0 : 0.45,
                                    delay: reduceMotion
                                        ? 0
                                        : (index % 3) * 0.06,
                                }}
                                className="relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950/60 p-5 transition-colors duration-300 hover:border-cyan-400/20 sm:p-6"
                            >
                                <div
                                    aria-hidden="true"
                                    className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-10 blur-3xl"
                                    style={{
                                        backgroundColor: category.color,
                                    }}
                                />

                                <div className="relative flex items-center justify-between gap-3">
                                    <div className="flex min-w-0 items-center gap-3">
                                        <span
                                            aria-hidden="true"
                                            className="h-2.5 w-2.5 shrink-0 rounded-full shadow-[0_0_12px_currentColor]"
                                            style={{
                                                backgroundColor: category.color,
                                                color: category.color,
                                            }}
                                        />

                                        <h3 className="text-base font-bold text-white">
                                            {category.title}
                                        </h3>
                                    </div>

                                    <span
                                        className="shrink-0 text-xs font-semibold"
                                        style={{ color: category.color }}
                                    >
                                        {category.skills.length}
                                    </span>
                                </div>

                                <p className="relative mt-3 text-xs leading-6 text-slate-500">
                                    {category.description}
                                </p>

                                <div className="relative mt-5 flex flex-wrap gap-2">
                                    {category.skills.map((skill) => {
                                        const Icon = skill.icon;

                                        return (
                                            <span
                                                key={skill.name}
                                                className="inline-flex max-w-full items-center gap-2 rounded-lg border border-white/[0.07] bg-black/20 px-2.5 py-2"
                                            >
                                                {Icon && (
                                                    <Icon
                                                        size={14}
                                                        aria-hidden="true"
                                                        className="shrink-0"
                                                        style={{
                                                            color: skill.color,
                                                        }}
                                                    />
                                                )}

                                                <span className="break-words text-[10px] font-medium text-slate-400">
                                                    {skill.name}
                                                </span>
                                            </span>
                                        );
                                    })}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.section>

                <motion.div
                    {...reveal(20)}
                    className="mt-20 flex justify-center"
                >
                    <Link
                        to="/"
                        className="group inline-flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-6 py-3.5 text-sm font-semibold text-cyan-300 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                        Return to Portfolio
                        <ArrowUpRight
                            size={17}
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>
            </div>
        </main>
    );
};

export default SkillsPage;
