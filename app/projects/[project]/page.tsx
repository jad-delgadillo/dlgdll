"use client";
import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import projectData from "../../utils/data";
import Link from "next/link";

const ProjectPage = () => {
  const pathname = usePathname();
  const projectId = pathname.split("/").pop();
  const currentProject = projectData.find((p) => p.id === projectId);

  const [isPlaying, setIsPlaying] = useState(false);
  const [overlayZIndex, setOverlayZIndex] = useState(-1);
  const [buttonZIndex, setButtonZIndex] = useState(50);

  const videoElement = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      setOverlayZIndex(60);
      setButtonZIndex(50);
    } else {
      const timer = setTimeout(() => {
        setOverlayZIndex(-1);
        setButtonZIndex(100);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  if (!currentProject) {
    return <div>Project not found</div>;
  }

  const handlePlaying = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleSeeking = () => {
    // Empty to maintain overlay during seeking
  };

  const handleSeeked = () => {
    // Adjust based on pause status
    if (videoElement.current) {
      setIsPlaying(!(videoElement.current as HTMLVideoElement).paused);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };
  return (
    <main>
      <div className="flex h-fit w-screen flex-col items-start mx-auto justify-center pt-16 md:h-screen md:items-center bg-white text-black">
        <div
          className="absolute inset-0 bg-black transition-opacity duration-500 ease-in-out"
          style={{
            opacity: isPlaying ? 0.6 : 0,
            zIndex: overlayZIndex,
          }}
        ></div>

        <div className="flex flex-col items-center justify-center md:max-w-7xl md:flex-row md:items-center md:space-x-10 ">
          <div
            className="flex w-screen flex-col items-start justify-center p-3 md:w-1/2 "
            style={{ zIndex: buttonZIndex }}
          >
            <h1 className="text-6xl">{currentProject.title}</h1>
            <h2 className="text-4xl">{currentProject.company}</h2>
            <p className="text-xl font-medium">{currentProject.description}</p>
            <p className="font-normal">
              <span>Credits: </span>
              {currentProject.credits}
            </p>
          </div>
          <div className="flex w-fit flex-col items-center justify-center p-3 md:w-1/2 md:p-0">
            <video
              className="rounded-lg z-[60] bg-black"
              src={currentProject.videoUrl}
              controls
              ref={videoElement}
              onPlay={handlePlaying}
              onPause={handlePause}
              onSeeking={handleSeeking}
              onSeeked={handleSeeked}
              onEnded={handleEnded}
            />
          </div>
        </div>

        <div
          className="absolute bottom-20 left-0 right-0 flex w-full justify-center"
          style={{ zIndex: buttonZIndex }}
        >
          <Link href={"/"}>
            <button className="rounded-xl border p-3 text-neutral-400 transition-all hover:border-black hover:text-black">
              Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
