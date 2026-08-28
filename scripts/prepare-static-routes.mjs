import { mkdir, readFile, writeFile } from "node:fs/promises";

const routes = ["stiftungskartei"];

for (const route of routes) {
  const target = new URL(`../dist/${route}/`, import.meta.url);
  await mkdir(target, { recursive: true });
  const rootHtml = await readFile(
    new URL("../dist/index.html", import.meta.url),
    "utf8",
  );
  await writeFile(
    new URL("index.html", target),
    rootHtml.replaceAll("./assets/", "../assets/"),
  );
}

await writeFile(
  new URL("../dist/404.html", import.meta.url),
  `<!doctype html><meta charset="utf-8"><title>Projektarchiv</title><script>
    const base = location.hostname.endsWith("github.io") ? "/elbchen-archive/" : "/";
    location.replace(base);
  </script><p><a href="/">Zum Projektarchiv</a></p>`,
);
