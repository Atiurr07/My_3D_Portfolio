import Container from "./Container";

const SectionWrapper = ({ id, children }) => {
    return (
        <section id={id} className="py-32">
        <Container>{children}</Container>
        </section>
    );
};

export default SectionWrapper;
