"use client";
import React from "react";

import Projects from "./components/Projects";
import Reels from "./components/Reels";
import SongWorks from "./components/SongWorks";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col p-3 pt-5">
      <Hero />
      <Projects />
      <SongWorks />
      <Reels />
    </div>
  );
}
