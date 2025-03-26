import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import PersonA from "./pages/PersonA.jsx";
import PersonB from "./pages/PersonB.jsx";
import Home from "./pages/Home.jsx";

function App() {
    return (
        <Router>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                {/* Page content */}
                <div className="drawer-content flex flex-col">
                    <Navbar />
                    <div className="items-center justify-center p-4">
                        <Routes>
                            <Route path="/wendy" element={<PersonA />} />
                            <Route path="/jessie" element={<PersonB />} />
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </div>
                </div>

                {/* Sidebar Drawer */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-50 p-4">
                        <li><a className="text-xl" href="/africa-conflict/">Home</a></li>
                        <li><a className="text-md" href="/africa-conflict/#/wendy">Wendy</a></li>
                        <li><a className="text-md" href="/africa-conflict/#/jessie">Jessie</a></li>
                    </ul>
                </div>
            </div>
        </Router>
    );
}

export default App;
