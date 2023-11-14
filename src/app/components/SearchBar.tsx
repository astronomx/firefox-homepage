'use client'
import React, { useState } from 'react';

export default function SearchBar() {

    const [search, setSearch] = useState<string>("")

    return (    
        <>
            <input type="text" className="text-black" onChange={(e) => { setSearch(e.target.value) }} />
            <a href={`https://www.google.com/search?q=${search.split(" ").join("+")}`} target="_blank" rel="noreferrer">
                <button>Search</button>
            </a>
        </>
    )
}