import { useEffect, useState } from "react";

const useMouseParallax = (strength = 30) => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;

            setPosition({
                x: x * strength,
                y: y * strength,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [strength]);

    return position;
};

export default useMouseParallax;