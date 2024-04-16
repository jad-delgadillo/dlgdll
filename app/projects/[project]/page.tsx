"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import projectData from "../../utils/data";
import Link from "next/link";

const ProjectPage = () => {
  const pathname = usePathname();
  const projectId = pathname.split("/").pop();
  const currentProject = projectData.find((p) => p.id === projectId);

  const [isPlaying, setIsPlaying] = useState(false);

  if (!currentProject) {
    return <div>Project not found</div>;
  }

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  // You can adjust the opacity level here
  const desiredOpacity = 0.4; // Change this value to control the dim level

  return (
    <main>
      <div className="flex h-fit w-screen flex-col items-start mx-auto justify-center pt-16 md:h-screen md:items-center bg-white text-black">
        <div
          className="absolute inset-0 bg-black transition-opacity duration-500 ease-in-out"
          style={{
            opacity: isPlaying ? desiredOpacity : 0, // Use the variable here
            zIndex: isPlaying ? 60 : -1, // Higher than navbar to ensure it covers everything
          }}
        ></div>{" "}
        {/* Animated overlay */}
        <div className="flex flex-col items-center justify-center md:max-w-7xl md:flex-row md:items-center md:space-x-10">
          <div className="flex w-screen flex-col items-start justify-center p-3 md:w-1/2">
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
              className="rounded-lg z-[60]"
              src={currentProject.videoUrl}
              controls
              onPlay={handlePlay}
              onPause={handlePause}
            />
          </div>
        </div>
        <div className="absolute bottom-20 left-0 right-0 flex w-full justify-center">
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
