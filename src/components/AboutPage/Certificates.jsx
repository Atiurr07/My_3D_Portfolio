
import { motion } from "framer-motion";
import { Award } from "lucide-react";

import { certificates } from "../../data/certificates";

const Certificate = () => {
    return (
        <section
            id="certificates"
            className="relative overflow-hidden py-28"
        >
            {/* ================= Background Glow ================= */}

            <div className="absolute -left-40 top-16 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[160px]" />

            <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[160px]" />

            {/* ================= Decorative Grid ================= */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.04]
                    bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)]
                    bg-[size:48px_48px]
                "
            />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* ================= Heading ================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: false,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <div className="flex justify-center">

                        <div
                            className="
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-2xl
                                bg-gradient-to-br
                                from-cyan-500
                                to-violet-600
                                shadow-[0_15px_40px_rgba(34,211,238,0.3)]
                            "
                        >
                            <Award
                                size={30}
                                className="text-white"
                            />
                        </div>

                    </div>

                    <p className="mt-8 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
                        Certifications
                    </p>

                    <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
                        Professional Learning Journey
                    </h2>

                    <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-400">
                        Continuous learning has always been part of my
                        engineering journey. These certifications represent my
                        commitment to expanding my knowledge in Software
                        Engineering, Artificial Intelligence, Full Stack
                        Development and emerging technologies.
                    </p>
                </motion.div>

                {/* ================= Certificates Grid ================= */}

                <div
                    className="
                        mt-24
                        grid
                        gap-8
                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >

                    {certificates.map((certificate, index) => (

                        <motion.article
                            key={certificate.id}
                            initial={{
                                opacity: 0,
                                y: 60,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: false,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.1,
                            }}
                            whileHover={{
                                y: -8,
                            }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-[30px]
                                border
                                border-white/10
                                bg-white/[0.04]
                                backdrop-blur-2xl
                                transition-all
                                duration-500
                            "
                        >

                            {/* ===================
                                Part 2 Starts Here
                            ==================== */}
                            {/* ================= Animated Gradient Glow ================= */}

                            <div
                                className="
                                    absolute
                                    -right-24
                                    -top-24
                                    h-52
                                    w-52
                                    rounded-full
                                    bg-gradient-to-br
                                    from-cyan-500
                                    via-blue-500
                                    to-violet-600
                                    opacity-10
                                    blur-[120px]
                                    transition-all
                                    duration-700
                                    group-hover:opacity-30
                                "
                            />

                            {/* ================= Glass Reflection ================= */}

                            <motion.div
                                animate={{
                                    x: ["-150%", "180%"],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: index * 0.4,
                                }}
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-y-0
                                    left-0
                                    w-24
                                    skew-x-[-25deg]
                                    bg-gradient-to-r
                                    from-transparent
                                    via-white/10
                                    to-transparent
                                "
                            />

                            {/* ================= Certificate Image ================= */}

                            <div className="relative overflow-hidden">

                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="
                                        h-60
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-110
                                    "
                                />

                                {/* Image Overlay */}

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-[#050816]
                                        via-transparent
                                        to-transparent
                                    "
                                />

                                {/* Verified Badge */}

                                <motion.div
                                    whileHover={{
                                        scale: 1.08,
                                    }}
                                    className="
                                        absolute
                                        right-5
                                        top-5
                                        rounded-full
                                        border
                                        border-cyan-400/30
                                        bg-black/40
                                        px-4
                                        py-2
                                        backdrop-blur-xl
                                    "
                                >
                                    <span
                                        className="
                                            text-xs
                                            font-semibold
                                            uppercase
                                            tracking-[2px]
                                            text-cyan-300
                                        "
                                    >
                                        Verified
                                    </span>
                                </motion.div>

                            </div>

                            {/* ================= Card Content ================= */}

                            <div className="p-8">

                                {/* Title */}

                                <h3
                                    className="
                                        text-2xl
                                        font-bold
                                        text-white
                                        transition-colors
                                        duration-300
                                        group-hover:text-cyan-300
                                    "
                                >
                                    {certificate.title}
                                </h3>

                                {/* Issuer */}

                                <p className="mt-4 text-slate-400">

                                    Issued by

                                    <span className="ml-2 font-semibold text-cyan-400">
                                        {certificate.issuer}
                                    </span>

                                </p>

                                {/* Date */}

                                <p className="mt-2 text-slate-400">

                                    Completed

                                    <span className="ml-2 font-semibold text-white">
                                        {certificate.date}
                                    </span>

                                </p>

                                {/* Credential */}

                                <p className="mt-2 text-slate-400">

                                    Credential ID

                                    <span className="ml-2 font-medium text-white">
                                        {certificate.credentialId}
                                    </span>

                                </p>

                                {/* Divider */}

                                <div className="my-7 h-px bg-white/10" />

                                {/* Skills */}

                                <div className="flex flex-wrap gap-3">

                                    {certificate.skills.map((skill) => (

                                        <motion.span
                                            key={skill}
                                            whileHover={{
                                                scale: 1.06,
                                                y: -2,
                                            }}
                                            className="
                                                rounded-full
                                                border
                                                border-white/10
                                                bg-white/5
                                                px-4
                                                py-2
                                                text-sm
                                                text-slate-300
                                                backdrop-blur-xl
                                                transition-all
                                                duration-300
                                                hover:border-cyan-400
                                                hover:bg-cyan-500/10
                                                hover:text-cyan-300
                                            "
                                        >
                                            {skill}
                                        </motion.span>

                                    ))}

                                </div>

                                {/* View Certificate Button */}

                                <motion.a
                                    href={certificate.verify}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        scale: 1.03,
                                        y: -2,
                                    }}
                                    whileTap={{
                                        scale: 0.96,
                                    }}
                                    className="
                                        mt-8
                                        inline-flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        bg-gradient-to-r
                                        from-cyan-500
                                        via-blue-600
                                        to-violet-600
                                        px-6
                                        py-3
                                        font-semibold
                                        text-white
                                        shadow-[0_15px_35px_rgba(34,211,238,0.25)]
                                        transition-all
                                        duration-300
                                    "
                                >

                                    View Certificate

                                    <motion.span
                                        animate={{
                                            x: [0, 4, 0],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                        }}
                                    >
                                        →
                                    </motion.span>

                                </motion.a>

                            </div>

                            {/* ================= Bottom Glow ================= */}

                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-1/2
                                    h-16
                                    w-40
                                    -translate-x-1/2
                                    rounded-full
                                    bg-cyan-500/10
                                    blur-[60px]
                                    opacity-0
                                    transition-opacity
                                    duration-500
                                    group-hover:opacity-100
                                "
                            />

                        </motion.article>

                    ))}
                </div>

                {/* ================= Certification Statistics ================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: false,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="
                        mt-24
                        grid
                        gap-6
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {[
                        {
                            value: `${certificates.length}+`,
                            label: "Certificates",
                        },
                        {
                            value: "5+",
                            label: "Learning Platforms",
                        },
                        {
                            value: "20+",
                            label: "Technologies",
                        },
                        {
                            value: "∞",
                            label: "Continuous Learning",
                        },
                    ].map((item) => (
                        <motion.div
                            key={item.label}
                            whileHover={{
                                y: -6,
                                scale: 1.03,
                            }}
                            className="
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/[0.04]
                                p-8
                                text-center
                                backdrop-blur-2xl
                                transition-all
                                duration-500
                                hover:border-cyan-400/40
                                hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]
                            "
                        >
                            <h3 className="text-5xl font-black text-cyan-400">
                                {item.value}
                            </h3>

                            <p className="mt-4 text-slate-400">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ================= Learning Philosophy ================= */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 60,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: false,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="
                        relative
                        mt-28
                        overflow-hidden
                        rounded-[36px]
                        border
                        border-cyan-400/20
                        bg-gradient-to-br
                        from-cyan-500/10
                        via-[#08111f]
                        to-violet-500/10
                        p-10
                        backdrop-blur-3xl
                    "
                >

                    {/* Background Pattern */}

                    <div className="absolute inset-0 opacity-[0.05]">

                        <div
                            className="
                                h-full
                                w-full
                                bg-[radial-gradient(circle,#38bdf8_1px,transparent_1px)]
                                bg-[length:18px_18px]
                            "
                        />

                    </div>

                    <motion.span
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                        className="
                            relative
                            inline-flex
                            rounded-full
                            border
                            border-cyan-400/30
                            bg-cyan-500/10
                            px-5
                            py-2
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[3px]
                            text-cyan-300
                        "
                    >
                        Learning Never Stops
                    </motion.span>

                    <h3
                        className="
                            relative
                            mt-8
                            text-4xl
                            font-black
                            text-white
                        "
                    >
                        Every Certificate Represents Real Knowledge
                    </h3>

                    <p
                        className="
                            relative
                            mt-6
                            max-w-4xl
                            text-lg
                            leading-8
                            text-slate-300
                        "
                    >
                        I believe certifications are valuable only when supported by practical
                        implementation. Every technology I study is reinforced through hands-on
                        projects, experimentation, and continuous learning, enabling me to
                        deliver scalable, production-ready software solutions.
                    </p>
                </motion.div>
            </div>

            {/* ================= Floating Particles ================= */}
            {[...Array(14)].map((_, index) => (

                <motion.div
                    key={index}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.15, 0.5, 0.15],
                    }}
                    transition={{
                        duration: 6 + index,
                        repeat: Infinity,
                        delay: index * 0.4,
                    }}
                    className="
                        absolute
                        rounded-full
                        bg-cyan-400/20
                        blur-sm
                    "
                    style={{
                        width: 4 + Math.random() * 8,
                        height: 4 + Math.random() * 8,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />

            ))}
        </section>
    );
};

export default Certificate;