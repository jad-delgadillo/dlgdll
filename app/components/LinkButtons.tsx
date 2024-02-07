import React from "react";
import { linksData, LinkData } from "../utils/data"; // Adjust the path as needed

const LinkButtons: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2 text-sm">
      {linksData.map((link: LinkData, index: number) => (
        // Using <a> tag for external links; for internal navigation within Next.js, consider using Next.js's Link component
        <a
          key={index}
          href={link.url}
          className="px-3 border border-black  text-black hover:text-white rounded-full hover:bg-[#FF480F] transition duration-300 ease-in-out"
          target="_blank" // Open links in a new tab
          rel="noopener noreferrer" // Security measure for opening links in a new tab
        >
          {link.name} {link.icon}
        </a>
      ))}
    </div>
  );
};

export default LinkButtons;
