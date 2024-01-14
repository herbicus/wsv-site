import {
  faClipboard,
  faHome,
  faHouse,
  faImages,
  faListCheck,
  faLocationDot,
  faMap,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export const baseLinks = [
  { name: "Welcome", href: "#welcome" },
  { name: "Map", href: "#map" },
  { name: "Gallery", href: "#gallery" },
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
  { name: "Welcome", href: "#welcome", icon: faHome },
  { name: "Map", href: "#map", icon: faLocationDot },
  { name: "Gallery", href: "#gallery", icon: faImages },
  {
    name: "Rules",
    href: "#rules",
    icon: faClipboard,
  },
  {
    name: "Amenities",
    href: "#amenities",
    icon: faListCheck,
  },
  {
    name: "Things To Checkout",
    href: "#places",
    icon: faMap,
  },
  {
    name: "Good Eats",
    href: "#eats",
    icon: faUtensils,
  },
];
