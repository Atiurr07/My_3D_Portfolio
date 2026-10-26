import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import planetModel from "../../assets/models/planet.glb";

const PlanetModel = () => {
    const groupRef = useRef();

    const { scene } = useGLTF(planetModel);
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
                    // child.material.envMapIntensity = 1.5;
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
        if (viewport.width < 7) return 0.5;
        if (viewport.width < 10) return 0.56;
        return 0.62;
    }, [viewport.width]);

    /* ----------------------------------
       Base Position
    ----------------------------------- */

    const basePosition = useMemo(() => {
        if (viewport.width < 4.5) return [1.8, 1.3, -3];
        if (viewport.width < 7) return [2.7, 1.45, -3.6];
        if (viewport.width < 10) return [3, 1.6, -4.1];
        return [3.3, 1.75, -4.6];
    }, [viewport.width]);

    useFrame(({ mouse }, delta) => {
        if (!groupRef.current) return;

        const t = clock.getElapsedTime();

        /* -------------------------------
           Position
        -------------------------------- */

        groupRef.current.position.x = THREE.MathUtils.lerp(
            groupRef.current.position.x,
            basePosition[0] + mouse.x * 0.25,
            delta * 2
        );

        groupRef.current.position.y =
            basePosition[1] + Math.sin(t * 0.5) * 0.12;

        groupRef.current.position.z = basePosition[2];

        /* -------------------------------
           Rotation
        -------------------------------- */

        groupRef.current.rotation.y += delta * 0.18;

        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            mouse.y * 0.05,
            delta * 2
        );

        groupRef.current.rotation.z = THREE.MathUtils.lerp(
            groupRef.current.rotation.z,
            -mouse.x * 0.03,
            delta * 2
        );
    });

    return (
        <Float
            speed={1.4}
            floatIntensity={0.35}
            rotationIntensity={0.08}
        >
            <group
                ref={groupRef}
                position={basePosition}
                scale={scale}
            >
                <primitive object={model} />
            </group>
        </Float>
    );
};

useGLTF.preload(planetModel);

export default PlanetModel;
