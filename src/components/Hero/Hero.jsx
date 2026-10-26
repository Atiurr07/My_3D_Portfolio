import HeroContent from "./HeroContent";
import HeroRight from "./HeroRight";

const Hero = () => {
    return (
        <section
            id="home"
            className="
                relative
                hero-section-shell
                isolate
                min-h-[calc(100vh-6rem)]
                overflow-hidden
                bg-[#050816]
                lg:h-[calc(100svh-6rem)]
                lg:min-h-0
            "
        >
            {/* Background Glow */}

            <div
                className="
                    absolute
                    inset-0
                    -z-10
                    bg-[radial-gradient(circle_at_top_right,#2563eb20,transparent_35%),radial-gradient(circle_at_bottom_left,#7c3aed20,transparent_40%)]
                "
            />

            {/* Blur Layer */}

            <div
                className="
                    absolute
                    inset-0
                    -z-10
                    backdrop-blur-[2px]
                "
            />

            {/* Hero Container */}

            <div
                className="
                relative
                mx-auto
                grid
                min-h-[calc(100svh-6rem)]
                max-w-[1400px]
                grid-cols-1
                items-center
                gap-10
                px-6
                py-12
                sm:px-8
                sm:py-14
                lg:px-12
                lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]
                lg:gap-8
                lg:h-full
                lg:min-h-0
                lg:py-6
                "
            >
                {/* Left */}

                <div
                    className="
                        order-1
                        flex
                        items-center
                        min-w-0
                    "
                >
                    <HeroContent />
                </div>

                {/* Right */}

                <div
                    className="
                        order-2
                        flex
                        justify-center
                        items-center
                        min-w-0
                        w-full
                    "
                >
                    <HeroRight />
                </div>
            </div>
        </section>
    );
};

export default Hero;
