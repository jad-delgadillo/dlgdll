import React from "react";
import { linksData, LinkData } from "../utils/data";

const LinkButtons: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2 text-sm">
      {linksData.map((link: LinkData, index: number) => (
        <a
          key={index}
          href={link.url}
          className="px-3 border border-black  text-black hover:text-white rounded-full hover:bg-[#FF480F] transition duration-300 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name} {link.icon}
        </a>
      ))}
    </div>
  );
};

export default LinkButtons;
