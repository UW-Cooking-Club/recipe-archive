import { useEffect } from "react";

const SITE_NAME = "UW Cooking Club";

/** Keep in sync with <meta name="description"> in index.html */
const DEFAULT_META_DESCRIPTION =
  "University of Waterloo Cooking Club — upcoming classes, past events, recipe archive, and how to get involved.";

function documentTitle(pageTitle) {
  if (pageTitle == null || pageTitle === "" || pageTitle === SITE_NAME) {
    return SITE_NAME;
  }
  return `${pageTitle} | ${SITE_NAME}`;
}

function truncateMeta(text, max = 160) {
  const t = String(text).trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trimEnd()}…`;
}

/**
 * Sets document title and meta description (for SPA navigation / bookmarks / SEO basics).
 */
export default function usePageMetadata({ title, description } = {}) {
  useEffect(() => {
    document.title = documentTitle(title);

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    if (description != null && description !== "") {
      meta.setAttribute("content", truncateMeta(description));
    } else {
      meta.setAttribute("content", DEFAULT_META_DESCRIPTION);
    }
  }, [title, description]);
}
