import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";
import ScrollIndicator from "./ScrollIndicator";

const HeroContent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.9,
                ease: "easeOut",
            }}
            className="
                flex
                flex-col
                justify-center
                items-start
                w-full
                max-w-2xl
                hero-copy-shell
                mx-auto
                lg:mx-0
            "
        >
            {/* Greeting */}

            <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="
                    mb-4
                    text-sm
                    sm:text-sm
                    lg:text-base
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-cyan-400
                "
            >
                Hello, I'm
            </motion.span>

            {/* Name */}

            <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="
                    leading-none
                    font-black
                    text-white
                    text-5xl
                    sm:text-6xl
                    lg:text-5xl
                    xl:text-6xl
                "
            >
                Atiurr
            </motion.h1>

            <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="
                    mt-1
                    leading-none
                    font-black
                    text-5xl
                    sm:text-6xl
                    lg:text-5xl
                    xl:text-6xl
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-violet-500
                    bg-clip-text
                    text-transparent
                "
            >
                Rahman
            </motion.h1>

            {/* Role */}

            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="
                    mt-5
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    font-semibold
                    text-slate-200
                "
            >
                AI Engineer • Full Stack Developer
            </motion.h2>

            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="
                    mt-2
                    text-lg
                    sm:text-xl
                    lg:text-2xl
                    font-semibold
                    text-cyan-400
                "
            >
                AI / ML Engineer • Computer Vision
            </motion.h2>

            {/* Description */}

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
                className="
                    mt-5
                    max-w-xl
                    text-base
                    sm:text-lg
                    leading-8
                    text-slate-400
                "
            >
                I build modern web applications and intelligent AI solutions
                using Python, Django, React, Machine Learning and Computer
                Vision, transforming ideas into scalable digital products with
                exceptional user experiences.
            </motion.p>

            {/* Buttons */}

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-6 w-full"
            >
                <HeroButtons />
            </motion.div>

            {/* Social */}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.05 }}
                className="mt-6"
            >
                <HeroSocial />
            </motion.div>

            {/* Scroll */}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-5"
            >
                <ScrollIndicator />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
