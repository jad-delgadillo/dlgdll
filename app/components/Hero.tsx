import React, { useState } from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import { useNavbarHeight } from "../components/NavbarHeightContext";

export default function Hero() {
  return (
    <div>
      <div className="flex flex-col bg-white text-black h-screen mx-auto relative mt-14">
        <div className="flex flex-col items-center justify-between">
          {/* Profile Image Section */}
          <div className="w-full">
            <div className="w-7/12 md:w-4/12 lg:w-[23%] md:pb-12 pb-0 flex flex-col items-start justify-start">
              <Image
                alt="profile picture of me in a nature national park"
                src="https://res.cloudinary.com/dzepeibjw/image/upload/f_auto,q_auto/v1/Aldem-01/photos/eticc4vfd7pnrq6pm6df"
                width={500}
                height={500}
                className="rounded-lg"
              />
              <div className="mt-2">
                <p className="text-sm font-medium text-neutral-500">
                  Creative, Problem Solver, Musician, Founder, Storyteller.
                </p>
              </div>
            </div>
          </div>
          {/* Profile Description Section */}
          <div className="absolute md:bottom-28 bottom-60 left-0">
            <p className="text-2xl font-medium leading-none lg:w-5/6 lg:text-[3rem]">
              Hey, I&apos;m <span className="text-[#FF480F]"> Jorge</span> —a
              music artist and producer fueled by a passion for storytelling
              through rich soundscapes and captivating melodies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
