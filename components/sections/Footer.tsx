import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="w-full flex flex-col justify-center items-center pb-10 pt-20 relative">
      <span className="text-[#4d4038] text-sm mx-auto z-10">
        © {year} Aleksei Filonov. All rights reserved.
      </span>
      <div className="w-full bg-gradient-to-t from-[#1f1913] to-transparent h-[500px] absolute bottom-0"></div>
    </div>
  );
}
