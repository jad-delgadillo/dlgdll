"use client";
import React from "react";
import me from "./../public/Photos/me11.jpg";
import ImageBlur from "./components/ImageBlur";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center bg-white text-black ">
        <div className="flex w-screen flex-col items-center overflow-auto justify-between p-3 md:space-y-40">
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
          <div className="py-20 md:pb-14 ">
            <p className="text-2xl font-medium leading-none lg:w-5/6 lg:text-[3rem]">
              {" "}
              Hey, I&apos;m <span className="text-[#FF480F]"> Jorge</span>. A
              software engineer with a passion for tackling challenges and a
              music artist dedicated to storytelling through soundscapes and
              melodies.
            </p>
            {/* <p className="text-2xl font-medium leading-none lg:w-5/6 lg:text-[3rem]">
              {" "}
              Hey, I&apos;m <span className="text-[#FF480F]"> Jorge</span>. A
              software engineer who loves solving problems and a music artist
              who tells stories through sound.
            </p> */}
            {/* <p className="text-2xl font-medium leading-none lg:w-5/6 lg:text-[3rem]">
              {" "}
              Hey, I&apos;m <span className="text-[#FF480F]"> Jorge</span>. A
              Music Artist known for crafting sound atmospheres and melodies
              that capture emotions and tell stories.
            </p> */}
          </div>
        </div>
      </div>

      <div className="">
        <Projects />
        <div className="w-screen flex flex-col p-3 items-center justify-center ">
          <div className="flex pb-2 mb-10 w-full items-start border-b">
            <h1 id="work" className="pt-14">
              Songs Works
            </h1>
          </div>
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-1/2 w-full">
              <p className="md:text-4xl text-2xl md:mb-0 mb-3">
                Welcome to the{" "}
                <span className="text-[#FF480F] font-medium">
                  {" "}
                  songs I have worked on section,{" "}
                </span>
                where I share you my musical explorations as a producer, music
                programmer and sound designer. <br /> <br /> Each piece reflects
                a journey with sound, aiming to connect and inspire. <br /> I
                hope you find something here that speaks to you.
              </p>
            </div>
            <iframe
              className=""
              allow="autoplay *; encrypted-media *; fullscreen *"
              height="500"
              style={{
                width: "100%",
                maxWidth: "800px",
                overflow: "hidden",
                background: "transparent",
              }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/mx/playlist/produced-by-jorge-delgadillo/pl.u-V9D77v7IB1yx1LM?l=en-GB"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
