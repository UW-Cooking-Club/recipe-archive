import thai1 from "@assets/events/thai-food-class/Thai1.png";
import thai2 from "@assets/events/thai-food-class/Thai2.jpg";
import thai3 from "@assets/events/thai-food-class/Thai3.jpg";
import thai4 from "@assets/events/thai-food-class/Thai4.jpg";
import thai5 from "@assets/events/thai-food-class/Thai5.jpg";
import thai6 from "@assets/events/thai-food-class/Thai6.jpg";

const placeholder = (text, bg = "219f90") =>
  `https://placehold.co/800x600/${bg}/ffffff?text=${encodeURIComponent(text)}`;

const koreanPhotos = Array.from({ length: 6 }, (_, i) =>
  placeholder(`Korean+Class+${i + 1}`, "d4543b")
);

const dumplingsPhotos = Array.from({ length: 6 }, (_, i) =>
  placeholder(`Dumplings+Class+${i + 1}`, "e8a840")
);

export const events = [
  {
    id: "korean-food-class-sept-2025",
    slug: "korean-food-class",
    name: "Korean Food Class",
    date: "2025-09-20",
    description:
      "Learn to make classic Korean dishes including army stew, egg rolls, stir fried potatoes, and cinnamon punch.",
    collab: "King Sejong Institute",
    taughtBy: "John Doe",
    status: "past",
    coverImage: koreanPhotos[0],
    photos: koreanPhotos,
  },
  {
    id: "wontons-dumplings-class-oct-2025",
    slug: "wontons-and-dumplings-class",
    name: "Wontons and Dumplings Class",
    date: "2025-10-25",
    description:
      "Master the art of making dumplings and wontons from scratch, including crispy dumpling skirts.",
    collab: null,
    taughtBy: "John Doe",
    status: "past",
    coverImage: dumplingsPhotos[0],
    photos: dumplingsPhotos,
  },
  {
    id: "thai-food-class-nov-2025",
    slug: "thai-food-class",
    name: "Thai Food Class",
    date: "2025-11-08",
    description:
      "Explore authentic Thai cuisine with pad thai, mango salad, and Thai iced tea.",
    collab: null,
    taughtBy: "John Doe",
    status: "past",
    coverImage: thai1,
    photos: [thai1, thai2, thai3, thai4, thai5, thai6],
  },
];
