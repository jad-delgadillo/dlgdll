"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useNavbarHeight } from "../components/NavbarHeightContext";

export default function NavBar() {
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const { setNavbarHeight } = useNavbarHeight(); // Access the setter from context

  const workLinkHref =
    pathname === "/about" || pathname !== "/" ? "/#work" : "#work";

  const isAboutPage = pathname === "/about" || pathname === "/hello";

  const navbarStyle = isAboutPage
    ? "flex w-screen fixed justify-between items-center z-40 text-white bg-[#111111] p-3 font-medium text-xl"
    : "flex w-screen fixed justify-between items-center z-40 text-black bg-white p-3 font-medium text-xl";

  useEffect(() => {
    if (navbarRef.current) {
      const navbarRect = navbarRef.current.getBoundingClientRect();
      setNavbarHeight(navbarRect.height); // More precise height measurement
    }
  }, [setNavbarHeight]);

  return (
    <div ref={navbarRef} className={navbarStyle}>
      <Link
        href={"/"}
        className="cursor-ne-resize transition-all hover:text-[#FF480F]"
      >
        <div className="flex items-center">
          <div className="mr-2 rounded-full w-6 h-6 bg-[#FF480F]"></div>
          <h3 className="">alwaysjad</h3>
        </div>
      </Link>

      <Link href={"/about"}>
        <div className="cursor-ne-resize transition-all hover:text-[#FF480F]">
          about
        </div>
      </Link>

      <div className="flex cursor-ne-resize space-x-10 pr-2 transition-all hover:text-[#FF480F]">
        <Link href={workLinkHref}>
          <div className="cursor-ne-resize transition-all hover:text-[#FF480F]">
            work
          </div>
        </Link>
      </div>
    </div>
  );
}
