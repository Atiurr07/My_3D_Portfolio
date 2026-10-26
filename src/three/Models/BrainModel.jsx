import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import brainModel from "../../assets/models/brain.glb";

const BrainModel = () => {
    const groupRef = useRef();

    const { scene } = useGLTF(brainModel);
    const { viewport, clock } = useThree();

    const model = useMemo(() => scene.clone(true), [scene]);

    /* ----------------------------------
       Optimize Meshes
    ----------------------------------- */

    useMemo(() => {
        model.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;

                if (child.material) {
                    // child.material.envMapIntensity = 1.6;
                    child.material.envMapIntensity = 0.8;
                    child.material.needsUpdate = true;
                }
            }
        });
    }, [model]);

    /* ----------------------------------
       Responsive Scale
    ----------------------------------- */

    const scale = useMemo(() => {
        if (viewport.width < 4.5) return 0.38;
        if (viewport.width < 7) return 0.48;
        if (viewport.width < 10) return 0.58;
        return 0.68;
    }, [viewport.width]);

    /* ----------------------------------
       Responsive Position
    ----------------------------------- */

    const position = useMemo(() => {
        if (viewport.width < 4.5) return [-1.15, 0.95, -0.5];
        if (viewport.width < 7) return [-1.7, 1.1, -0.7];
        if (viewport.width < 10) return [-2.3, 1.2, -0.85];
        return [-2.55, 1.3, -1];
    }, [viewport.width]);

    useFrame(({ mouse }, delta) => {
        if (!groupRef.current) return;

        const t = clock.getElapsedTime();

        /* ----------------------------------
           Idle Rotation
        ----------------------------------- */

        groupRef.current.rotation.y += delta * 0.28;

        /* ----------------------------------
           Mouse Parallax
        ----------------------------------- */

        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            mouse.y * 0.08,
            delta * 2.5
        );

        groupRef.current.rotation.z = THREE.MathUtils.lerp(
            groupRef.current.rotation.z,
            mouse.x * 0.05,
            delta * 2.5
        );

        /* ----------------------------------
           Floating Motion
        ----------------------------------- */

        groupRef.current.position.y =
            position[1] + Math.sin(t * 1.4) * 0.07;

        groupRef.current.position.x =
            position[0] + Math.cos(t * 0.8) * 0.03;
    });

    return (
        <Float
            speed={2}
            rotationIntensity={0.15}
            floatIntensity={0.5}
        >
            <group
                ref={groupRef}
                position={position}
                scale={scale}
            >
                <primitive object={model} />
            </group>
        </Float>
    );
};

useGLTF.preload(brainModel);

export default BrainModel;
