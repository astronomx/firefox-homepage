"use client";
import React, { useState } from "react";

export default function Cards() {
  const [showProgramming, setShowProgramming] = useState(false);
  const [showWorkingTools, setShowWorkingTools] = useState(false);
  const [showEntertainment, setShowEntertainment] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [port, setPort] = useState("");

  const toggleProgramming = () => setShowProgramming(!showProgramming);
  const toggleWorkingTools = () => setShowWorkingTools(!showWorkingTools);
  const toggleEntertainment = () => setShowEntertainment(!showEntertainment);

  const toggleModal = () => setShowModal(!showModal);

  const handleConfirmPort = () => {
    window.location.href = `http://localhost:${port}`;
    setShowModal(false);
  };

  return (
    <>
      <div className="hidden text-white sm:flex flex-row space-x-12">
        {/* Programming Dropdown */}
        <div className="relative">
          <button
            onClick={toggleProgramming}
            className="card-toggle-button border-b-2 border-white text-2xl font-bold"
          >
            Programming
          </button>
          {showProgramming && (
            <div className="dropdown p-4 absolute left-0 mt-2 text-lg font-bold">
              <ul className="flex flex-col">
                <li>
                  <a href="https://chat.openai.com/">ChatGPT</a>
                </li>
                <li>
                  <a href="https://www.figma.com/">Figma</a>
                </li>
                <li>
                  <a href="https://github.com/">Github</a>
                </li>
                <li>
                  <a onClick={toggleModal}>Localhost</a>
                </li>
                <li>
                  <a href="https://mycolor.space/">ColorSpace</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Working Tools Dropdown */}
        <div className="relative">
          <button
            onClick={toggleWorkingTools}
            className="card-toggle-button border-b-2 border-white text-2xl font-bold"
          >
            Working Tools
          </button>
          {showWorkingTools && (
            <div className="dropdown p-4 absolute left-0 mt-2 text-lg font-bold">
              <ul className="flex flex-col">
                <li>
                  <a href="https://docs.google.com/document/u/0/">
                    Google docs
                  </a>
                </li>
                <li>
                  <a href="https://www.notion.so/Dashboard-cc3917eaae4e4ae0a0591a8d5052a434">
                    Notion
                  </a>
                </li>
                <li>
                  <a href="https://mail.google.com/mail/u/0/#inbox">Gmail</a>
                </li>
                <li>
                  <a href="https://www.photopea.com/">PhotoPea</a>
                </li>
                <li>
                  <a href="https://app.flocus.com/">Flocus</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Entertainment Dropdown */}
        <div className="relative">
          <button
            onClick={toggleEntertainment}
            className="card-toggle-button border-b-2 border-white text-2xl font-bold"
          >
            Entertainment
          </button>
          {showEntertainment && (
            <div className="dropdown p-4 absolute left-0 mt-2 text-xl font-bold">
              <ul className="flex flex-col">
                <li>
                  <a href="https://www.youtube.com/">Youtube</a>
                </li>
                <li>
                  <a href="https://www.disneyplus.com/nl-nl/home">Disney+</a>
                </li>
                <li>
                  <a href="https://www.netflix.com/browse">Netflix</a>
                </li>
                <li>
                  <a href="https://play.hbomax.com/">HBO max</a>
                </li>
                <li>
                  <a href="https://soap2day.rs/home">Soap2Day</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <span
              className="absolute top-0 right-0 text-gray-400 cursor-pointer"
              onClick={toggleModal}
            >
              &times;
            </span>
            <p className="text-lg font-bold mb-4">Enter port number:</p>
            <input
              type="text"
              value={port}
              onChange={(e) => setPort(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mb-4"
            />
            <button
              onClick={handleConfirmPort}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
}
