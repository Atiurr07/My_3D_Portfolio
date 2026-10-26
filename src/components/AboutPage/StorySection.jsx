import { motion } from "framer-motion";

const timeline = [
    {
        year: "2022",
        title: "Started My Coding Journey",
        description:
            "Begain exploring programming with curiosity and built my first small applications.",
    },
    {
        year: "2023",
        title: "Discovered Python",
        description:
            "Fell in love with Python because of its simplicity and versatility for web development and AI.",
    },
    {
        year: "2024",
        title: "Built Real Projects",
        description:
            "Started creating responsive websites and backend systems using Django and modern web technologies.",
    },
    {
        year: "2025",
        title: "Entered AI & Machine Learning",
        description:
            "Explored Computer Vision, Machine Learning and Deep Learning through practical projects.",
    },
    {
        year: "2023",
        title: "Computer Vision Focus",
        description:
            "Developed AI-powered solutions using OpenCV, TensorFlow and intelligent automation.",
    },
    {
        year: "Today",
        title: "Building AI Products",
        description:
            "Focused on scalable Full Stack applications integrated with Artificial Intelligence.",
    },
];

const StorySection = () => {
    return (
        <section
            className="
                relative
                py-28
                overflow-hidden
            "
        >
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

                <motion.div
                    initial={{opacity:0,y:50}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:false}}
                    transition={{duration:.8}}
                    className="mb-14 max-w-4xl"
                >
                    <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
                        MY STORY
                    </p>

                    <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
                        Turning Passion Into
                        <span className="text-violet-400"> Purpose</span>
                    </h2>
                </motion.div>

                <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20 xl:gap-24">

                    {/* LEFT */}

                    <div className="relative min-w-0 lg:pt-2">

                        <div className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-cyan-400" />

                        {timeline.map((item,index)=>(
                            <motion.div
                                key={index}
                                initial={{opacity:0,x:-40}}
                                whileInView={{opacity:1,x:0}}
                                viewport={{once:false}}
                                transition={{
                                    duration:.6,
                                    delay:index*.12
                                }}
                                className="relative mb-12 pl-16 last:mb-0"
                            >
                                <motion.div
                                    animate={{
                                        scale:[1,1.35,1]
                                    }}
                                    transition={{
                                        repeat:Infinity,
                                        duration:2,
                                        delay:index*.3
                                    }}
                                    className="
                                        absolute
                                        left-0
                                        top-1
                                        h-10
                                        w-10
                                        rounded-full
                                        border-4
                                        border-cyan-400
                                        bg-[#050816]
                                    "
                                />

                                <h4 className="text-cyan-400 font-bold">
                                    {item.year}
                                </h4>

                                <h3 className="mt-1 text-xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-slate-400 leading-7">
                                    {item.description}
                                </p>

                            </motion.div>
                        ))}

                    </div>

                    {/* RIGHT */}

                    <motion.div
                        initial={{opacity:0,x:80}}
                        whileInView={{opacity:1,x:0}}
                        viewport={{once:false}}
                        transition={{duration:.8}}
                        className="
                            relative
                            rounded-[40px]
                            border
                            border-white/10
                            bg-white/5
                            p-7 sm:p-9 lg:p-10
                            backdrop-blur-2xl
                        "
                    >

                        <div className="absolute right-10 top-10 text-[160px] text-cyan-400/10 font-black">
                            "
                        </div>

                        <h3 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                            Passionate about creating
                            intelligent digital experiences.
                        </h3>

                        <p className="mt-8 leading-9 text-slate-300">
                            My journey begain with curiosity for technology and
                            gradually evolved into a deep passion for Artificial
                            Intelligence, Full Stack Development and solving
                            real-world problems through software.
                        </p>

                        <p className="mt-8 leading-9 text-slate-300">
                            Every project I build represents continuous learning,
                            experimentation and a desire to create products that
                            combine beautiful interfaces with intelligent systems.
                        </p>

                        <p className="mt-8 leading-9 text-slate-300">
                            Today, I focus on developing scalable AI-powered web
                            applications while constantly exploring emerging
                            technologies in Computer Vision and Machine Learning.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-4">

                            {[
                                "Problem Solver",
                                "Quick Learner",
                                "Team Player",
                                "AI Enthusiast",
                            ].map((item)=>(
                                <motion.div
                                    whileHover={{
                                        y:-6,
                                        scale:1.05
                                    }}
                                    key={item}
                                    className="
                                        rounded-full
                                        border
                                        border-cyan-400/20
                                        bg-cyan-500/10
                                        px-5
                                        py-3
                                    "
                                >
                                    {item}
                                </motion.div>
                            ))}

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default StorySection;