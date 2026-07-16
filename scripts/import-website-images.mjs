import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceDir = path.join(root, "website images");
const outputDir = path.join(root, "public", "images", "aj-foundation");

const assets = [
  ["hf_20260715_143603_068ae353-e5f9-4d8e-b119-c97671b7433f.png", "supporter-01.webp", 600, 600],
  ["hf_20260715_143639_53c451d8-f6d0-4bbb-9fa0-376e618c97f2.png", "supporter-02.webp", 600, 600],
  ["hf_20260715_143659_a88b92bd-5f01-49c2-99b5-02ac038ae171.png", "supporter-03.webp", 600, 600],
  ["hf_20260715_143745_6403d05e-a067-4b58-a3ba-897bee2f24f0.png", "supporter-04.webp", 600, 600],
  ["hf_20260715_143946_82138c1a-6b9f-41a0-b186-2f991a78d417.png", "about-speaker.webp", 1200, 1500],
  ["hf_20260715_144129_d5c1cd98-b902-40b4-9f81-c2cb4218f63c.png", "about-collaboration.webp", 1200, 1500],
  ["hf_20260715_144255_ccd4a942-f8be-40f2-beaa-6e688b1f627f.png", "programme-rehabilitation.webp", 1600, 1100],
  ["hf_20260715_144319_3ca9095e-6006-4621-9336-3bfc12245112.png", "programme-engagement.webp", 1600, 1100],
  ["hf_20260715_144335_5325b013-9ed3-45d7-8c9e-ed0f6a08e926.png", "programme-employability.webp", 1600, 1100],
  ["hf_20260715_144408_3bbb498d-89da-4f82-9e29-bb7c7749a767.png", "trust-volunteer.webp", 1800, 1000],
  ["hf_20260715_144451_609cd636-125e-4684-9848-fb086c8945ca.png", "trust-partnership.webp", 1400, 1400],
  ["hf_20260715_145057_ca98b78b-3ccd-4b21-be18-24ca603e0217.png", "highlight-institutional.webp", 1400, 1050],
  ["hf_20260715_144533_806ca891-b514-4fdf-8309-ec540d6ec18c.png", "event-orientation.webp", 1800, 1500],
  ["hf_20260715_144602_52bfcf75-b49f-40e9-a40f-c5c7f45cbcc9.png", "event-workshop.webp", 1800, 1500],
  ["hf_20260715_144716_657e6497-9ba1-4dd7-88dd-1ecbc5481a50.png", "testimonial-partner.webp", 800, 800],
  ["hf_20260715_144841_b9466da7-a1b1-4238-a1ca-f58073a5e14e.png", "highlight-skills.webp", 1400, 1050],
  ["hf_20260715_144905_3f17c537-57f0-4460-b665-fc1be5129716.png", "highlight-community.webp", 1400, 1050],
  ["hf_20260715_144927_78e02481-cc75-4550-802f-0bb76d03ab00.png", "donation-background.webp", 2400, 1200],
  ["hf_20260715_144957_44ea6ff5-200e-4d6b-b96a-da4ad5128c81.png", "highlight-main.webp", 1800, 1440],
  ["hf_20260715_145033_788705b7-4018-4ff2-aa2a-d70f5dfd3eb3.png", "news-skills-rehabilitation.webp", 1600, 1100],
  ["hf_20260715_144503_50928b5b-6e82-450c-b944-8518f6469070.png", "news-work-readiness.webp", 1600, 1100],
  ["hf_20260715_145105_7e136c4f-6440-47f6-a3c9-e0ecf6b6106e.png", "news-institutional-trust.webp", 1600, 1100],
];

await mkdir(outputDir, { recursive: true });

for (const [source, output, width, height] of assets) {
  let pipeline = sharp(path.join(sourceDir, source)).rotate();

  if (output === "highlight-institutional.webp") {
    pipeline = pipeline.extract({ left: 360, top: 0, width: 904, height: 848 });
  }

  await pipeline
    .resize({ width, height, fit: "cover", position: "attention", withoutEnlargement: true })
    .webp({ quality: 84, effort: 5 })
    .toFile(path.join(outputDir, output));
}

await sharp(path.join(sourceDir, "Founder.png"))
  .rotate()
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 92, alphaQuality: 100, effort: 6 })
  .toFile(path.join(outputDir, "founder.webp"));

await sharp(path.join(sourceDir, "hero-background.png"))
  .rotate()
  .resize({ width: 2400, withoutEnlargement: true })
  .webp({ quality: 88, effort: 6 })
  .toFile(path.join(outputDir, "hero-background.webp"));

console.log(`Imported ${assets.length + 2} images into ${outputDir}`);
