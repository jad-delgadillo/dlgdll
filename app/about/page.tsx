import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between space-x-0 bg-[#111111] pb-10 text-white md:flex-row md:items-end md:space-x-64 md:pb-10">
      <div className="mb-2 flex w-9/12 items-end space-x-3 pt-5 md:pt-0">
        <div className="mt-10 ">
          <Image
            src="https://res.cloudinary.com/dzepeibjw/image/upload/f_auto,q_auto/v1/Aldem-01/photos/zwd6r2uwecsfy9mkqvqs"
            width={500}
            height={500}
            layout="responsive"
            alt="me"
            className="rounded-lg"
          />
        </div>
        <div className="mt-10 hidden md:flex ">
          <Image
            src="https://res.cloudinary.com/dzepeibjw/image/upload/f_auto,q_auto/v1/Aldem-01/photos/ppsae8ksrolazmke7pnq"
            width={500}
            height={500}
            layout="responsive"
            alt="me"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="w-3/3 flex h-full items-center justify-center p-3 font-medium md:w-2/3 md:items-end md:justify-end  md:p-1">
        <div>
          <p className="text-neutral-400">About </p>
          <div className="tracking-wider">
            Hey, I&apos;m <span className="font-black">Jorge</span>, a creative
            spirit and problem solver at heart, hailing from the vibrant streets
            of Guadalajara, Mexico. <br /> <br /> My journey began in the realm
            of music, where I embraced the role of a producer, weaving stories
            through soundscapes and melodies. My passion for storytelling and
            creativity has led me to collaborate with illustrious names such as{" "}
            <span className="font-black text-white">
              Netflix, Paramount, National Geographic, and Bad Robot
              Productions.
            </span>{" "}
            <br /> <br />
            While music remains a cherished part of my life, my curiosity and
            drive to innovate have propelled me into the world of software
            development. In 2024, I embarked on a new adventure:{" "}
            <span className="font-black text-white">
              launching an open-source software (OSS) project dedicated to
              transforming public transportation in Guadalajara.
            </span>{" "}
            This initiative aims to demystify the complexities of urban
            mobility, offering real-time bus locations, arrival times, and route
            planning to ease the daily commute of thousands. <br /> <br />
            At my core, I am a storyteller, whether through the universal
            language of music or the transformative power of technology.{" "}
            <span className="font-black text-white">
              My goal is to craft solutions that not only address immediate
              challenges but also enrich the lives of those around me.
            </span>
            <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
}
