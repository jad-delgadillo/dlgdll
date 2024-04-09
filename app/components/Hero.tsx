import React from "react";
import me from "/public/Photos/me12.jpg";
import ImageBlur from "../components/ImageBlur";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-white text-black ">
        <div className="flex  flex-col items-center overflow-auto justify-between  md:space-y-40">
          <div className="mt-9 w-full ">
            <div className=" w-7/12 md:w-4/12 lg:w-2/12 md:pb-12 pb-0 flex flex-col items-start justify-start">
              <Image
                alt="profile picture of me in a nature national park"
                src="https://res.cloudinary.com/dzepeibjw/image/upload/f_auto,q_auto/v1/Aldem-01/photos/eticc4vfd7pnrq6pm6df"
                width={500}
                height={500}
                className="rounded-lg"
              />
              <div className="mt-2">
                <p className="text-sm font-medium text-neutral-500">
                  {" "}
                  Creative, Problem Solver, Musician, Founder, Storyteller.
                </p>
              </div>
            </div>
          </div>
          <div className="py-20 md:pb-20 ">
            <p className="text-2xl font-medium leading-none lg:w-5/6 lg:text-[3rem]">
              {" "}
              Hey, I&apos;m <span className="text-[#FF480F]"> Jorge</span>. A
              software engineer with a passion for tackling <br /> challenges
              and a music artist dedicated to storytelling through soundscapes
              and melodies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
