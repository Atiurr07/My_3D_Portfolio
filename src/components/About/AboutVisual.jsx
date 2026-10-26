import { motion, useReducedMotion } from "framer-motion";

import ProfileCard from "./ProfileCard";

const AboutVisual = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 40 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex min-w-0 items-center justify-center py-2 sm:py-6 lg:py-0"
        >
            <div aria-hidden="true" className="pointer-events-none absolute h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[90px] sm:h-[420px] sm:w-[420px] sm:blur-[120px]" />
            <div aria-hidden="true" className="pointer-events-none absolute h-[220px] w-[220px] rounded-full bg-violet-500/10 blur-[80px] sm:h-[320px] sm:w-[320px] sm:blur-[100px]" />
            <div aria-hidden="true" className="pointer-events-none absolute hidden h-[420px] w-[420px] rounded-full border border-cyan-400/10 sm:block" />

            <ProfileCard />
        </motion.div>
    );
};

export default AboutVisual;
