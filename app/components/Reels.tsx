import React from "react";
import Carousel from "./Carousel";

const slides = ["/reels/daop.mp4", "/reels/north.mp4", "/reels/winter.mp4"];

export default function Reels() {
  return (
    <main>
      <div className=" p-3  rounded-lg mb-20">
        <div className="border-b mb-10">
          <h1>#moreMusic</h1>
        </div>
        <div className="">
          <Carousel>
            {slides.map((s) => (
              <video
                className="rounded-lg z-0 bg-black relative"
                key={s}
                src={s}
                controls
              />
            ))}
          </Carousel>
        </div>
      </div>
    </main>
  );
}
