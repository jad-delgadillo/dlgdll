import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type ProjectProps = {
  description: string;

  id: string;
  title: string;
  thumbnail: StaticImageData;
};

export default function Project({
  description,
  id,
  title,
  thumbnail,
}: ProjectProps) {
  return (
    <div className=" my-3 items-center justify-center p-0 md:my-0 md:p-0  ">
      <Link href={`/projects/${id}`} passHref scroll={false}>
        <div className="flex flex-col items-center justify-center rounded-xl transition-all hover:bg-zinc-50 hover:opacity-90">
          <Image
            src={thumbnail}
            alt={title}
            width={1029}
            height={1500}
            className="rounded-lg "
          />
          <div className="flex w-full">
            <div className="flex w-full flex-col items-start justify-start -space-y-1 px-1">
              <h1 className="text-lg font-medium">{title}</h1>
              <p className="font-extralight">{description}</p>
            </div>
            <div className="flex flex-col items-center justify-center md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#adadad"
              >
                <path d="M419-80q-28 0-52.5-12T325-126L107-403l19-20q20-21 48-25t52 11l74 45v-328q0-17 11.5-28.5T340-760q17 0 29 11.5t12 28.5v472l-97-60 104 133q6 7 14 11t17 4h221q33 0 56.5-23.5T720-240v-160q0-17-11.5-28.5T680-440H461v-80h219q50 0 85 35t35 85v160q0 66-47 113T640-80H419ZM167-620q-13-22-20-47.5t-7-52.5q0-83 58.5-141.5T340-920q83 0 141.5 58.5T540-720q0 27-7 52.5T513-620l-69-40q8-14 12-28.5t4-31.5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 17 4 31.5t12 28.5l-69 40Zm335 280Z" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
