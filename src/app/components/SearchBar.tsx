'use client'
import React, { useState, useEffect } from 'react';

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {

    const [search, setSearch] = useState<string>("")

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            window.location.href = `https://www.google.com/search?q=${search.split(" ").join("+")}`;
        }
    }

    useEffect(() => {
        const inputElement = document.getElementById("myInput");
        const keydownHandler = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault();
                if (inputElement) {
                    inputElement.focus();
                }
            }
        }
        
        if (inputElement) {
            inputElement.focus();
        }

        window.addEventListener('keydown', keydownHandler);
        return () => {
            window.removeEventListener('keydown', keydownHandler);
        };
    }, []);

    return (    
        <>
            <div className="flex items-center space-x-2">
                <input id="myInput" type="text" className="text-white font-bold text-lg bg-[#8300C4] w-[60vw] h-10 p-2 rounded-lg shadow-lg focus:outline-none md:w-[30vw] h-10" placeholder="Search..." onChange={(e) => { setSearch(e.target.value) }} onKeyDown={handleKeyPress} />
                <a href={`https://www.google.com/search?q=${search.split(" ").join("+")}`} target="_blank" rel="noreferrer">
                    <button className="hidden md:flex bg-[#00CED1] p-2 rounded-lg shadow-lg"><MagnifyingGlassIcon className="h-6 w-6 text-white" /></button>
                </a>
            </div>
        </>
    )
}