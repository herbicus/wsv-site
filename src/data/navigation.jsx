import {
  faHouse,
  faImages,
  faListCheck,
  faLocationDot,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export const baseLinks = [
  { name: "Gallery", href: "#gallery" },
  { name: "Videos", href: "#videos" },
];

export const welcomeLinks = [
  {
    name: "Rules",
    description: "Learn house rules and policies",
    href: "#rules",
    icon: faHouse,
  },
  {
    name: "Amenities",
    description: "Staying at Grandma\u2019s",
    href: "#amenities",
    icon: faListCheck,
  },
  {
    name: "Things To Checkout",
    description: "Nearby attractions to visit",
    href: "#places",
    icon: faLocationDot,
  },
  {
    name: "Good Eats",
    description: "Local dining recommendations",
    href: "#eats",
    icon: faUtensils,
  },
];

export const navLinks = [
  { name: "Gallery", href: "#gallery", icon: faImages },
  { name: "Videos", href: "#videos", icon: faYoutube },
];
