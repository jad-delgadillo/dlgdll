"use client";
import Image from "next/image";
import React from "react";
import ig from "../../public/icons/ig.png";
import { usePathname } from "next/navigation";
import linkedIn from "../../public/icons/email.svg";
import Link from "next/link";

export default function SocialNavBar() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about" || pathname === "/hello";
  const socialStyle = isAboutPage
    ? "flex w-screen bottom-0 left-0 fixed justify-between items-center z-[10] text-black bg-[#EEEEEE] p-3 font-medium filter invert"
    : "flex w-screen bottom-0 left-0 fixed justify-between items-center z-[10] text-black bg-white p-3 font-medium";

  const inn = linkedIn as string;

  return (
    <div className={socialStyle}>
      <Link
        href={"/hello"}
        className="cursor-ne-resize transition-all hover:opacity-50"
      >
        <div className=" flex">Say Hi! ☕️</div>
      </Link>

      <div className="flex flex-row-reverse space-x-4 gap-2 items-center">
        <Link
          href={"https://www.instagram.com/alwaysjad/"}
          className="cursor-ne-resize transition-all hover:opacity-50 text-black"
        >
          <Image
            src={ig}
            height={20}
            width={20}
            alt="instagram icon"
            className="text-black"
          />
        </Link>
        <Link
          href={"mailto:your.jorge.aldem@gmail.com"}
          className="cursor-ne-resize transition-all hover:opacity-50 pr-2"
          target="_blank"
        >
          <Image
            src={inn}
            className="text-black"
            height={24}
            width={24}
            alt="email icon"
          />
        </Link>
      </div>
    </div>
  );
}
