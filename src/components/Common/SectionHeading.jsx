const SectionHeading = ({ title, subtitle }) => {
    return (
        <div className="mb-20">
        <p className="text-sky-400 uppercase tracking-[8px]">{subtitle}</p>

        <h2 className="mt-3 text-5xl font-bold">{title}</h2>
        </div>
    );
    };

export default SectionHeading;
