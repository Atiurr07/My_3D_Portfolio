import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 150;

const FloatingParticles = () => {
    const pointsRef = useRef();

    const positions = useMemo(() => {
        const array = new Float32Array(PARTICLE_COUNT * 3);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
        const radius = 1 + Math.random() * 2.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;

        array[i * 3] = radius * Math.sin(phi) * Math.cos(theta);

        array[i * 3 + 1] = radius * Math.cos(phi);

        array[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
        }

        return array;
    }, []);

    const speeds = useMemo(() => {
        return Array.from(
        { length: PARTICLE_COUNT },
        () => 0.2 + Math.random() * 0.8,
        );
    }, []);

    useFrame(({ clock }) => {
        if (!pointsRef.current) return;

        const geometry = pointsRef.current.geometry;
        const position = geometry.attributes.position.array;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
        const index = i * 3;

        const x = position[index];
        const z = position[index + 2];

        const angle = clock.getElapsedTime() * speeds[i] * 0.2;

        position[index] = x * Math.cos(angle) - z * Math.sin(angle);

        position[index + 2] = x * Math.sin(angle) + z * Math.cos(angle);

        position[index + 1] += Math.sin(clock.getElapsedTime() + i) * 0.0008;
        }

        geometry.attributes.position.needsUpdate = true;

        pointsRef.current.rotation.y += 0.0015;
    });

    return (
        <points ref={pointsRef} position={[-1.8, 1.1, -0.8]}>
        <bufferGeometry>
            <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
            />
        </bufferGeometry>

        <pointsMaterial
            color="#22d3ee"
            size={0.035}
            transparent
            opacity={0.45}
            sizeAttenuation
            depthWrite={false}
            blending={THREE.AdditiveBlending}
        />
        </points>
    );
};

export default FloatingParticles;
