const Button = ({ children, onClick, className = "", type = "button" }) => {
    return (
        <button
        type={type}
        onClick={onClick}
        className={`
        rounded-xl
        bg-sky-500
        px-7
        py-3
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        hover:bg-sky-400
        ${className}
        `}
        >
        {children}
        </button>
    );
};

export default Button;
