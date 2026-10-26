import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

import SkillCenter from "./SkillCenter";
import SkillOrbitItem from "./SkillOrbitItem";

const SkillsOrbit = ({ skills = [] }) => {
    const orbitContainerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(640);

    // Measure the actual component instead of relying on window.innerWidth.
    useEffect(() => {
        const container = orbitContainerRef.current;

        if (!container) return;

        const updateWidth = () => {
            setContainerWidth(container.clientWidth);
        };

        updateWidth();

        if (typeof ResizeObserver === "undefined") {
            window.addEventListener("resize", updateWidth);

            return () => {
                window.removeEventListener("resize", updateWidth);
            };
        }

        const observer = new ResizeObserver(updateWidth);
        observer.observe(container);

        return () => observer.disconnect();
    }, []);

    const orbitSkills = useMemo(() => {
        const firstOrbit = [];
        const secondOrbit = [];

        skills.forEach((skill, index) => {
            if (index % 2 === 0) {
                firstOrbit.push(skill);
            } else {
                secondOrbit.push(skill);
            }
        });

        return { firstOrbit, secondOrbit };
    }, [skills]);

    // Scale the orbit radii according to the available component width.
    const isSmallScreen = containerWidth < 640;
    const isMediumScreen = containerWidth < 900;

    const firstRadius = isSmallScreen
        ? 125
        : isMediumScreen
            ? 165
            : 205;

    const secondRadius = isSmallScreen
        ? 85
        : isMediumScreen
            ? 125
            : 160;

    return (
        <div
            ref={orbitContainerRef}
            className="
                relative
                mx-auto
                mt-14
                h-[500px]
                w-full
                max-w-[1050px]
                overflow-hidden
                sm:h-[580px]
                lg:mt-20
                lg:h-[680px]
            "
        >
            {/* Perspective environment */}
            <div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[420px]
                    w-[420px]
                    -translate-x-1/2
                    -translate-y-1/2
                    [perspective:1200px]
                    sm:h-[500px]
                    sm:w-[500px]
                    lg:h-[590px]
                    lg:w-[590px]
                "
            >
                {/* Horizontal orbital plane */}
                <motion.div
                    animate={{ rotateZ: 360 }}
                    transition={{
                        duration: 42,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[290px]
                        w-[500px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-[50%]
                        border
                        border-cyan-400/20
                        [transform:rotateX(67deg)]
                        sm:h-[340px]
                        sm:w-[590px]
                    "
                />

                {/* Second orbital plane */}
                <motion.div
                    animate={{ rotateZ: -360 }}
                    transition={{
                        duration: 34,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[240px]
                        w-[440px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-[50%]
                        border
                        border-violet-400/20
                        [transform:rotateX(67deg)_rotateY(12deg)]
                        sm:h-[290px]
                        sm:w-[520px]
                    "
                />

                {/* Vertical orbital plane */}
                <motion.div
                    animate={{ rotateZ: 360 }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[390px]
                        w-[220px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-[50%]
                        border
                        border-blue-400/15
                        [transform:rotateY(70deg)]
                        sm:h-[480px]
                        sm:w-[270px]
                    "
                />

                {/* Orbit center glow */}
                <motion.div
                    animate={{
                        scale: [0.9, 1.1, 0.9],
                        opacity: [0.25, 0.45, 0.25],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        h-64
                        w-64
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-cyan-500/10
                        blur-[90px]
                        sm:h-80
                        sm:w-80
                    "
                />

                {/* Technology nodes */}
                <div
                    className="
                        absolute
                        inset-0
                        [transform-style:preserve-3d]
                    "
                >
                    {orbitSkills.firstOrbit.map((skill, index) => (
                        <SkillOrbitItem
                            key={`first-${skill.name}`}
                            skill={skill}
                            angle={
                                (360 / Math.max(
                                    1,
                                    orbitSkills.firstOrbit.length
                                )) * index
                            }
                            radius={firstRadius}
                            depth={30 + index * 8}
                            duration={28}
                            index={index}
                        />
                    ))}

                    {orbitSkills.secondOrbit.map((skill, index) => (
                        <SkillOrbitItem
                            key={`second-${skill.name}`}
                            skill={skill}
                            angle={
                                (360 / Math.max(
                                    1,
                                    orbitSkills.secondOrbit.length
                                )) * index + 25
                            }
                            radius={secondRadius}
                            depth={-30 - index * 8}
                            duration={22}
                            reverse
                            index={index}
                        />
                    ))}
                </div>

                {/* Central skill element */}
                <SkillCenter />
            </div>

            {/* Bottom atmospheric shadow */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    bottom-2
                    left-1/2
                    h-20
                    w-[70%]
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-500/10
                    blur-3xl
                "
            />
        </div>
    );
};

export default SkillsOrbit;

