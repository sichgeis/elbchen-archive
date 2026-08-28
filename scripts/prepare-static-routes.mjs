import { copyFile, mkdir } from "node:fs/promises";

const routes = ["stiftungskartei"];

for (const route of routes) {
  const target = new URL(`../dist/${route}/`, import.meta.url);
  await mkdir(target, { recursive: true });
  await copyFile(
    new URL("../dist/index.html", import.meta.url),
    new URL("index.html", target),
  );
}

await copyFile(
  new URL("../dist/index.html", import.meta.url),
  new URL("../dist/404.html", import.meta.url),
);
