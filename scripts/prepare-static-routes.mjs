import { mkdir, readFile, writeFile } from "node:fs/promises";

const siteName = "Förderwerk Projektarchiv";
const defaultImage = "https://foerderwerk.org/og.png";

const routes = [
  {
    path: "stiftungskartei",
    assetPrefix: "../",
    title: "Stiftungskartei – Produktfallstudie & Open Source | Förderwerk Archiv",
    description: "Die Stiftungskartei als Produktfallstudie: KI-gestützte Stiftungssuche, Screenshots, Screencast, Architektur und offen verfügbarer Quellcode.",
    socialTitle: "Stiftungskartei – KI-Suche, Produktfallstudie & Open Source",
    socialDescription: "Wie die Stiftungskartei passende Förderstiftungen auffindbar machte – mit Produkttour, Architektur, Screencast und offenem Quellcode.",
    image: "https://foerderwerk.org/og-stiftungskartei.png",
    imageAlt: "Stiftungskartei – Smart suchen, mehr wirken",
  },
  {
    path: "foerderwerk",
    assetPrefix: "../",
    title: "Förderwerk KI-Arbeitsplatz – Rückblick | Förderwerk Archiv",
    description: "Ein Rückblick auf den Förderwerk KI-Arbeitsplatz für gemeinnützige Organisationen – mit Produktansicht, Einordnung und Hinweis zur Einstellung.",
    socialTitle: "Förderwerk – der archivierte KI-Arbeitsplatz",
    socialDescription: "Wie Förderwerk Chat, eigenes Wissen und Werkzeuge für die Fördermittelarbeit zusammenbrachte.",
  },
  {
    path: "blog/herausforderungen-stiftungsrecherche",
    assetPrefix: "../../",
    title: "Warum Stiftungssuche so aufwändig ist | Förderwerk Journal",
    description: "Warum die Suche nach Förderstiftungen oft zur Detektivarbeit wird – und wie semantische Suche den Kontext eines Vorhabens einbezieht.",
  },
  {
    path: "blog/foerderwerk-smarter-weg",
    assetPrefix: "../../",
    title: "Förderwerk: Der smarte Weg zu Fördermitteln | Produktjournal",
    description: "Die Vision eines digitalen Werkzeugkastens, der gemeinnützige Organisationen von der ersten Recherche bis zur Berichterstattung begleitet.",
  },
  {
    path: "blog/wir-laden-zur-beta-ein",
    assetPrefix: "../../",
    title: "Wir laden ein zum Beta-Testing | Förderwerk Journal",
    description: "Warum wir Stiftungskartei gemeinsam mit der Community entwickeln und Nutzerinnen und Nutzer früh zum Testen eingeladen haben.",
  },
  {
    path: "blog/technik-insights-semantische-suche",
    assetPrefix: "../../",
    title: "Semantische Suche vs. Schlagwortsuche | Technik-Insights",
    description: "Wie eine semantische Suche Bedeutungen, Zusammenhänge und ähnliche Begriffe erkennt, statt ausschließlich Wörter abzugleichen.",
  },
  {
    path: "blog/alex",
    assetPrefix: "../../",
    title: "Alex – unser KI-Marketeer | Förderwerk Journal",
    description: "Was wir aus einem digitalen Teammitglied für Recherche und persönliche Ansprache rund um Stiftungskartei gelernt haben.",
  },
  {
    path: "blog/technik-insights-stiftungsdatenbank",
    assetPrefix: "../../",
    title: "So analysierten wir die deutsche Stiftungslandschaft",
    description: "Wie aus verstreuten Webseiten, PDFs und Registern die strukturierte Datenbasis der Stiftungskartei entstand.",
  },
  {
    path: "blog/beta-test-insights",
    assetPrefix: "../../",
    title: "Von der Community lernen: Insights aus dem Beta-Test",
    description: "Was uns die erste Feedback-Runde zu Stiftungskartei über gute Suchergebnisse, klare Bedienung und fehlende Funktionen gezeigt hat.",
  },
  {
    path: "blog/social-startup",
    assetPrefix: "../../",
    title: "Von der Idee zum Social Startup | Förderwerk Journal",
    description: "Warum Technologie für Förderwerk kein Selbstzweck war, sondern ein Werkzeug für mehr Teilhabe und Wirkung.",
  },
];

const escapeAttribute = (value) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");

const escapeText = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

function setMetaContent(html, attribute, key, value) {
  return html.replace(/<meta\b[^>]*>/gi, (tag) => {
    if (!tag.includes(`${attribute}="${key}"`)) return tag;
    return tag.replace(/content="[^"]*"/, `content="${escapeAttribute(value)}"`);
  });
}

function setRouteMetadata(html, route) {
  const url = `https://foerderwerk.org/${route.path}/`;
  const title = route.title;
  const socialTitle = route.socialTitle ?? title.replace(` | ${siteName}`, "");
  const socialDescription = route.socialDescription ?? route.description;
  const image = route.image ?? defaultImage;
  const imageAlt = route.imageAlt ?? "Förderwerk Projektarchiv – Was wir gebaut haben und was davon bleibt";

  let result = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeText(title)}</title>`,
  );
  result = result.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />`,
  );
  result = setMetaContent(result, "name", "title", title);
  result = setMetaContent(result, "name", "description", route.description);
  result = setMetaContent(result, "property", "og:url", url);
  result = setMetaContent(result, "property", "og:title", socialTitle);
  result = setMetaContent(result, "property", "og:description", socialDescription);
  result = setMetaContent(result, "property", "og:image", image);
  result = setMetaContent(result, "property", "og:image:alt", imageAlt);
  result = setMetaContent(result, "name", "twitter:url", url);
  result = setMetaContent(result, "name", "twitter:title", socialTitle);
  result = setMetaContent(result, "name", "twitter:description", socialDescription);
  result = setMetaContent(result, "name", "twitter:image", image);
  result = setMetaContent(result, "name", "twitter:image:alt", imageAlt);
  return result;
}

for (const route of routes) {
  const target = new URL(`../dist/${route.path}/`, import.meta.url);
  await mkdir(target, { recursive: true });
  const rootHtml = await readFile(
    new URL("../dist/index.html", import.meta.url),
    "utf8",
  );
  await writeFile(
    new URL("index.html", target),
    setRouteMetadata(rootHtml, route).replaceAll(
      "./assets/",
      `${route.assetPrefix}assets/`,
    ),
  );
}

await writeFile(
  new URL("../dist/404.html", import.meta.url),
  `<!doctype html><meta charset="utf-8"><title>Projektarchiv</title><script>
    const base = location.hostname.endsWith("github.io") ? "/elbchen-archive/" : "/";
    location.replace(base);
  </script><p><a href="/">Zum Projektarchiv</a></p>`,
);
