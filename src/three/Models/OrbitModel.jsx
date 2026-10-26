import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const OrbitRing = ({
    radius,
    color,
    speed,
    rotation,
}) => {
    const ringRef = useRef();

    useFrame((_, delta) => {
        if (!ringRef.current) return;

        ringRef.current.rotation.z += speed * delta;
    });

    return (
        <mesh
            ref={ringRef}
            rotation={rotation}
        >
            <torusGeometry
                args={[radius, 0.018, 32, 220]}
            />

            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.7}
                metalness={0.9}
                roughness={0.15}
            />
        </mesh>
    );
};

const OrbitModel = () => {
    const groupRef = useRef();

    const { viewport } = useThree();

    const scale = useMemo(() => {
        if (viewport.width < 4.5) return 0.58;
        if (viewport.width < 7) return 0.66;
        if (viewport.width < 10) return 0.72;
        return 0.78;
    }, [viewport.width]);

    const position = useMemo(() => {
        if (viewport.width < 4.5) return [0, 0.1, 0];
        if (viewport.width < 7) return [0, 0.2, 0];
        return [0, 0.3, 0];
    }, [viewport.width]);

    useFrame(({ clock, mouse }, delta) => {
        if (!groupRef.current) return;

        const t = clock.getElapsedTime();

        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y,
            mouse.x * 0.18,
            delta * 2
        );

        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            -mouse.y * 0.08,
            delta * 2
        );

        groupRef.current.position.y =
            position[1] + Math.sin(t * 0.9) * 0.05;
    });

    return (
        <group
            ref={groupRef}
            position={position}
            scale={scale}
        >
            <OrbitRing
                radius={1.7}
                color="#22d3ee"
                speed={0.22}
                rotation={[Math.PI / 2, 0, 0]}
            />

            <OrbitRing
                radius={2.2}
                color="#3b82f6"
                speed={-0.18}
                rotation={[0, Math.PI / 3, Math.PI / 5]}
            />

            <OrbitRing
                radius={2.7}
                color="#8b5cf6"
                speed={0.12}
                rotation={[Math.PI / 5, Math.PI / 6, 0]}
            />
        </group>
    );
};

export default OrbitModel;
