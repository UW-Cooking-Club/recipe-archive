import sharp from "sharp";
import { readdir, stat, unlink } from "fs/promises";
import { join, extname, basename, dirname } from "path";

const ASSETS_DIR = new URL("../src/assets", import.meta.url).pathname;
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 80;
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function getImageFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getImageFiles(fullPath)));
    } else if (IMAGE_EXTS.has(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const nameWithoutExt = basename(filePath, extname(filePath));
  const outputPath = join(dirname(filePath), `${nameWithoutExt}.webp`);

  const originalStats = await stat(filePath);
  const originalSize = originalStats.size;

  try {
    const image = sharp(filePath).rotate(); // Auto-rotate based on EXIF orientation
    const metadata = await image.metadata();

    let pipeline = image;
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH);
    }

    await pipeline.webp({ quality: WEBP_QUALITY }).toFile(outputPath);

    const newStats = await stat(outputPath);
    const newSize = newStats.size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    // Remove original if it's not already .webp
    if (filePath !== outputPath) {
      await unlink(filePath);
    }

    console.log(
      `${basename(filePath)} → ${basename(outputPath)}  ` +
        `${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB  (${savings}% smaller)`
    );

    return { original: originalSize, compressed: newSize };
  } catch (err) {
    console.error(`Failed: ${filePath} — ${err.message}`);
    return { original: originalSize, compressed: originalSize };
  }
}

const files = await getImageFiles(ASSETS_DIR);
console.log(`Found ${files.length} images in ${ASSETS_DIR}\n`);

let totalOriginal = 0;
let totalCompressed = 0;

for (const file of files) {
  const result = await compressImage(file);
  totalOriginal += result.original;
  totalCompressed += result.compressed;
}

console.log(
  `\nTotal: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalCompressed / 1024 / 1024).toFixed(1)}MB  (${(
    (1 - totalCompressed / totalOriginal) *
    100
  ).toFixed(1)}% smaller)`
);
