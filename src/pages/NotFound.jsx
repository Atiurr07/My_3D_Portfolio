import MainLayout from "../layouts/MainLayout";

const NotFound = () => {
    return (
        <MainLayout>
        <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center">
            <h1 className="text-8xl font-bold text-sky-400">
            404
            </h1>

            <p className="mt-5 text-xl text-slate-400">
            Page Not Found
            </p>
        </div>
        </MainLayout>
    );
};

export default NotFound;
