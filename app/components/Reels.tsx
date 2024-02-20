import React from "react";
import Carousel from "./Carousel";

const slides = ["/reels/daop.mp4", "/reels/north.mp4", "/reels/winter.mp4"];

export default function Reels() {
  return (
    <main className="p-3 flex w-screen flex-col ">
      <div className="border-b mb-10  ">
        <h1>#moreMusic</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className=" rounded-lg mb-20 max-w-[90%] flex items-center justify-center ">
          <div className="">
            <Carousel>
              {slides.map((s) => (
                <video
                  className="rounded-lg z-0  bg-black relative"
                  key={s}
                  src={s}
                  controls
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  );
}
