import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { KeenSliderOptions, KeenSliderHooks } from "keen-slider";

const slides = [
  "https://res.cloudinary.com/dzepeibjw/video/upload/f_auto:video,q_auto/v1/Aldem-01/reels/saxll10ufny0hakybkkf",
  "https://res.cloudinary.com/dzepeibjw/video/upload/f_auto:video,q_auto/v1/Aldem-01/reels/gm6acjz38uh1rbyn0bdv",
  "https://res.cloudinary.com/dzepeibjw/video/upload/f_auto:video,q_auto/v1/Aldem-01/reels/wxbsxp4ywyrau6mvusqd",
  "https://res.cloudinary.com/dzepeibjw/video/upload/f_auto:video,q_auto/v1/Aldem-01/reels/zegkz4dwzmekclly0l0q",
  "https://res.cloudinary.com/dzepeibjw/video/upload/f_auto:video,q_auto/v1/Aldem-01/reels/ui1pvn5por8dpjiw4zmd",
];

const titles = ["PØW3R", "NORTH", "SAHARA WINTER", "HEAR", "FEELING"];

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
              className="keen-slider__slide number-slide1 flex flex-col items-center justify-center"
              key={idx}
            >
              <video
                className="md:w-[90%] w-4/5 bg-black relative rounded-lg"
                src={url}
                controls
              />
              <div className="text-center mt-2 w-full  tracking-widest font-light text-neutral-700 text-sm">
                {titles[idx]}
              </div>
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
