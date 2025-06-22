"use client";

import React from "react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [helsinkiTime, setHelsinkiTime] = useState(
    new Date().toLocaleTimeString("en-GB", {
      timeZone: "Europe/Helsinki",
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const id = setInterval(() => {
      setHelsinkiTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/Helsinki",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 60000); // update every minute
    return () => clearInterval(id);
  }, []);
  return (
    <p className="text-sm w-max mx-auto md:mx-0 text-stone-400">
      Helsinki{" "}
      <span className="bg-stone-200 text-stone-500 rounded-md px-2 py-1  border border-stone-300">
        {helsinkiTime}
      </span>
    </p>
  );
}
