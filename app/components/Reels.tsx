import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { KeenSliderOptions, KeenSliderHooks } from "keen-slider";

const slides = [
  "https://res.cloudinary.com/dzepeibjw/video/upload/v1710023217/Aldem-01/reels/saxll10ufny0hakybkkf.mp4",
  "https://res.cloudinary.com/dzepeibjw/video/upload/v1710023222/Aldem-01/reels/gm6acjz38uh1rbyn0bdv.mp4",
  "https://res.cloudinary.com/dzepeibjw/video/upload/v1710023219/Aldem-01/reels/wxbsxp4ywyrau6mvusqd.mp4",
];

export default function Reels() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    mode: "snap",
    spacing: 15,
    slideChanged(s) {
      console.log("slide changed to", s.track.details.rel);
    },
  } as KeenSliderOptions<{}, {}, KeenSliderHooks>);

  return (
    <main className="flex flex-col items-center mb-14">
      <div className="w-full border-b mb-10">
        <h1 className="text-start">#moreMusic</h1>
      </div>
      <div className="w-full flex justify-center overflow-hidden relative">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((url, idx) => (
            <div
              className="keen-slider__slide number-slide1 flex items-center justify-center"
              key={idx}
            >
              <video
                className="md:w-[90%] w-4/5 bg-black relative rounded-lg"
                src={url}
                controls
              />
            </div>
          ))}
        </div>
        {slider && (
          <>
            <button
              onClick={() => slider.current && slider.current.prev()}
              className="absolute md:left-5 left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full cursor-pointer z-10 hover:bg-neutral-300 transition-all"
              aria-label="Previous slide"
            >
              &#10094; {/* Left arrow symbol */}
            </button>
            <button
              onClick={() => slider.current && slider.current.next()} // Add null check
              className="absolute md:right-5 right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full cursor-pointer z-10 hover:bg-neutral-300 transition-all"
              aria-label="Next slide"
            >
              &#10095; {/* Right arrow symbol */}
            </button>
          </>
        )}
      </div>
    </main>
  );
}
