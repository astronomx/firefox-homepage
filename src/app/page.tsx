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
        className="flex flex-col min-h-screen items-center"
        style={{
          backgroundImage: "url('https://wallpaperaccess.com/full/8351171.gif')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >

        <div className="flex justify-end w-full mt-5 mr-5">
          <Notes />
        </div>

        <div className="flex flex-col space-y-10 justify-center items-center">

          <div>
            <Clock />
          </div>

          <div>
            <SearchBar />
          </div>

          <div>
            <Weather />
          </div>

          <div>
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}
