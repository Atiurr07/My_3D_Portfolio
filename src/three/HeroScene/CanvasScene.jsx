import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import CameraRig from "./CameraRig";
import Lights from "./Lights";
import Environment from "./Environment";
import Particles from "./Particles";
import Loader from "./Loader";

import LaptopModel from "../Models/LaptopModel";
import BrainModel from "../Models/BrainModel";
import PlanetModel from "../Models/PlanetModel";
import OrbitModel from "../Models/OrbitModel";

import FloatingParticles from "../Effects/FloatingParticles";

const CanvasScene = () => {
    return (
        <div className="absolute inset-0">
            <Canvas
                shadows
                dpr={[1, 1.5]}
                camera={{
                    position: [0, 1.6, 8],
                    fov: 40,
                    near: 0.1,
                    far: 100,
                }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                    toneMapping: THREE.ACESFilmicToneMapping,
                    outputColorSpace: THREE.SRGBColorSpace,
                }}
                onCreated={({ gl, scene }) => {
                    gl.setClearColor(0x000000, 0);
                    scene.background = null;
                }}
            >
                <Suspense fallback={<Loader />}>
                    <CameraRig>
                        <Lights />
                        <Environment />
                        <Particles />

                        {/* Keep the real GLB models. */}
                        <LaptopModel />
                        <BrainModel />
                        <PlanetModel />
                        <OrbitModel />

                        <FloatingParticles />
                    </CameraRig>

                    {/* Rotate the view around the real 3D scene.
                        Keep zoom and pan disabled to preserve layout. */}
                    <OrbitControls
                        makeDefault
                        enableRotate
                        enableZoom={false}
                        enablePan={false}
                        enableDamping
                        dampingFactor={0.08}
                        rotateSpeed={0.65}
                        minPolarAngle={Math.PI * 0.2}
                        maxPolarAngle={Math.PI * 0.8}
                        target={[0, 0, 0]}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default CanvasScene;

