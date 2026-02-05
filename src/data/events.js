import koreanCover from "@assets/events/korean-food-class/Korean_Cover.png";
import wanddCover from "@assets/events/wonton-dumplings-food-class/WandD_Cover.png";
import thaiCover from "@assets/events/thai-food-class/Thai_Cover.png";
import thai1 from "@assets/events/thai-food-class/Thai1.jpg";
import thai2 from "@assets/events/thai-food-class/Thai2.jpg";
import thai3 from "@assets/events/thai-food-class/Thai3.jpg";
import thai4 from "@assets/events/thai-food-class/Thai4.jpg";
import thai5 from "@assets/events/thai-food-class/Thai5.jpg";
import thai6 from "@assets/events/thai-food-class/Thai6.jpg";

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
    coverImage: koreanCover,
    photos: [],
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
    coverImage: wanddCover,
    photos: [],
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
    coverImage: thaiCover,
    photos: [thai1, thai2, thai3, thai4, thai5, thai6],
  },
];
