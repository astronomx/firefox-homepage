"use client";
import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("nl-NL", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (time === null) {
    return null;
  }

  return (
    <div>
      <h1 className="text-[5rem] text-white">{time}</h1>
    </div>
  );
}
