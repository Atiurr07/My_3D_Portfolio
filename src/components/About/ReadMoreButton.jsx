import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ReadMoreButton = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto"
        >
            <Link
                to="/about"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 hover:shadow-[0_14px_45px_rgba(59,130,246,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] sm:w-auto sm:px-7 sm:py-4 sm:text-base"
            >
                Explore My Journey
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
        </motion.div>
    );
};

export default ReadMoreButton;
