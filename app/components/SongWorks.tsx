import React from "react";

export default function SongWorks() {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className="flex pb-2 mb-10  items-start border-b w-full">
        <h1 id="work" className="pt-14">
          Song Works
        </h1>
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className="md:w-1/2 ">
          <p className="md:text-2xl text-2xl md:mb-0 mb-3">
            Welcome to the{" "}
            <span className="text-[#FF480F] font-medium">
              {" "}
              songs I have worked on section,{" "}
            </span>
            where I share you my musical explorations as a producer, music
            programmer, and sound designer. <br /> <br /> Each piece reflects a
            journey with sound, aiming to connect and inspire. <br /> I hope you
            find something here that speaks to you.
          </p>
        </div>
        <iframe
          className=""
          loading="lazy"
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
  );
}
