import { useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-gray-400"
            >
                Analysis ▾
            </button>
            {isOpen && (
                <div className="absolute bg-white text-black shadow-md rounded mt-2 w-40">
                    <Link to="/person-a" className="block px-4 py-2 hover:bg-gray-200">Person A</Link>
                    <Link to="/person-b" className="block px-4 py-2 hover:bg-gray-200">Person B</Link>
                    <Link to="/person-c" className="block px-4 py-2 hover:bg-gray-200">Person C</Link>
                    <Link to="/person-d" className="block px-4 py-2 hover:bg-gray-200">Person D</Link>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
