# UW Cooking Club Website

The official website for the University of Waterloo Cooking Club (UWCC). Built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** — UI framework
- **Vite 7** — Build tool and dev server
- **React Router 7** — Client-side routing
- **Tailwind CSS 4** — Utility-first styling
- **react-icons** — Icon library

## Setup

> This project uses npm which is dependent on Node.js

```bash
node -v
```
It should return something like v22.14.0. If you get an `unknown command` error, follow [this site](https://nodejs.org/en/download) to download Node and npm.

```bash
npm -v
```

Clone the repo:
```bash
git clone https://github.com/UW-Cooking-Club/recipe-archive.git
```

Install dependencies:
```bash
cd recipe-archive
npm install
```

Run the local dev server:
```bash
npm run dev
```

The site should now be running at http://localhost:5173/

## Repo Structure

```text
recipe-archive/
├── public/                  # Static assets served directly
├── scripts/
│   └── compress-images.mjs  # Image compression script
├── src/
│   ├── assets/              # Images (WebP format)
│   │   ├── events/          # Event class photos and covers
│   │   ├── instagram/       # Instagram gallery photos
│   │   └── recipes/         # Recipe photos
│   ├── components/
│   │   ├── home/            # Home page components
│   │   │   ├── Hero.jsx
│   │   │   ├── InstagramGallery.jsx
│   │   │   ├── UpcomingEvents.jsx
│   │   │   └── WhoAreWe.jsx
│   │   ├── recipes/
│   │   │   └── RecipeCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── PageHero.jsx
│   ├── data/
│   │   ├── events.js        # Event data (dates, photos, descriptions)
│   │   └── recipes.js       # Recipe data (ingredients, instructions)
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── EventDetail.jsx
│   │   ├── Events.jsx
│   │   ├── Home.jsx
│   │   ├── RecipeDetail.jsx
│   │   └── Recipes.jsx
│   ├── App.jsx              # Root component with routes
│   ├── index.css            # Global styles and Tailwind config
│   └── main.jsx             # Entry point
└── index.html               # HTML template
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/recipes` | Recipe archive with search and filters |
| `/recipes/:slug` | Individual recipe detail |
| `/events` | Events listing (upcoming + past) |
| `/events/:slug` | Individual event detail |
| `/about` | About page |

## Adding New Content

### Adding a new event

Add an entry to `src/data/events.js`:

1. Import the cover image and class photos from `src/assets/events/`
2. Add an event object with: `id`, `slug`, `name`, `date`, `description`, `status` (`"upcoming"` or `"past"`), `coverImage`, `photos`, `googlePhotos`

### Adding a new recipe

Add an entry to `src/data/recipes.js`:

1. Import the recipe image from `src/assets/recipes/`
2. Add a recipe object with: `id`, `slug`, `name`, `subtitle`, `description`, `image`, `servings`, `prepTime`, `cookTime`, `totalTime`, `difficulty` (1-5), `tags`, `eventId`, `equipment`, `ingredients`, `instructions`
3. For grouped ingredients, use `{ group: "Group Name", items: [...] }` objects

### Compressing images

After adding new images, run the compression script to convert them to optimized WebP:

```bash
node scripts/compress-images.mjs
```

This resizes images to max 1600px wide and converts to WebP at 80% quality. After running, update the file extensions in your imports from `.jpg`/`.png`/`.jpeg` to `.webp`.

## File Imports

This repo avoids barrel files ([see why](https://dev.to/tassiofront/barrel-files-and-why-you-should-stop-using-them-now-bc4)).

> Path aliases are defined in `vite.config.js`:
> **@components**, **@assets**

```javascript
// Instead of:
import componentOne from 'src/components/componentOne'

// Use:
import componentOne from '@components/componentOne'
```

## Icons

This repo uses [react-icons](https://react-icons.github.io/react-icons/) for all non-custom icons:

```javascript
import { FaStar } from 'react-icons/fa';
```

## Fonts

| Class | Font | Used For |
|---|---|---|
| `font-heading` | Barlow Condensed | Headings and titles |
| `font-body` | Montserrat | Body text |
| `font-fun` | Fredoka | Decorative headings |

Fonts are loaded via Google Fonts in `index.html`.
