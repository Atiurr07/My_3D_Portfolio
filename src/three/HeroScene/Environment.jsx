import { Environment as DreiEnvironment } from "@react-three/drei";

const Environment = () => {
    return (
        <>
            {/* ======================================
                HDR Environment
            ====================================== */}

            <DreiEnvironment
                preset="studio"
                background={false}
                blur={0.7}
                environmentIntensity={0.4}
            />

            {/* ======================================
                Scene Fog
            ====================================== */}

            <fog
                attach="fog"
                args={[
                    "#050816",
                    8,
                    28,
                ]}
            />

            {/* ======================================
                Ground Shadow Receiver
            ====================================== */}

            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -2.4, 0]}
                receiveShadow
                visible={false}
            >
                <planeGeometry args={[100, 100]} />

                <shadowMaterial
                    transparent
                    opacity={0.22}
                />
            </mesh>
        </>
    );
};

export default Environment;
