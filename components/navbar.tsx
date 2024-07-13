'use client';

import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import Image from 'next/image';

//create navbar with tailwind style
export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log("toggle menu");
        
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="">
            <div className="sm:container mx-auto py-3">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-bold text-gray-800 flex items-center space-x-3">
                            <Image width={500} height={500} src="/profile.jpg" alt="avatar" className="rounded-full w-10 h-10" />
                            <a href="#">muhamadiqbalriv.</a>
                        </div>
                        <div className="flex md:hidden">
                            <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu"
                            onClick={toggleMenu}>
                                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z" />
                                </svg>
                            </button>
                            <ModeToggle />
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-10">
                        <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
                        <a href="#experience" className="text-gray-800 hover:text-gray-600">Experience</a>
                        <a href="#education" className="text-gray-800 hover:text-gray-600">Education</a>
                        <a href="#footer" className="text-gray-800 hover:text-gray-600">Contact</a>
                        <ModeToggle />
                    </div>
                </div>
            </div>
            <div
                className={`md:hidden transition-all ease-in-out ${
                    isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="block text-gray-800 hover:text-gray-600">Home</a>
                    <a href="#experience" className="block text-gray-800 hover:text-gray-600">Experience</a>
                    <a href="#education" className="block text-gray-800 hover:text-gray-600">Education</a>
                    <a href="#footer" className="block text-gray-800 hover:text-gray-600">Contact</a>
                </div>
            </div>
        </nav>
    );
};