import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import ExperiencePage from "../pages/ExperiencePage";
import ProjectsPages from "../pages/ProjectsPages";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPages />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;