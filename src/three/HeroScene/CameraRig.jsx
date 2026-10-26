import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CameraRig = ({ children }) => {
    const groupRef = useRef(null);

    useFrame(({ mouse, clock }, delta) => {
        const group = groupRef.current;

        if (!group) return;

        const time = clock.getElapsedTime();
        const smoothing = Math.min(1, delta * 1.8);

        // Subtle pointer parallax without controlling the camera.
        // OrbitControls remains responsible for user-driven camera rotation.
        group.rotation.y = THREE.MathUtils.lerp(
            group.rotation.y,
            mouse.x * 0.035,
            smoothing
        );

        group.rotation.x = THREE.MathUtils.lerp(
            group.rotation.x,
            -mouse.y * 0.018,
            smoothing
        );

        // Gentle vertical floating motion.
        group.position.y = Math.sin(time * 0.45) * 0.025;
    });

    return <group ref={groupRef}>{children}</group>;
};

export default CameraRig;
