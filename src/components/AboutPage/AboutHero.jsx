import { motion } from "framer-motion";
import PageBackground from "./PageBackground";

// Import the image from src/assets so Vite can resolve it correctly.
import profileImage from "../../assets/images/profile.jpg";

const skills = [
  "Python",
  "Django",
  "React",
  "Machine Learning",
  "Computer Vision",
  "REST API",
];

const AboutHero = () => {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
      "
    >
      <PageBackground />

      {/* Main page container */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-6rem)]
          w-full
          max-w-7xl
          items-center
          px-6
          py-16
          sm:px-8
          sm:py-20
          lg:px-10
          lg:py-24
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-14
            lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]
            lg:gap-20
            xl:gap-24
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              min-w-0
              w-full
              max-w-3xl
              lg:max-w-none
            "
          >
            {/* Section label */}
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-cyan-400/25
                bg-cyan-400/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                text-cyan-300
                backdrop-blur-xl
                sm:px-5
                sm:py-2.5
                sm:text-sm
              "
            >
              Who I Am
            </div>

            {/* Main heading */}
            <h1
              className="
                mt-7
                max-w-3xl
                text-4xl
                font-black
                leading-[1.08]
                tracking-tight
                text-white
                sm:mt-8
                sm:text-5xl
                md:text-6xl
                lg:text-[4.25rem]
                xl:text-[4.75rem]
              "
            >
              Building{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  via-white
                  to-violet-400
                  bg-clip-text
                  text-transparent
                "
              >
                Intelligent Software
              </span>
            </h1>

            {/* Decorative divider */}
            <div
              className="
                mt-7
                h-px
                w-24
                bg-gradient-to-r
                from-cyan-400
                to-transparent
                sm:mt-8
              "
            />

            {/* =====================================================
                DESCRIPTION
            ====================================================== */}

            <div
              className="
                mt-7
                w-full
                max-w-3xl
                space-y-5
                text-justify
                text-base
                leading-7
                text-slate-300
                sm:mt-8
                sm:text-lg
                sm:leading-8
              "
            >
              <p>
                I'm Atiurr Rahman — a Python Full-Stack Engineer and currently
                working as a CDA System Administrator at Efftronics Systems
                Pvt. Ltd., where I work with railway signalling and CDA
                systems and gain hands-on experience in real-world system
                monitoring, troubleshooting, networking, configuration,
                testing, and technical support.
              </p>

              <p>
                My professional journey has given me an opportunity to work
                across both software development and system-level environments,
                helping me understand not only how applications are built, but
                also how they operate and perform in real-world scenarios.
              </p>

              <p>
                On the development side, my primary focus is Python, Django,
                Django REST Framework, REST APIs, and React.js. I enjoy
                designing and developing complete applications involving secure
                authentication, role-based workflows, database operations,
                backend services, and modern user interfaces. I have also
                worked on projects such as a Fleet Management System and a
                Role-Based AI Campus Management System, where I applied these
                technologies to build practical software solutions.
              </p>

              <p>
                Alongside full-stack development, I have hands-on exposure to
                AI/ML, including data processing, image processing, image
                classification, and machine-learning workflows using NumPy,
                Pandas, Matplotlib, and Scikit-learn. This has developed my
                interest in combining artificial intelligence with software
                engineering to create intelligent and practical solutions.
              </p>

              <p>
                I consider myself a continuous learner and a problem solver
                who enjoys understanding how things work, identifying why they
                fail, and finding better ways to solve them. Whether I'm
                developing an API, debugging an application, analyzing a
                system issue, working with data, or exploring an AI-based
                solution, I approach every challenge with curiosity and a
                willingness to learn.
              </p>

              <p>
                My goal is to continue growing as a versatile software engineer
                while contributing to challenging projects across software
                development, backend engineering, AI/ML, testing, and
                real-world technical problem-solving.
              </p>
            </div>

            {/* =====================================================
                TECHNOLOGY TAGS
            ====================================================== */}

            <div
              className="
                mt-9
                flex
                w-full
                max-w-3xl
                flex-wrap
                gap-3
                sm:mt-10
                sm:gap-3.5
              "
            >
              {skills.map((item) => (
                <span
                  key={item}
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.045]
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-slate-300
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/10
                    hover:text-cyan-200
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT PROFILE
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="
              relative
              flex
              w-full
              items-center
              justify-center
              lg:justify-end
            "
          >
            {/* Ambient glow behind profile */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[70%]
                w-[70%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-500/10
                blur-[100px]
              "
            />

            {/* Profile card */}
            <div
              className="
                relative
                z-10
                w-full
                max-w-md
                rounded-[2rem]
                border
                border-cyan-400/20
                bg-white/[0.045]
                p-3
                shadow-2xl
                backdrop-blur-2xl
                sm:p-4
                lg:max-w-[430px]
              "
            >
              {/* Image */}
              <div
                className="
                  relative
                  aspect-[4/5]
                  w-full
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-white/10
                  bg-slate-950/40
                "
              >
                <motion.img
                  animate={{
                    y: [-8, 8, -8],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={profileImage}
                  alt="Atiurr Rahman"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                  "
                />

                {/* Image gradient */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/50
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              {/* Bottom glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-8
                  left-1/2
                  h-24
                  w-3/4
                  -translate-x-1/2
                  rounded-full
                  bg-cyan-500/20
                  blur-[70px]
                "
              />

              {/* Availability badge */}
              <div
                className="
                  absolute
                  -bottom-5
                  left-1/2
                  z-20
                  flex
                  -translate-x-1/2
                  items-center
                  gap-2
                  whitespace-nowrap
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-slate-950/90
                  px-4
                  py-2.5
                  text-xs
                  font-medium
                  text-slate-200
                  shadow-xl
                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_10px_rgba(52,211,153,0.8)]
                  "
                />

                Available for Opportunities
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
