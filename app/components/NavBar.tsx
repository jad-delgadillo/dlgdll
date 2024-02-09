"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const isAboutPage = pathname === "/about" || pathname === "/hello";

  const navbarStyle = isAboutPage
    ? "flex w-screen fixed justify-between items-center z-[50] text-white bg-[#111111] p-3 font-medium"
    : "flex w-screen fixed justify-between items-center z-[50] text-black bg-white p-3 font-medium";

  const workLinkHref =
    pathname === "/about" || pathname !== "/" ? "/#work" : "#work";

  return (
    <div className={navbarStyle}>
      <Link
        href={"/"}
        className="cursor-ne-resize transition-all hover:text-[#FF480F]"
      >
        <div className="flex">
          <div className="mr-2 rounded-full bg-[#FF480F] p-3"></div>
          <div>Jorge Delgadillo</div>
        </div>
      </Link>

      <Link href={"/about"}>
        <div className="cursor-ne-resize transition-all hover:text-[#FF480F]">
          About
        </div>
      </Link>

      <div className="flex cursor-ne-resize space-x-10 transition-all hover:text-[#FF480F]">
        <Link href={workLinkHref}>
          <div className="cursor-ne-resize transition-all hover:text-[#FF480F]">
            Work
          </div>
        </Link>
      </div>
    </div>
  );
}
