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
    description: "Eine semantische Stiftungssuche mit drei Einstiegen und nachvollziehbaren Profilen für mehr als 12.000 deutsche Stiftungen.",
    technologies: ["Nuxt", "FastAPI", "Postgres", "Redis"], href: "./stiftungskartei/", linkLabel: "Fallstudie ansehen",
  },
  {
    number: "02", icon: "bot", kind: "KI-Arbeitsplatz", title: "Förderwerk",
    description: "Eine datenschutzorientierte Chat- und Arbeitsumgebung für NGOs, ergänzt um Recherche, Wissensspeicher und Fördermittel-Workflows.",
    technologies: ["LibreChat", "RAG", "MCP", "Docker"],
  },
  {
    number: "03", icon: "database", kind: "Datenpipeline", title: "Stiftungs-Sammler",
    description: "Die Recherche- und Verarbeitungspipeline hinter der Stiftungskartei: sammeln, extrahieren, strukturieren und für die Suche aufbereiten.",
    technologies: ["Python", "MongoDB", "Web Search", "LLMs"], href: "https://github.com/sichgeis/stiftungs-sammler", external: true, linkLabel: "Quellcode ansehen",
  },
];

export const journalEntries: JournalEntry[] = [
  { title: "Warum Stiftungssuche so aufwändig ist – und wie Stiftungskartei das ändert", author: "Janine", date: "18. Mai 2025", image: "janine.webp", source: "herausforderungen-stiftungsrecherche", excerpt: "Zersplitterte Verzeichnisse und unvollständige Informationen machten Stiftungsrecherche zur Detektivarbeit." },
  { title: "Förderwerk: Der smarte Weg zu Fördermitteln", author: "Hauke", date: "26. Mai 2025", image: "hauke.webp", source: "foerderwerk-smarter-weg", excerpt: "Die Produktvision hinter einem Werkzeugkasten für Recherche, Antragstellung und Reporting." },
  { title: "Wir laden ein zum Beta-Testing", author: "Christian", date: "2. Juni 2025", image: "christian.webp", source: "wir-laden-zur-beta-ein", excerpt: "Die Einladung, eine neue Form der Stiftungssuche gemeinsam mit uns zu testen." },
  { title: "Technik-Insights: Semantische Suche vs. klassische Schlagwortsuche", author: "Hauke", date: "9. Juni 2025", image: "hauke.webp", source: "technik-insights-semantische-suche", excerpt: "Warum Bedeutungsähnlichkeit hilfreicher sein kann als das Abgleichen einzelner Begriffe." },
  { title: "Alex – Unser KI-Marketeer bringt Stiftungskartei ins Gespräch", author: "Christian", date: "16. Juni 2025", image: "christian.webp", source: "alex", excerpt: "Ein Experiment mit einem digitalen Teammitglied für Recherche und Kontaktentwürfe." },
  { title: "Technik-Insights: So analysieren wir die deutsche Stiftungslandschaft", author: "Christian", date: "23. Juni 2025", image: "christian.webp", source: "technik-insights-stiftungsdatenbank", excerpt: "Vom öffentlichen Register bis zum strukturierten Steckbrief in der Datenbasis." },
  { title: "Von der Community lernen: Insights aus dem Beta-Test", author: "Christian", date: "30. Juni 2025", image: "christian.webp", source: "beta-test-insights", excerpt: "Was die Feedback-Runde über Suchgewohnheiten, Vertrauen und Produktführung zeigte." },
  { title: "Von der Idee zum Social Startup", author: "Christian", date: "8. Juli 2025", image: "christian.webp", source: "social-startup", excerpt: "Wie aus einer digitalen Produktidee ein wirkungsorientiertes Gründungsvorhaben wurde." },
];
