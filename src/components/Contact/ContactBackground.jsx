
import { motion, useReducedMotion } from "framer-motion";

const ContactBackground = () => {
    const reduceMotion = useReducedMotion();

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            <motion.div
                animate={
                    reduceMotion
                        ? { opacity: 0.12 }
                        : {
                            x: [0, 25, 0],
                            y: [0, -18, 0],
                            opacity: [0.07, 0.15, 0.07],
                        }
                }
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -left-36 top-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]"
            />

            <motion.div
                animate={
                    reduceMotion
                        ? { opacity: 0.1 }
                        : {
                            x: [0, -25, 0],
                            y: [0, 20, 0],
                            opacity: [0.05, 0.13, 0.05],
                        }
                }
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -right-36 bottom-0 h-[26rem] w-[26rem] rounded-full bg-violet-600/20 blur-[140px]"
            />

            <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] [background-size:56px_56px]" />

            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.06]" />
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/[0.06]" />
        </div>
    );
};

export default ContactBackground;
