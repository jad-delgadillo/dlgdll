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
            placeholder="blur"
          />
          <div className="flex w-full flex-col items-start justify-start -space-y-1 px-1">
            <h1 className="text-lg font-medium">{title}</h1>
            <p className="font-extralight">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
