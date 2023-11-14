'use client'
import React, { useState } from 'react';

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {

    const [search, setSearch] = useState<string>("")

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            window.location.href = `https://www.google.com/search?q=${search.split(" ").join("+")}`;
        }
    }

    return (    
        <>
            <div className="flex items-center space-x-2">
                <input type="text" className="text-white bg-[#8300C4] w-[30vw] h-10 p-2 rounded-lg shadow-lg focus:outline-none" placeholder="Search..." onChange={(e) => { setSearch(e.target.value) }} onKeyDown={handleKeyPress} />
                <a href={`https://www.google.com/search?q=${search.split(" ").join("+")}`} target="_blank" rel="noreferrer">
                    <button className="bg-[#00CED1] p-2 rounded-lg shadow-lg"><MagnifyingGlassIcon className="h-6 w-6 text-white" /></button>
                </a>
            </div>
        </>
    )
}