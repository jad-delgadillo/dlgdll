import Image from "next/image";
import React from "react";
import me2 from "../../public/Photos/me4.jpg";
import me3 from "../../public/Photos/me11.jpg";
import LinkButtons from "../components/LinkButtons";

export default function Hello() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center space-x-0 bg-[#111111] text-black  md:space-x-64 ">
      <div className="max-w-sm space-y-2">
        <div className="bg-white rounded-lg px-3 py-4">
          <p className="text-lg font-medium">Jorge Delgadillo</p>
        </div>
        <div className="w-full h-[22rem] relative ">
          <Image
            src={me3}
            layout="fill"
            objectFit="cover"
            alt="me"
            className="rounded-lg"
            placeholder="blur"
          />
        </div>
        <div className="bg-white font-medium text-lg rounded-lg px-3 py-4">
          <p>
            A creative spirit and problem solver at heart — <br /> At my core, I
            am a storyteller, whether through the universal language of music or
            the transformative power of technology. My goal is to craft
            solutions that not only address immediate challenges but also enrich
            the lives of those around me.
          </p>
        </div>
        <div className="bg-white rounded-lg px-3 py-4">
          <LinkButtons />
        </div>
      </div>
    </div>
  );
}
