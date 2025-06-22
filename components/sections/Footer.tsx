import React from "react";
import TimeInHelsinki from "../ui/TimeInHelsinki";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center pb-10 pt-20 relative">
      <TimeInHelsinki />
      <p className="text-stone-400 text-sm mx-auto z-10">
        © {year} Aleksei Filonov. All rights reserved.
      </p>
    </div>
  );
}
