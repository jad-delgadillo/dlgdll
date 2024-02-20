import React, { useState } from "react";

export default function Carousel({ children: slides }: any) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="flex items-center justify-center  rounded-lg">
      <button
        onClick={prev}
        className="z-10 mr-2 hover:bg-neutral-100 transition-all rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
      </button>
      <div
        className="overflow-hidden relative w-full max-w-screen-xl rounded-lg bg-black mx-auto"
        style={{ height: "auto" }}
      >
        <div
          className="flex transition-transform ease-out duration-200"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {React.Children.map(slides, (child, index) => (
            <div
              key={index}
              className="flex-none w-full flex justify-center"
              style={{ minWidth: "100%" }}
            >
              {React.cloneElement(child, {
                className: "inline-block w-[100%] mx-auto",
              })}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={next}
        className="z-10 ml-2 hover:bg-neutral-100 transition-all hover:opacity-50 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </button>
    </div>
  );
}
