import React from "react";
import Image, { type StaticImageData } from "next/image";

type DefaultBlurImageProps = {
  src: StaticImageData;
};

export default function ImageBlur({ src }: DefaultBlurImageProps) {
  return (
    <div>
      <div className="">
        <Image
          src={src}
          alt="image"
          objectFit="cover"
          placeholder="blur"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
