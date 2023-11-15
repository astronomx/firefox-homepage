import React from "react"

import SearchBar from "./components/SearchBar"

export default function Home() {


  return (
    <>
      <div className="flex justify-center items-center min-h-screen" style={{ backgroundImage: "url('https://wallpaperaccess.com/full/8351171.gif')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        
        <div>
          <div className="flex">
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  )
}

