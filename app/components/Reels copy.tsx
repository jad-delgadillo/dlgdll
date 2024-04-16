import React from "react";
import Carousel from "./Carousel";

const slides = [
  "https://res.cloudinary.com/dzepeibjw/video/upload/v1710023217/Aldem-01/reels/saxll10ufny0hakybkkf.mp4",
  "https://res.cloudinary.com/dzepeibjw/video/upload/v1710023222/Aldem-01/reels/gm6acjz38uh1rbyn0bdv.mp4",
  "https://res.cloudinary.com/dzepeibjw/video/upload/v1710023219/Aldem-01/reels/wxbsxp4ywyrau6mvusqd.mp4",
];

export default function Reels() {
  return (
    <main className=" flex  flex-col ">
      <div className="border-b mb-10  ">
        <h1>#moreMusic</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className=" rounded-lg mb-20 max-w-[100%] flex items-center justify-center ">
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
