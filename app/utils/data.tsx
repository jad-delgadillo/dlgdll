import Hostile from "../../public/trailers/hpn.jpg";
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
    videoUrl: "/videos/hostile.mp4",
    thumbnail: Hostile,
  },
  {
    id: "cloverfield-paradox",
    title: "CloverField Paradox",
    company: "Netflix",
    description: "Super Bowl TV Spot",
    credits: "Production, Composition, Sound Design, Mixing and Master",
    videoUrl: "/videos/clover.mov",
    thumbnail: Clover,
  },
  {
    id: "magic-mike-las-vegas",
    title: "Magic Mike",
    company: "Las Vegas Show",
    description: "Worldwide Broadcast",
    credits: "Production, Compositon, Sound Design, Mixing and Maste",
    videoUrl: "/videos/magic.mov",
    thumbnail: Magic,
  },
  {
    id: "all-i-see-is-you",
    title: "All I See is You",
    company: "Tonight Show with Jimmy Fallon",
    description: "USA National TV Broadcast",
    credits: "Production, Compositon, Sound Design, Mixing and Master",
    videoUrl: "/videos/IsYou.mov",
    thumbnail: IsYou,
  },
];

export default projectData;
