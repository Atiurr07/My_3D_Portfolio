import { motion, useReducedMotion } from "framer-motion";

import AboutStats from "./AboutStats";
import ReadMoreButton from "./ReadMoreButton";

const AboutContent = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -40 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="min-w-0"
        >
            <motion.span
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex w-fit items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-cyan-300 sm:px-5 sm:text-xs sm:tracking-[0.28em]"
            >
                ABOUT ME
            </motion.span>

            <h2
                id="about-heading"
                className="mt-6 max-w-3xl text-[clamp(2.15rem,5vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-balance bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-transparent"
            >
                Passionate About Building{" "}
                <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                    Intelligent
                </span>{" "}
                Digital Experiences
            </h2>

            <div className="mt-7 max-w-2xl space-y-5 text-[15px] leading-7 text-slate-300 sm:mt-8 sm:text-base sm:leading-8 lg:text-[17px]">
                <p>
                    I’m Atiurr Rahman, a Python Full Stack Engineer and AI/ML
                    enthusiast focused on developing scalable web applications
                    and intelligent software solutions. My work combines
                    backend engineering, modern frontend technologies, and
                    machine learning to build reliable products that solve
                    real-world challenges.
                </p>

                <p>
                    My experience includes Django, React, REST APIs, Computer
                    Vision, and AI-driven applications. I enjoy transforming
                    ideas into clean, responsive, and production-ready digital
                    products while continuously exploring emerging
                    technologies.
                </p>
            </div>

            <div className="mt-9 sm:mt-10 lg:mt-11">
                <AboutStats />
            </div>

            <div className="mt-9 sm:mt-10">
                <ReadMoreButton />
            </div>
        </motion.div>
    );
};

export default AboutContent;
