import koreanCover from "@assets/events/korean-food-class/Korean_Cover.png";
import korean1 from "@assets/events/korean-food-class/Korean1.jpg";
import korean2 from "@assets/events/korean-food-class/Korean2.jpg";
import korean3 from "@assets/events/korean-food-class/Korean3.JPG";
import korean4 from "@assets/events/korean-food-class/Korean4.jpeg";
import korean5 from "@assets/events/korean-food-class/Korean5.JPG";
import korean6 from "@assets/events/korean-food-class/Korean6.JPG";
import korean7 from "@assets/events/korean-food-class/Korean7.jpg";
import korean8 from "@assets/events/korean-food-class/Korean8.JPG";
import korean9 from "@assets/events/korean-food-class/Korean9.JPG";

import wanddCover from "@assets/events/wonton-dumplings-food-class/WandD_Cover.png";
import wd1 from "@assets/events/wonton-dumplings-food-class/WD1.jpg";
import wd2 from "@assets/events/wonton-dumplings-food-class/WD2.JPG";
import wd3 from "@assets/events/wonton-dumplings-food-class/WD3.JPG";
import wd4 from "@assets/events/wonton-dumplings-food-class/WD4.JPG";
import wd5 from "@assets/events/wonton-dumplings-food-class/WD5.JPG";
import wd6 from "@assets/events/wonton-dumplings-food-class/WD6.JPG";
import wd7 from "@assets/events/wonton-dumplings-food-class/WD7.jpg";
import wd8 from "@assets/events/wonton-dumplings-food-class/WD8.JPG";
import wd9 from "@assets/events/wonton-dumplings-food-class/WD9.JPG";

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
    photos: [korean1, korean2, korean3, korean4, korean5, korean6, korean7, korean8, korean9],
    googlePhotos:
      "https://photos.google.com/share/AF1QipOijdXD5J7mtaQd6rjJpIRyrHU_lge01jt_5s0ZBpGzP-skPVGHTZd3OQQMhTpCYg?key=eWFadzU1RWdIMVBHejZOcGJyOVVVZHdHTjJLYUp3",
  },
  {
    id: "wontons-dumplings-class-oct-2025",
    slug: "wontons-and-dumplings-class",
    name: "Wontons and Dumplings Class",
    date: "2025-10-25",
    description: "Master the art of making dumplings and wontons from scratch, including crispy dumpling skirts.",
    collab: null,
    taughtBy: "John Doe",
    status: "past",
    coverImage: wanddCover,
    photos: [wd1, wd2, wd3, wd4, wd5, wd6, wd7, wd8, wd9],
    googlePhotos:
      "https://photos.google.com/share/AF1QipOHb3EFyR4jl4asC1CYH_9q_-QxYmaLEqYDWapDZhQG53KPCvcXCH5t_ujjMapcBQ?key=ZGNpNDVpbHNJMmtaSzhWcEtsUElCY216UktPd0p3",
  },
  {
    id: "thai-food-class-nov-2025",
    slug: "thai-food-class",
    name: "Thai Food Class",
    date: "2025-11-08",
    description: "Explore authentic Thai cuisine with pad thai, mango salad, and Thai iced tea.",
    collab: null,
    taughtBy: "John Doe",
    status: "past",
    coverImage: thaiCover,
    photos: [thai1, thai2, thai3, thai4, thai5, thai6],
    googlePhotos:
      "https://photos.google.com/share/AF1QipM1zslHvkd4f-7ZlzsrAgtYruWKIU1PgdvVvcR4jt4A_ycBtDNA_fVFksdG9Xcixw?key=SVJ4MUVrNUVXdXVEbGFaZVRmMVc2UUg0YnE1bnBB",
  },
];
