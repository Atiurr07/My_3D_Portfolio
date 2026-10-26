import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import laptopModel from "../../assets/models/laptop.glb";

const LaptopModel = () => {
    const groupRef = useRef();

    const { scene } = useGLTF(laptopModel);
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

                // This decorative reflective floor comes with the GLB and
                // creates the large bright patch beneath the laptop.
                if (child.name === "Dark_Cosmic_Ground") {
                    child.visible = false;
                }

                if (child.material) {
                    const materials = Array.isArray(child.material)
                        ? child.material
                        : [child.material];

                    materials.forEach((material) => {
                        material.envMapIntensity = 0.35;

                        // Preserve the GLB's bright wallpaper emission so the display
                        // reads as an illuminated screen in the dark hero scene.
                        if (material.name === "Original_Wallpaper_On_Screen") {
                            material.emissiveIntensity = 1.15;
                        } else if (material.name === "Hologram_Cyan") {
                            material.emissiveIntensity = 0.4;
                        }

                        material.needsUpdate = true;
                    });
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
       Responsive Position
    ----------------------------------- */

    const position = useMemo(() => {
        if (viewport.width < 4.5) return [0, -1.05, 0];
        if (viewport.width < 7) return [0, -1.8, 0];
        if (viewport.width < 10) return [0.1, -0.95, 0];
        return [0.15, -0.9, 0];
    }, [viewport.width]);

    useFrame(({ mouse }, delta) => {
        if (!groupRef.current) return;

        const t = clock.getElapsedTime();

        /* Mouse Rotation */

        const targetY = mouse.x * 0.22;
        const targetX = -mouse.y * 0.08;

        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y,
            -0.55 + targetY,
            delta * 2.5
        );

        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            0.1 + targetX,
            delta * 2.5
        );

        /* Floating Motion */

        groupRef.current.position.y =
            position[1] + Math.sin(t * 1.3) * 0.05;

        /* Tiny Idle Roll */

        groupRef.current.rotation.z =
            Math.sin(t * 0.7) * 0.015;
    });

    return (
        <Float
            speed={1.8}
            rotationIntensity={0.12}
            floatIntensity={0.45}
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

useGLTF.preload(laptopModel);

export default LaptopModel;
