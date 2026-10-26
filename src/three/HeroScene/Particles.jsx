import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 700;

const Particles = () => {
    const pointsRef = useRef();

    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(PARTICLE_COUNT * 3);
        const colors = new Float32Array(PARTICLE_COUNT * 3);

        const palette = [
            new THREE.Color("#38bdf8"), // Sky blue
            new THREE.Color("#60a5fa"), // Blue
            new THREE.Color("#22d3ee"), // Cyan
        ];

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 28;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 28;

            const color = palette[Math.floor(Math.random() * palette.length)];

            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        return { positions, colors };
    }, []);

    useFrame(({ clock }) => {
        if (!pointsRef.current) return;

        const t = clock.getElapsedTime();

        pointsRef.current.rotation.y = t * 0.03;
        pointsRef.current.rotation.x = Math.sin(t * 0.2) * 0.03;
        pointsRef.current.position.y = Math.sin(t * 0.4) * 0.15;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />

                <bufferAttribute
                    attach="attributes-color"
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>

            <pointsMaterial
                vertexColors
                size={0.045}
                sizeAttenuation
                transparent
                opacity={0.58}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

export default Particles;
