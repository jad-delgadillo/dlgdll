import Clover from "../../public/trailers/cloverfield-paradox.jpg";
import Magic from "../../public/trailers/magicmikelive.jpg";
import IsYou from "../../public/trailers/alliseeisyou.jpg";

const projectData = [
  {
    id: "hostile-planet",
    title: "Hostile Planet",
    company: "National Geographic",
    description: "Worldwide Broadcast Campaign",
    credits: "Production, Composition, Sound Design, Mixing and Master",
    videoUrl:
      "https://res.cloudinary.com/dzepeibjw/video/upload/v1708322814/Aldem-01/videos/gwjwlik0u5l05ocamygf.mp4",
    thumbnail:
      "https://res.cloudinary.com/dzepeibjw/image/upload/v1708322774/Aldem-01/trailers/d3dikrqvwdrzmz08uoh5.jpg",
  },
  {
    id: "cloverfield-paradox",
    title: "CloverField Paradox",
    company: "Netflix",
    description: "Super Bowl TV Spot",
    credits: "Production, Composition, Sound Design, Mixing and Master",
    videoUrl:
      "https://res.cloudinary.com/dzepeibjw/video/upload/v1708322778/Aldem-01/videos/lvu7qxsce1qosbel91lc.mov",
    thumbnail:
      "https://res.cloudinary.com/dzepeibjw/image/upload/v1708322773/Aldem-01/trailers/tuplmcooef7doeiobt2a.jpg",
  },
  // {
  //   id: "magic-mike-las-vegas",
  //   title: "Magic Mike",
  //   company: "Las Vegas Show",
  //   description: "Worldwide Broadcast",
  //   credits: "Production, Compositon, Sound Design, Mixing and Maste",
  //   videoUrl: "/videos/magic.mov",
  //   thumbnail: Magic,
  // },
  {
    id: "all-i-see-is-you",
    title: "All I See is You",
    company: "Tonight Show with Jimmy Fallon",
    description: "USA National TV Broadcast",
    credits: "Production, Compositon, Sound Design, Mixing and Master",
    videoUrl:
      "https://res.cloudinary.com/dzepeibjw/video/upload/v1708322796/Aldem-01/videos/zzexgqwtwwgnyky7b1ks.mp4",
    thumbnail:
      "https://res.cloudinary.com/dzepeibjw/image/upload/v1708322774/Aldem-01/trailers/uk9btbn3mki59qvisyqn.jpg",
  },
];

export type LinkData = {
  name: string;
  url: string;
  icon?: string; // Optional if you decide to use icons
};

export const linksData: LinkData[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/alwaysjad",
    icon: "🤳",
  },
  { name: "Twitter", url: "https://twitter.com/alwaysjad", icon: "🆇" },
  {
    name: "Portfolio",
    url: "/",
    icon: "💼",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alwaysjad/",
    icon: "💬",
  },
  {
    name: "Email",
    url: "mailto:your.jorge.aldem@gmail.com",
    icon: "✉️",
  },
];

export default projectData;
