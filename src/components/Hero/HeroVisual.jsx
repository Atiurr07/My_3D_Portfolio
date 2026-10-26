import { motion, useReducedMotion } from "framer-motion";
import CanvasScene from "../../three/HeroScene/CanvasScene";

const HeroVisual = () => {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
                relative isolate h-full w-full
                overflow-hidden rounded-[2rem]
                border-0 bg-transparent
                outline-none ring-0
            "
            aria-label="Interactive 3D hero scene. Drag to orbit around the models."
        >
            {/* Dark blue and violet atmosphere, without a white frame. */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute inset-0 z-0
                    bg-[radial-gradient(ellipse_at_58%_45%,rgba(20,75,190,0.22),transparent_48%),radial-gradient(ellipse_at_72%_64%,rgba(49,35,150,0.16),transparent_52%)]
                "
            />

            {/* Soft blue ambient glow. */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute
                    left-[28%] top-[20%]
                    h-[42%] w-[44%]
                    rounded-full
                    bg-blue-600/[0.09]
                    blur-[90px]
                "
            />

            {/* Actual 3D canvas. */}
            <div className="absolute inset-0 z-10">
                <CanvasScene />
            </div>

            {/* Small, unobtrusive interaction hint. */}
            <div
                className="
                    pointer-events-none absolute bottom-3 left-1/2 z-20
                    -translate-x-1/2 whitespace-nowrap
                    rounded-full border border-blue-400/15
                    bg-[#050816]/55 px-3 py-1.5
                    text-[10px] font-medium tracking-wide
                    text-blue-100/65 backdrop-blur-sm
                    sm:bottom-5 sm:text-xs
                "
            >
                Drag to explore the 3D scene · 360° orbit
            </div>
        </motion.div>
    );
};

export default HeroVisual;
