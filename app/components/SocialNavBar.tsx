"use client";
import Image from "next/image";
import React from "react";
import ig from "../../public/icons/ig.png";
import { usePathname } from "next/navigation";
import linkedIn from "../../public/icons/in.svg";
import Link from "next/link";

export default function SocialNavBar() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const socialStyle = isAboutPage
    ? "flex w-screen bottom-0 left-0 fixed justify-between items-center z-[50] text-black bg-[#EEEEEE] p-3 font-medium filter invert"
    : "flex w-screen bottom-0 left-0 fixed justify-between items-center z-[50] text-black bg-white p-3 font-medium";

  const inn = linkedIn as string;

  return (
    <div className={socialStyle}>
      <div>
        <div className=" flex">Say Hi! ☕️</div>
      </div>

      <div className="flex space-x-4">
        <Link
          href={"https://www.instagram.com/alwaysjad/"}
          className="cursor-ne-resize transition-all hover:opacity-50"
        >
          <Image src={ig} height={20} width={20} alt="ig icon" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/alwaysjad/"}
          className="cursor-ne-resize transition-all hover:opacity-50"
        >
          <Image src={inn} height={20} width={20} alt="ig icon" />
        </Link>
      </div>
    </div>
  );
}
