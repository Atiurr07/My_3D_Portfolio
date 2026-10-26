
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    Send,
    MessageCircle,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import ContactBackground from "./ContactBackground";

const CONTACT_EMAIL = "rahmantiurr4@gmail.com";

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/Atiurr07",
        Icon: FaGithub,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/atiurr-rahman07/",
        Icon: FaLinkedin,
    },
];

const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [notice, setNotice] = useState("");
    const reduceMotion = useReducedMotion();

    const updateField = (event) => {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));

        if (notice) setNotice("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            !CONTACT_EMAIL ||
            CONTACT_EMAIL === "YOUR_EMAIL@example.com"
        ) {
            setNotice(
                "Please configure CONTACT_EMAIL in Contact.jsx before using the form."
            );
            return;
        }

        const subject =
            form.subject.trim() || `Portfolio enquiry from ${form.name.trim()}`;

        const body = [
            `Name: ${form.name.trim()}`,
            `Reply email: ${form.email.trim()}`,
            "",
            form.message.trim(),
        ].join("\n");

        const mailtoUrl =
            `mailto:${CONTACT_EMAIL}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
        setNotice(
            "Your email application should open with the message prefilled. Review and send it there."
        );
    };

    const inputClasses =
        "w-full rounded-xl border border-white/10 bg-[#060a18]/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10";

    return (
        <section
            id="contact"
            className="relative isolate overflow-hidden bg-[#050816] py-24 text-white sm:py-28 lg:py-32"
        >
            <ContactBackground />

            <div className="relative z-10 mx-auto w-full max-w-[1250px] px-5 sm:px-8 lg:px-12">
                <motion.header
                    initial={
                        reduceMotion ? false : { opacity: 0, y: 22 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300 sm:text-xs">
                        <MessageCircle size={14} />
                        Let's Connect
                    </span>

                    <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                        Have an Idea?{" "}
                        <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-400 bg-clip-text text-transparent">
                            Let's Talk.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                        Looking for a developer, have a project idea, or
                        want to discuss an opportunity? Send me a message.
                        I'd be happy to connect.
                    </p>
                </motion.header>

                <div className="mt-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
                    {/* Contact information */}
                    <motion.aside
                        initial={
                            reduceMotion ? false : { opacity: 0, x: -20 }
                        }
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6 }}
                        className="min-w-0"
                    >
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

                            <div className="relative">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] text-cyan-300">
                                    <Mail size={25} strokeWidth={1.5} />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold">
                                    Let's start a conversation
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-400">
                                    Whether it's a job opportunity,
                                    collaboration, or a technical discussion,
                                    feel free to reach out.
                                </p>

                                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Email me directly
                                </p>

                                <a
                                    href={
                                        CONTACT_EMAIL ===
                                        "YOUR_EMAIL@example.com"
                                            ? undefined
                                            : `mailto:${CONTACT_EMAIL}`
                                    }
                                    onClick={(event) => {
                                        if (
                                            CONTACT_EMAIL ===
                                            "YOUR_EMAIL@example.com"
                                        ) {
                                            event.preventDefault();
                                            setNotice(
                                                "Replace YOUR_EMAIL@example.com with your actual email address in Contact.jsx."
                                            );
                                        }
                                    }}
                                    className="mt-2 inline-flex max-w-full items-center gap-2 break-all text-sm font-semibold text-cyan-300 transition-colors hover:text-white"
                                >
                                    {CONTACT_EMAIL ===
                                    "YOUR_EMAIL@example.com"
                                        ? "Set your email address"
                                        : CONTACT_EMAIL}
                                    <ArrowUpRight
                                        size={15}
                                        className="shrink-0"
                                    />
                                </a>

                                <div className="my-7 h-px bg-white/[0.08]" />

                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Find me online
                                </p>

                                <div className="mt-4 flex flex-wrap gap-3">
                                    {socialLinks.map(
                                        ({ label, href, Icon }) => (
                                            <a
                                                key={label}
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Visit my ${label} profile`}
                                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-300 transition-all hover:border-cyan-300/30 hover:text-cyan-300"
                                            >
                                                <Icon size={17} />
                                                {label}
                                                <ArrowUpRight size={13} />
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.035] p-4">
                            <div className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.5)]" />
                            <p className="text-xs leading-6 text-slate-400">
                                Open to meaningful projects, learning
                                opportunities, and professional connections.
                            </p>
                        </div>
                    </motion.aside>

                    {/* Contact form */}
                    <motion.div
                        initial={
                            reduceMotion ? false : { opacity: 0, x: 20 }
                        }
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                        className="min-w-0 rounded-3xl border border-white/10 bg-[#080d20]/90 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)] sm:p-8"
                    >
                        <h3 className="text-xl font-bold">
                            Send a message
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Fill in the details below to prepare an email.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-7 space-y-5"
                        >
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div className="min-w-0">
                                    <label
                                        htmlFor="contact-name"
                                        className="mb-2 block text-xs font-semibold text-slate-300"
                                    >
                                        Your name
                                    </label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        maxLength={100}
                                        value={form.name}
                                        onChange={updateField}
                                        placeholder="Enter your name"
                                        className={inputClasses}
                                    />
                                </div>

                                <div className="min-w-0">
                                    <label
                                        htmlFor="contact-email"
                                        className="mb-2 block text-xs font-semibold text-slate-300"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        maxLength={254}
                                        value={form.email}
                                        onChange={updateField}
                                        placeholder="you@example.com"
                                        className={inputClasses}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-subject"
                                    className="mb-2 block text-xs font-semibold text-slate-300"
                                >
                                    Subject
                                </label>
                                <input
                                    id="contact-subject"
                                    name="subject"
                                    type="text"
                                    maxLength={150}
                                    value={form.subject}
                                    onChange={updateField}
                                    placeholder="What would you like to discuss?"
                                    className={inputClasses}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="mb-2 block text-xs font-semibold text-slate-300"
                                >
                                    Your message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    required
                                    minLength={10}
                                    maxLength={5000}
                                    rows={5}
                                    value={form.message}
                                    onChange={updateField}
                                    placeholder="Tell me a little about your idea..."
                                    className={`${inputClasses} resize-y`}
                                />
                            </div>

                            {notice && (
                                <p
                                    role="status"
                                    aria-live="polite"
                                    className="rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] p-3 text-xs leading-6 text-cyan-200"
                                >
                                    {notice}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-5 py-4 text-sm font-bold text-slate-950 shadow-[0_8px_30px_rgba(34,211,238,0.12)] transition-all hover:shadow-[0_8px_35px_rgba(34,211,238,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080d20]"
                            >
                                <Send size={16} />
                                Prepare Email
                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </button>

                            <p className="text-center text-[11px] leading-5 text-slate-500">
                                This opens your email application. Your
                                message is not submitted to a server.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            />
        </section>
    );
};

export default Contact;
