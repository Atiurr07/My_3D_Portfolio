import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const ResumeSection = () => {
    return (
        <section
            id="resume"
            className="relative overflow-hidden py-28"
        >
            {/* ================= Background Glow ================= */}

            <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[160px]" />

            <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[160px]" />

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

            <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

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
                            <FileText
                                size={30}
                                className="text-white"
                            />
                        </div>

                    </div>

                    <p className="mt-8 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
                        Professional Resume
                    </p>

                    <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
                        My Professional Profile
                    </h2>

                    <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-400">
                        A concise overview of my technical expertise,
                        professional journey, achievements and practical
                        experience in Full Stack Development, Artificial
                        Intelligence and modern software engineering.
                    </p>

                </motion.div>

                {/* ================= Main Layout ================= */}

                <div
                    className="
                        mt-20
                        grid
                        items-start
                        gap-8
                        lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]
                    "
                >

                    {/* ====================================================
                            LEFT : Resume Preview
                    ==================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: false,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-[32px]
                            border
                            border-white/10
                            bg-white/[0.04]
                            p-8
                            backdrop-blur-2xl
                        "
                    >

                        {/* Part 2 */}

                    </motion.div>

                    {/* ====================================================
                            RIGHT : Career Summary
                    ==================================================== */}

                    <div className="min-w-0">

                    {/* Career Summary */}

                    <span
                        className="
                            inline-flex
                            rounded-full
                            border
                            border-violet-400/30
                            bg-violet-500/10
                            px-4
                            py-2
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[3px]
                            text-violet-300
                        "
                    >
                        Professional Summary
                    </span>

                    <h3
                        className="
                            mt-8
                            text-4xl
                            font-black
                            text-white
                        "
                    >
                        Python Full Stack Engineer &
                        <span className="text-cyan-400">
                            {" "}AI Developer
                        </span>
                    </h3>

                    <p
                        className="
                            mt-6
                            leading-8
                            text-slate-400
                        "
                    >
                        Passionate about building scalable web applications,
                        intelligent AI-powered systems, and modern user experiences
                        using React, Django, Computer Vision, Machine Learning,
                        and emerging AI technologies.
                    </p>

                    {/* Highlights */}

                    <div className="mt-10 grid gap-5">

                        {[
                            "Full Stack Web Development",
                            "Artificial Intelligence",
                            "Machine Learning",
                            "Computer Vision",
                            "REST API Development",
                            "Cloud Ready Applications",
                        ].map((item)=>(
                            <motion.div
                                key={item}
                                whileHover={{
                                    x:8,
                                }}
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    px-5
                                    py-4
                                "
                            >

                                <div
                                    className="
                                        h-3
                                        w-3
                                        rounded-full
                                        bg-cyan-400
                                    "
                                />

                                <span className="text-slate-300">

                                    {item}

                                </span>

                            </motion.div>
                        ))}

                    </div>

                    {/* Professional Stats */}

                    <div
                        className="
                            mt-12
                            grid
                            grid-cols-2
                            gap-5
                        "
                    >

                        {[
                            {
                                value:"15+",
                                title:"Projects",
                            },
                            {
                                value:"10+",
                                title:"Technologies",
                            },
                            {
                                value:"100%",
                                title:"Dedication",
                            },
                            {
                                value:"∞",
                                title:"Learning",
                            },
                        ].map((item)=>(

                            <motion.div
                                key={item.title}
                                whileHover={{
                                    y:-5,
                                    scale:1.03,
                                }}
                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-6
                                    text-center
                                "
                            >

                                <h4
                                    className="
                                        text-3xl
                                        font-black
                                        text-cyan-400
                                    "
                                >
                                    {item.value}
                                </h4>

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        text-slate-400
                                    "
                                >
                                    {item.title}
                                </p>

                            </motion.div>

                        ))}

                    </div>


                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: false,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-[32px]
                            border
                            border-white/10
                            bg-white/[0.04]
                            p-8
                            backdrop-blur-2xl
                        "
                    >

                        {/* Part 2 */}
                        {/* ================= Animated Glow ================= */}
                        <div
                            className="
                                absolute
                                -right-24
                                -top-24
                                h-60
                                w-60
                                rounded-full
                                bg-gradient-to-br
                                from-cyan-500
                                via-blue-500
                                to-violet-600
                                opacity-10
                                blur-[120px]
                            "
                        />

                        {/* Resume Label */}

                        <span
                            className="
                                inline-flex
                                rounded-full
                                border
                                border-cyan-400/30
                                bg-cyan-500/10
                                px-4
                                py-2
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[3px]
                                text-cyan-300
                            "
                        >
                            Resume Preview
                        </span>

                        {/* Resume Mockup */}

                        <motion.div
                            whileHover={{
                                y: -8,
                                rotate: -1,
                                scale: 1.02,
                            }}
                            className="
                                relative
                                mt-8
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/10
                                bg-gradient-to-b
                                from-slate-100
                                to-white
                                p-6
                                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                            "
                        >

                            <div className="space-y-4">

                                <div className="h-8 w-52 rounded bg-slate-300" />

                                <div className="h-3 w-full rounded bg-slate-200" />

                                <div className="h-3 w-11/12 rounded bg-slate-200" />

                                <div className="h-3 w-4/5 rounded bg-slate-200" />

                                <div className="mt-8 h-6 w-40 rounded bg-slate-300" />

                                <div className="space-y-3 pt-4">

                                    {[1,2,3,4,5].map((item)=>(
                                        <div
                                            key={item}
                                            className="h-3 rounded bg-slate-200"
                                        />
                                    ))}

                                </div>

                            </div>

                        </motion.div>

                        {/* Resume Buttons */}

                        <div className="mt-10 flex flex-wrap gap-4">

                            <motion.a
                                href="/resume.pdf"
                                download
                                whileHover={{
                                    scale:1.04,
                                    y:-2,
                                }}
                                whileTap={{
                                    scale:0.97,
                                }}
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-cyan-500
                                    via-blue-600
                                    to-violet-600
                                    px-7
                                    py-4
                                    font-semibold
                                    text-white
                                    shadow-[0_15px_35px_rgba(34,211,238,0.25)]
                                "
                            >
                                Download Resume
                            </motion.a>

                            <motion.a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    scale:1.04,
                                    y:-2,
                                }}
                                whileTap={{
                                    scale:0.97,
                                }}
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-cyan-400/20
                                    bg-white/5
                                    px-7
                                    py-4
                                    font-semibold
                                    text-white
                                    backdrop-blur-xl
                                    hover:border-cyan-400
                                "
                            >
                                View Resume
                            </motion.a>
                        </div>
                    </motion.div>

                    </div>
                </div>

                {/* ================= Career Philosophy ================= */}
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
                        mt-24
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
                        Career Philosophy
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
                        Build Solutions That Create Real Impact
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
                        I enjoy transforming ideas into scalable digital products by combining
                        modern software engineering, artificial intelligence, and intuitive
                        user experiences. My goal is to continuously learn, innovate, and
                        develop technology that delivers measurable value to people and
                        businesses.
                    </p>

                </motion.div>

                {/* ================= Journey Timeline ================= */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
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
                        delay: 0.2,
                    }}
                    className="
                        mt-20
                        grid
                        gap-6
                        md:grid-cols-4
                    "
                >

                    {[
                        "Programming",
                        "Full Stack",
                        "Artificial Intelligence",
                        "Future Innovation",
                    ].map((step, index) => (

                        <motion.div
                            key={step}
                            whileHover={{
                                y: -6,
                                scale: 1.03,
                            }}
                            className="
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/[0.04]
                                p-6
                                text-center
                                backdrop-blur-xl
                            "
                        >

                            <div
                                className="
                                    mx-auto
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-gradient-to-br
                                    from-cyan-500
                                    to-violet-600
                                    text-lg
                                    font-bold
                                    text-white
                                "
                            >
                                {index + 1}
                            </div>

                            <h4
                                className="
                                    mt-6
                                    font-semibold
                                    text-white
                                "
                            >
                                {step}
                            </h4>

                        </motion.div>

                    ))}

                </motion.div>
            </div>

            {/* ================= Floating Ambient Particles ================= */}
            {[...Array(15)].map((_, index) => (

                <motion.div
                    key={index}
                    animate={{
                        y: [0, -45, 0],
                        opacity: [0.15, 0.45, 0.15],
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
                        width: 5 + Math.random() * 8,
                        height: 5 + Math.random() * 8,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />

            ))}
        </section>
    );
};

export default ResumeSection;