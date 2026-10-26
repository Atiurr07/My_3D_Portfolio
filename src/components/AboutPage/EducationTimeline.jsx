import { motion } from "framer-motion";
import {
    GraduationCap,
    School,
    BookOpen,
} from "lucide-react";

const education = [
    {
        icon: School,
        year: "2019 - 2020",
        title: "Higher Secondary",
        place: "BSEB, Patna",
        score: "85.2%",
    },
    {
        icon: BookOpen,
        year: "2020 - 2022",
        title: "Intermediate",
        place: "TARKESWAR PRASHAD VERMA COLLEGE, NARKATIAGANJ, WEST CHAMPARAN, BIHAR",
        score: "80.6%",
    },
    {
        icon: GraduationCap,
        year: "2022 - 2026",
        title: "B.Tech Computer Science",
        place: "Gandhi Institute for Education and Technology, khorda, Bhubaneswar",
        score: "87.8%",
    },
];

const EducationTimeline = () => {
    return (
        <section className="relative py-28">

            <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

                <motion.div
                    initial={{opacity:0,y:40}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:false}}
                >
                    <p className="uppercase tracking-[4px] text-cyan-400 font-semibold">
                        EDUCATION
                    </p>

                    <h2 className="mt-4 text-5xl font-black">
                        Academic Journey
                    </h2>
                </motion.div>

                <div className="relative mt-16 lg:mt-20">

                    <div className="absolute left-0 right-0 top-24 h-[2px] bg-gradient-to-r from-cyan-400 via-violet-500 to-cyan-400 hidden lg:block"/>

                    <div className="grid gap-10 lg:grid-cols-3">

                        {education.map((item,index)=>{

                            const Icon=item.icon;

                            return(

                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity:0,
                                        y:80
                                    }}
                                    whileInView={{
                                        opacity:1,
                                        y:0
                                    }}
                                    viewport={{
                                        once:false
                                    }}
                                    transition={{
                                        delay:index*.2
                                    }}
                                    whileHover={{
                                        y:-12
                                    }}
                                    className="
                                        relative
                                        flex h-full flex-col rounded-[32px]
                                        border
                                        border-white/10
                                        bg-white/5
                                        p-10
                                        backdrop-blur-xl
                                    "
                                >

                                    <motion.div
                                        animate={{
                                            rotate:[0,360]
                                        }}
                                        transition={{
                                            repeat:Infinity,
                                            duration:14,
                                            ease:"linear"
                                        }}
                                        className="
                                            mb-8
                                            flex
                                            h-20
                                            w-20
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-cyan-400/30
                                            bg-cyan-500/10
                                        "
                                    >
                                        <Icon size={34}/>
                                    </motion.div>

                                    <h5 className="text-cyan-400">
                                        {item.year}
                                    </h5>

                                    <h3 className="mt-3 text-2xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 max-w-sm text-slate-400 leading-7">
                                        {item.place}
                                    </p>

                                    <div className="mt-8 rounded-xl bg-cyan-500/10 px-5 py-4 inline-block">
                                        {item.score}
                                    </div>

                                </motion.div>

                            )

                        })}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default EducationTimeline;