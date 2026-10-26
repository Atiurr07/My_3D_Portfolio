import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <div className="relative overflow-x-hidden bg-[#050816] text-white">
            <Navbar />
            <div className="pt-24">
                <AppRoutes />
            </div>

            <Footer />
        </div>
    );
}

export default App;