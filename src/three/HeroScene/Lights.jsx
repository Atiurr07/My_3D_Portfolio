const Lights = () => {
    return (
        <>
            {/* Soft base illumination */}
            <ambientLight
                intensity={0.16}
                color="#dbeafe"
            />

            <hemisphereLight
                skyColor="#b9e6ff"
                groundColor="#10172b"
                intensity={0.2}
            />

            {/* Main light: keeps model details readable */}
            <directionalLight
                position={[5, 6, 7]}
                intensity={0.9}
                color="#ffffff"
            />

            {/* Cyan rim light */}
            <pointLight
                position={[-4, 2, 4]}
                intensity={0.75}
                distance={14}
                decay={2}
                color="#22d3ee"
            />

            {/* Violet fill */}
            <pointLight
                position={[5, 2, -3]}
                intensity={0.55}
                distance={16}
                decay={2}
                color="#8b5cf6"
            />

            {/* Blue lower accent */}
            <pointLight
                position={[0, -2, 4]}
                intensity={0.4}
                distance={12}
                decay={2}
                color="#3b82f6"
            />

            {/* Gentle top highlight */}
            <spotLight
                position={[0, 6, 3]}
                angle={0.5}
                penumbra={1}
                intensity={0.8}
                color="#e0f2fe"
            />
        </>
    );
};

export default Lights;
