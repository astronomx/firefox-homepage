import React from "react";
import SearchBar from "./components/SearchBar";
import Clock from "./components/Clock";

export default function Home() {
  return (
    <>
      <div
        className="flex min-h-screen justify-center items-center"
        style={{
          backgroundImage: "url('https://wallpaperaccess.com/full/8351171.gif')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center md: p-4 absolute top-0 mt-36">
          <Clock />
        </div>

        <div>
          <SearchBar />
        </div>
      </div>
    </>
  );
}
