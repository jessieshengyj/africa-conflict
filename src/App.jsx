import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import PersonA from "./pages/PersonA.jsx";
import PersonB from "./pages/PersonB.jsx";
import PersonC from "./pages/PersonC.jsx";
import Home from "./pages/Home.jsx";
import PersonD from "./pages/PersonD.jsx";

function App() {
    return (
        <Router>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                {/* Page content */}
                <div className="drawer-content flex flex-col min-h-screen">
                    <Navbar />
                    <div className="items-center justify-center py-4 px-8 h-full">
                        <Routes>
                            <Route path="/wendy" element={<PersonA />} />
                            <Route path="/jessie" element={<PersonB />} />
                            <Route path="/rowan" element={<PersonC />} />
                            <Route path="/yao" element={<PersonD />} />
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </div>
                </div>

                {/* Sidebar Drawer */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-50 p-4 gap-6">
                        <li><a className="text-xl" href="/africa-conflict/">Home</a></li>
                        <div>
                            <li><a className="text-md" href="/africa-conflict/#/wendy">Wendy</a></li>
                            <li><a className="text-md" href="/africa-conflict/#/jessie">Jessie</a></li>
                            <li><a className="text-md" href="/africa-conflict/#/rowan">Rowan</a></li>
                            <li><a className="text-md" href="/africa-conflict/#/yao">Junyao</a></li>
                        </div>
                    </ul>
                </div>
            </div>
        </Router>
    );
}

export default App;
