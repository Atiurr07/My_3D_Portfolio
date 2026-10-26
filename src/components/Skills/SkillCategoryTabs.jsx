import { motion, useReducedMotion } from "framer-motion";

const SkillCategoryTabs = ({
    categories = [],
    activeCategory,
    onChange,
}) => {
    const reduceMotion = useReducedMotion();

    return (
        <div
            role="group"
            aria-label="Filter skills by category"
            className="
                relative z-30 mx-auto flex max-w-4xl flex-wrap
                justify-center gap-2 rounded-2xl border
                border-white/[0.08] bg-black/20 p-2
                sm:gap-3
            "
        >
            {categories.map((category) => {
                const active = activeCategory === category;

                return (
                    <button
                        key={category}
                        type="button"
                        aria-pressed={active}
                        onClick={() => onChange?.(category)}
                        className="
                            relative overflow-hidden rounded-xl
                            px-4 py-2.5 text-xs font-semibold
                            transition-colors duration-300
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-cyan-300
                            focus-visible:ring-offset-2
                            focus-visible:ring-offset-slate-950
                            sm:px-5 sm:py-3 sm:text-sm
                        "
                    >
                        {active && (
                            <motion.span
                                layoutId="skill-active-tab"
                                aria-hidden="true"
                                className="
                                    absolute inset-0 rounded-xl
                                    bg-cyan-400/10
                                "
                                transition={
                                    reduceMotion
                                        ? { duration: 0 }
                                        : {
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }
                                }
                            />
                        )}

                        <span
                            className={`relative z-10 ${
                                active
                                    ? "text-cyan-300"
                                    : "text-slate-500 hover:text-slate-300"
                            }`}
                        >
                            {category}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default SkillCategoryTabs;
