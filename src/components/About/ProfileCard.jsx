import { motion, useReducedMotion } from "framer-motion";

import profile from "../../assets/images/profile.jpg";

const technologies = ["Python", "React", "Django", "AI", "ML", "REST API"];

const ProfileCard = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            whileHover={shouldReduceMotion ? undefined : { rotateX: 4, rotateY: -4, scale: 1.015 }}
            animate={shouldReduceMotion ? undefined : { y: [-6, 6, -6] }}
            transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotateX: { duration: 0.25 },
                rotateY: { duration: 0.25 },
            }}
            style={{ transformStyle: "preserve-3d", perspective: 1200 }}
            className="relative w-full max-w-[470px]"
        >
            <div aria-hidden="true" className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/15 via-transparent to-violet-600/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-400/20 bg-slate-950/55 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-4">
                <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-900/60 sm:rounded-[1.5rem]">
                    <div className="relative aspect-[4/4.35] w-full overflow-hidden sm:aspect-[4/4.15]">
                        <img
                            src={profile}
                            alt="Portrait of Atiurr Rahman"
                            loading="lazy"
                            className="h-full w-full object-cover object-center drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]"
                        />
                        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    </div>
                </div>

                <div className="px-2 pb-2 pt-5 text-center sm:px-4 sm:pt-6">
                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-[1.7rem]">
                        Atiurr Rahman
                    </h3>

                    <p className="mt-2 text-sm font-medium text-cyan-400 sm:text-base">
                        Python Full Stack Engineer
                    </p>
                    <p className="text-sm text-slate-300 sm:text-base">
                        AI / ML Enthusiast
                    </p>

                    <div className="mt-5 inline-flex max-w-full items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-300 sm:mt-6 sm:px-4 sm:text-sm">
                        <span aria-hidden="true" className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                        Available for Full-Time
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-7 sm:gap-2.5">
                        {technologies.map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[11px] font-medium text-slate-300 backdrop-blur-lg sm:px-3.5 sm:text-xs"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProfileCard;
