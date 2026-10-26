import AboutHero from "../components/AboutPage/AboutHero";
import StorySection from "../components/AboutPage/StorySection";
import EducationTimeline from "../components/AboutPage/EducationTimeline";
import SkillsOverview from "../components/AboutPage/SkillsOverview";
import ExperienceTimeline from "../components/AboutPage/ExperienceTimeline";
import ProjectsPreview from "../components/AboutPage/ProjectsPreview";
import AIResearch from "../components/AboutPage/AIResearch";
import Certificates from "../components/AboutPage/Certificates";
import Achievements from "../components/AboutPage/Achievements";
import ResumeSection from "../components/AboutPage/ResumeSection";
import ContactCTA from "../components/AboutPage/ContactCTA";

const AboutPage = () => {
    return (
        <main
            className="
                relative
                min-h-screen
                about-page-shell
                overflow-x-hidden
                bg-[#050816]
                text-white
            "
        >
            <AboutHero />

            <StorySection />

            <EducationTimeline />

            <SkillsOverview />

            <ExperienceTimeline />

            <ProjectsPreview />

            <AIResearch />

            <Certificates />

            <Achievements />

            <ResumeSection />

            <ContactCTA />
        </main>
    );
};

export default AboutPage;