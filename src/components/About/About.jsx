import AboutContent from "./AboutContent";
import AboutVisual from "./AboutVisual";
import AboutBackground from "./AboutBackground";
import GlowEffects from "./GlowEffects";
import FloatingParticles from "./FloatingParticles";

const About = () => {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="about-section-shell relative isolate overflow-hidden bg-[#050816] py-20 sm:py-24 lg:py-28 xl:py-32"
        >
            <AboutBackground />
            <GlowEffects />
            <FloatingParticles />

            <div className="relative z-10 mx-auto grid w-full max-w-[1450px] items-center gap-14 px-5 sm:px-8 md:gap-16 lg:grid-cols-[minmax(0,1.06fr)_minmax(360px,0.94fr)] lg:gap-14 lg:px-12 xl:gap-20 2xl:px-16">
                <AboutContent />
                <AboutVisual />
            </div>

            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
            />
        </section>
    );
};

export default About;
