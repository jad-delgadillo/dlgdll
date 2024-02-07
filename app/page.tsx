"use client";
import React from "react";
import me from "./../public/Photos/me11.jpg";
import ImageBlur from "./components/ImageBlur";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center bg-white text-black ">
        <div className="flex h-screen w-screen flex-col items-center justify-between overflow-auto p-3 md:space-y-40">
          <div className="mt-9 w-full">
            <div className=" w-7/12 md:w-2/12">
              <ImageBlur src={me} />
              <div className="mt-2">
                <p className="text-sm font-medium text-neutral-500">
                  {" "}
                  Creative, Problem Solver, Musician, Founder, Storyteller.
                </p>
              </div>
            </div>
          </div>
          <div className=" pb-40 md:pb-14 ">
            <p className="text-2xl font-medium leading-none lg:w-5/6 lg:text-[3rem]">
              {" "}
              Hey, I&apos;m <span className="text-[#FF480F]"> Jorge</span>. A
              Music Artist known for crafting sound atmospheres and melodies
              that capture emotions and tell stories.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <Projects />
      </div>
    </main>
  );
}
