import { motion } from "framer-motion";
import HeroVisual from "./HeroVisual";

const HeroRight = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.85,
                delay: 0.25,
                ease: "easeOut",
            }}
            className="
                relative flex w-full min-w-0
                items-center justify-center
            "
        >
            {/* Keep the scene contained without adding an outer glow ring. */}
            <div
                className="
                    relative flex aspect-square w-full
                    max-w-[min(88vw,30rem)]
                    items-center justify-center
                    lg:max-w-[min(48vw,42rem,calc(100svh-8rem))]
                "
            >
                <HeroVisual />
            </div>
        </motion.div>
    );
};

export default HeroRight;
