import { mkdir, readFile, writeFile } from "node:fs/promises";

const routes = [
  { path: "stiftungskartei", assetPrefix: "../" },
  { path: "blog/herausforderungen-stiftungsrecherche", assetPrefix: "../../" },
  { path: "blog/foerderwerk-smarter-weg", assetPrefix: "../../" },
  { path: "blog/wir-laden-zur-beta-ein", assetPrefix: "../../" },
  { path: "blog/technik-insights-semantische-suche", assetPrefix: "../../" },
  { path: "blog/alex", assetPrefix: "../../" },
  { path: "blog/technik-insights-stiftungsdatenbank", assetPrefix: "../../" },
  { path: "blog/beta-test-insights", assetPrefix: "../../" },
  { path: "blog/social-startup", assetPrefix: "../../" },
];

for (const route of routes) {
  const target = new URL(`../dist/${route.path}/`, import.meta.url);
  await mkdir(target, { recursive: true });
  const rootHtml = await readFile(
    new URL("../dist/index.html", import.meta.url),
    "utf8",
  );
  await writeFile(
    new URL("index.html", target),
    rootHtml.replaceAll("./assets/", `${route.assetPrefix}assets/`),
  );
}

await writeFile(
  new URL("../dist/404.html", import.meta.url),
  `<!doctype html><meta charset="utf-8"><title>Projektarchiv</title><script>
    const base = location.hostname.endsWith("github.io") ? "/elbchen-archive/" : "/";
    location.replace(base);
  </script><p><a href="/">Zum Projektarchiv</a></p>`,
);
