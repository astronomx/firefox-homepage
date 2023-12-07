import React from "react";
import SearchBar from "./components/SearchBar";
import Clock from "./components/Clock";
import Cards from "./components/Cards";
import Notes from "./components/Notes";
import Weather from "./components/Weather";

export default function Home() {
  return (
    <>
      <div
        className="flex min-h-screen justify-center items-center relative"
        style={{
          backgroundImage: "url('https://wallpaperaccess.com/full/8351171.gif')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Weather />

        <div className="absolute top-0 right-0 p-10">
          <Notes />
        </div>

        <div className="flex justify-center items-center p-4 absolute top-0 mt-36">
          <Clock />
        </div>

        <div className="flex flex-col space-y-10 justify-center items-center">
          <div>
            <SearchBar />
          </div>

          <div>
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}
