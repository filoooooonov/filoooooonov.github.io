import React from "react";
import Image from "next/image";
import joonasImg from "@/public/joonas_photo.jpg";
import quote from "@/public/quote_icon.png";

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-4 px-8 pt-20">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={joonasImg}
            alt="Photo of Joonas Kukkonen"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col">
            <p className="font-medium"> Joonas Kukkonen</p>
            <a
              href="https://kukibit.fi"
              target="_blank"
              className="text-neutral-600"
            >
              Kukibit Oy
            </a>
          </div>
        </div>
        <Image
          src={quote}
          alt="Quote"
          width={30}
          height={30}
          className="opacity-80"
        />
      </div>
      <div>
        <p className="">
          Highly recommend Aleksei to create a website for your needs. It's a
          pleasure to have a project with him, since all the communication is
          seamless and has “the feeling of progress and success”. Handcoded
          websites are really fast and flexible. Moreover, with Aleksei my
          website's average Google Search ranking position improved from 5 to
          1.1 and CTR increased by 2.5 times.
        </p>
      </div>
    </div>
  );
}
