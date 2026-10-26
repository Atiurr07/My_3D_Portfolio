import { motion, useReducedMotion } from "framer-motion";

const stats = [
    { id: 1, value: "4+", label: "Years of Learning" },
    { id: 2, value: "20+", label: "Projects Built" },
    { id: 3, value: "AI/ML", label: "Specialization" },
];

const AboutStats = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {stats.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: index * 0.1, duration: 0.45 }}
                    whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                    className="group min-w-0 rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] sm:p-5"
                >
                    <h3 className="text-2xl font-bold leading-none text-cyan-400 sm:text-3xl">
                        {item.value}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                        {item.label}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default AboutStats;
