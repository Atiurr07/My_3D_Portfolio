import {
    EffectComposer,
    Bloom,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const BloomEffects = () => {
    return (
        <EffectComposer multisampling={4}>
            <Bloom
                blendFunction={BlendFunction.ADD}
                intensity={0.2}
                luminanceThreshold={0.78}
                luminanceSmoothing={0.2}
                mipmapBlur
            />
        </EffectComposer>
    );
};

export default BloomEffects;
