export type ProjectIcon = "search" | "bot" | "database";

export interface Project {
  number: string;
  icon: ProjectIcon;
  kind: string;
  title: string;
  description: string;
  technologies: string[];
  href?: string;
  external?: boolean;
  linkLabel?: string;
}

export interface JournalEntry {
  title: string;
  author: string;
  date: string;
  image: string;
  source: string;
  slug: string;
  topic: "Recherche" | "Produkt" | "Community" | "Technik" | "Wirkung";
  icon: "search" | "compass" | "users" | "sparkles" | "bot" | "database" | "rocket";
  readingTime: string;
  excerpt: string;
}

export const metrics = [
  { value: "12.000+", label: "Stiftungsprofile" },
  { value: "3", label: "Suchwege" },
  { value: "8", label: "Fachartikel" },
  { value: "2024–2026", label: "Projektzeitraum" },
];

export const projects: Project[] = [
  {
    number: "01", icon: "search", kind: "Rechercheprodukt", title: "Stiftungskartei",
    description: "Drei Suchwege und mehr als 12.000 aufbereitete Stiftungsprofile machten aus verstreuten Informationen eine übersichtliche Recherche.",
    technologies: ["Nuxt", "FastAPI", "Postgres", "Redis"], href: "./stiftungskartei/", linkLabel: "Fallstudie ansehen",
  },
  {
    number: "02", icon: "bot", kind: "KI-Arbeitsplatz", title: "Förderwerk",
    description: "Ein datenschutzorientierter KI-Arbeitsplatz, der Chat, eigenes Wissen und Werkzeuge für die Fördermittelarbeit an einem Ort zusammenbrachte.",
    technologies: ["LibreChat", "RAG", "MCP", "Docker"], href: "./foerderwerk/", linkLabel: "Rückblick ansehen",
  },
  {
    number: "03", icon: "database", kind: "Datenpipeline", title: "Stiftungs-Sammler",
    description: "Im Hintergrund sammelte der Stiftungs-Sammler öffentliche Informationen, prüfte Quellen und verwandelte Webseiten und PDFs in nutzbare Profile.",
    technologies: ["Python", "MongoDB", "Web Search", "LLMs"], href: "https://github.com/sichgeis/stiftungs-sammler", external: true, linkLabel: "Quellcode ansehen",
  },
];

export const journalEntries: JournalEntry[] = [
  { title: "Warum Stiftungssuche so aufwändig ist – und wie Stiftungskartei das ändert", author: "Janine", date: "18. Mai 2025", image: "janine.webp", source: "herausforderungen-stiftungsrecherche", slug: "herausforderungen-stiftungsrecherche", topic: "Recherche", icon: "search", readingTime: "8 Min. Lesezeit", excerpt: "Warum die Suche oft zur Detektivarbeit wird – und wie semantische Suche den Kontext eines Vorhabens einbezieht." },
  { title: "Förderwerk: Der smarte Weg zu Fördermitteln", author: "Hauke", date: "26. Mai 2025", image: "hauke.webp", source: "foerderwerk-smarter-weg", slug: "foerderwerk-smarter-weg", topic: "Produkt", icon: "compass", readingTime: "6 Min. Lesezeit", excerpt: "Die Vision eines Werkzeugkastens, der von der ersten Recherche bis zur Berichterstattung begleitet." },
  { title: "Wir laden ein zum Beta-Testing", author: "Christian", date: "2. Juni 2025", image: "christian.webp", source: "wir-laden-zur-beta-ein", slug: "wir-laden-zur-beta-ein", topic: "Community", icon: "users", readingTime: "6 Min. Lesezeit", excerpt: "Warum wir nicht im Elfenbeinturm entwickeln wollten und die Community früh zum Testen eingeladen haben." },
  { title: "Technik-Insights: Semantische Suche vs. klassische Schlagwortsuche", author: "Hauke", date: "9. Juni 2025", image: "hauke.webp", source: "technik-insights-semantische-suche", slug: "technik-insights-semantische-suche", topic: "Technik", icon: "sparkles", readingTime: "8 Min. Lesezeit", excerpt: "Wie eine Suche Bedeutungen, Zusammenhänge und ähnliche Begriffe erkennt – statt nur Wörter abzugleichen." },
  { title: "Alex – Unser KI-Marketeer bringt Stiftungskartei ins Gespräch", author: "Christian", date: "16. Juni 2025", image: "christian.webp", source: "alex", slug: "alex", topic: "Produkt", icon: "bot", readingTime: "6 Min. Lesezeit", excerpt: "Was wir aus einem digitalen Teammitglied für Recherche und persönliche Ansprache gelernt haben." },
  { title: "Technik-Insights: So analysieren wir die deutsche Stiftungslandschaft", author: "Christian", date: "23. Juni 2025", image: "christian.webp", source: "technik-insights-stiftungsdatenbank", slug: "technik-insights-stiftungsdatenbank", topic: "Technik", icon: "database", readingTime: "6 Min. Lesezeit", excerpt: "Wie aus verstreuten Webseiten, PDFs und Registern eine strukturierte Stiftungsdatenbank entstand." },
  { title: "Von der Community lernen: Insights aus dem Beta-Test", author: "Christian", date: "30. Juni 2025", image: "christian.webp", source: "beta-test-insights", slug: "beta-test-insights", topic: "Community", icon: "users", readingTime: "9 Min. Lesezeit", excerpt: "Was uns die erste Feedback-Runde über gute Suchergebnisse, klare Bedienung und fehlende Funktionen gezeigt hat." },
  { title: "Von der Idee zum Social Startup", author: "Christian", date: "8. Juli 2025", image: "christian.webp", source: "social-startup", slug: "social-startup", topic: "Wirkung", icon: "rocket", readingTime: "6 Min. Lesezeit", excerpt: "Warum Technologie für uns kein Selbstzweck war, sondern ein Werkzeug für mehr Teilhabe und Wirkung." },
];
