const MainLayout = ({ children }) => {
    return (
        <main className="min-h-[calc(100vh-6rem)] bg-[#050816] text-white overflow-hidden">
        {children}
        </main>
    );
};

export default MainLayout;
