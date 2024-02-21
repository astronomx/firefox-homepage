import React from "react";
import SearchBar from "./components/SearchBar";
import Clock from "./components/Clock";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col min-h-screen items-center"
        style={{
          backgroundImage:
            "url('images/fluid-background.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col space-y-10 justify-center items-center mt-32">
          <div>
            <Clock />
          </div>

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
