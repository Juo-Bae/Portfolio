import { readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const projectsDir = path.join(rootDir, "public", "media", "projects");
const outputFile = path.join(rootDir, "src", "projectMedia.generated.js");

const supportedImageExts = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);
const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

const isImageFile = (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  return supportedImageExts.has(ext) && statSync(filePath).isFile();
};

const folderEntries = readdirSync(projectsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort(collator.compare);

const projectMediaMap = Object.fromEntries(
  folderEntries.map((folderName) => {
    const folderPath = path.join(projectsDir, folderName);
    const files = readdirSync(folderPath, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((fileName) => isImageFile(path.join(folderPath, fileName)))
      .sort(collator.compare)
      .map((fileName) => `/media/projects/${folderName}/${fileName}`);

    return [folderName, files];
  }),
);

const output = `export const projectMediaMap = ${JSON.stringify(projectMediaMap, null, 2)};\n`;

writeFileSync(outputFile, output, "utf8");

const fileCount = Object.values(projectMediaMap).reduce(
  (count, files) => count + files.length,
  0,
);

console.log(
  `Generated project media manifest for ${folderEntries.length} folders and ${fileCount} files.`,
);
