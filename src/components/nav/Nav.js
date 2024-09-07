import React from "react";
import './nav.css';

const Nav = () => {
    return (
        <nav className="p-8" id="nav">
            <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-4 items-center">
                <a href={"/"}>Domů</a>
                <a href={"/about#services"}>Služby</a>
                <a href={"/about#contact"}>Kontakt</a>
            </div>
            <div>
                <a href={"/search"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Vyhledat vůz</a>
            </div>
            </div>
        </nav>
        )
}
    
export default Nav;