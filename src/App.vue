<script setup lang="ts">
import {
  Archive,
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Bot,
  Database,
  FileText,
  CodeXml,
  Layers3,
  Search,
  ServerCog,
  Sparkles,
} from "@lucide/vue";

const isCaseStudy = /\/stiftungskartei(?:\/|$)/.test(window.location.pathname);
const localBase = isCaseStudy ? "../" : "./";
const archivePath = (path: string) => `${localBase}archive/${path}`;

const blogPosts = [
  {
    title: "Warum Stiftungssuche so aufwändig ist – und wie Stiftungskartei das ändert",
    author: "Janine",
    date: "18. Mai 2025",
    image: "janine.webp",
    source: "herausforderungen-stiftungsrecherche",
    excerpt: "Zersplitterte Verzeichnisse, alte PDF-Berichte und unvollständige Informationen machten Stiftungsrecherche zu einer aufwändigen Detektivarbeit.",
  },
  {
    title: "Förderwerk: Der smarte Weg zu Fördermitteln",
    author: "Hauke",
    date: "26. Mai 2025",
    image: "hauke.webp",
    source: "foerderwerk-smarter-weg",
    excerpt: "Die Produktvision hinter einem Werkzeugkasten, der Recherche, Konzeptentwicklung, Antragstellung und Reporting miteinander verbinden sollte.",
  },
  {
    title: "Wir laden ein zum Beta-Testing",
    author: "Christian",
    date: "2. Juni 2025",
    image: "christian.webp",
    source: "wir-laden-zur-beta-ein",
    excerpt: "Die Einladung an Non-Profits, Vereine und Fördermittelberater*innen, die neue Form der Stiftungssuche gemeinsam mit uns zu testen.",
  },
  {
    title: "Technik-Insights: Semantische Suche vs. klassische Schlagwortsuche",
    author: "Hauke",
    date: "9. Juni 2025",
    image: "hauke.webp",
    source: "technik-insights-semantische-suche",
    excerpt: "Warum Bedeutungsähnlichkeit bei komplexen Stiftungszwecken hilfreicher sein kann als das bloße Abgleichen einzelner Suchbegriffe.",
  },
  {
    title: "Alex – Unser KI-Marketeer bringt Stiftungskartei ins Gespräch",
    author: "Christian",
    date: "16. Juni 2025",
    image: "christian.webp",
    source: "alex",
    excerpt: "Ein Experiment mit einem digitalen Teammitglied, das Organisationen recherchierte und individuelle Kontaktentwürfe vorbereitete.",
  },
  {
    title: "Technik-Insights: So analysieren wir die deutsche Stiftungslandschaft",
    author: "Christian",
    date: "23. Juni 2025",
    image: "christian.webp",
    source: "technik-insights-stiftungsdatenbank",
    excerpt: "Vom öffentlichen Register über Web-Recherche und Textanalyse bis zum strukturierten Steckbrief in einer durchsuchbaren Datenbasis.",
  },
  {
    title: "Von der Community lernen: Insights aus dem Beta-Test",
    author: "Christian",
    date: "30. Juni 2025",
    image: "christian.webp",
    source: "beta-test-insights",
    excerpt: "Was die erste größere Feedback-Runde über Suchgewohnheiten, Vertrauen, Nachvollziehbarkeit und die Produktführung gezeigt hat.",
  },
  {
    title: "Von der Idee zum Social Startup",
    author: "Christian",
    date: "8. Juli 2025",
    image: "christian.webp",
    source: "social-startup",
    excerpt: "Ein Blick hinter die Kulissen: Wie aus einer digitalen Produktidee ein wirkungsorientiertes Gründungsvorhaben wurde.",
  },
];

const screenshots = [
  {
    src: archivePath("screenshots/foerderwerk-home.png"),
    title: "Förderwerk",
    caption: "Landing Page, Produktangebot und KI-Arbeitsplatz",
  },
  {
    src: archivePath("screenshots/stiftungskartei-home.png"),
    title: "Stiftungskartei",
    caption: "KI-Suche, Direkt-Suche und Profi-Suche",
  },
  {
    src: archivePath("screenshots/stiftungskartei-search.png"),
    title: "Suchergebnisse",
    caption: "Priorisierte Treffer mit Themen, Zielgruppen und Projekten",
  },
  {
    src: archivePath("screenshots/stiftungskartei-foundation-detail.png"),
    title: "Stiftungsprofil",
    caption: "Strukturierter Steckbrief mit Quellen und Antragsinformationen",
  },
];
</script>

<template>
  <a class="skip-link" href="#main-content">Zum Inhalt springen</a>

  <header class="site-header">
    <a class="wordmark" :href="localBase" aria-label="Förderwerk Projektarchiv">
      <span class="wordmark-mark" aria-hidden="true">F</span>
      <span>Förderwerk Archiv</span>
    </a>
    <nav v-if="!isCaseStudy" aria-label="Hauptnavigation">
      <a href="#projekte">Projekte</a>
      <a href="#galerie">Galerie</a>
      <a href="#journal">Journal</a>
      <a href="#archiv">Archiv</a>
    </nav>
    <a v-else class="back-link" :href="localBase"><ArrowLeft :size="17" /> Zur Übersicht</a>
  </header>

  <main id="main-content">
    <template v-if="!isCaseStudy">
      <section class="hero">
        <div class="status-pill"><Archive :size="16" /> Projektarchiv · 2024–2026</div>
        <p class="eyebrow">Digitale Werkzeuge für gemeinnützige Organisationen</p>
        <h1>Was wir gebaut haben.<br /><span>Und was davon bleibt.</span></h1>
        <p class="hero-copy">
          Förderwerk und Stiftungskartei waren ein unabhängiges Produktvorhaben für
          bessere Fördermittelrecherche, Antragstellung und Wissensarbeit. Das aktive
          Angebot ist eingestellt. Dieses Archiv bewahrt die Produkte, Ideen und
          Erkenntnisse hinter dem Projekt.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#projekte">
            Projekte erkunden <ArrowDown :size="18" />
          </a>
          <a class="button secondary" href="#galerie">Zum visuellen Archiv</a>
        </div>
      </section>

      <section class="fact-strip" aria-label="Projekt in Zahlen">
        <div><strong>12.000+</strong><span>Stiftungsprofile</span></div>
        <div><strong>3</strong><span>Suchwege</span></div>
        <div><strong>8</strong><span>Fachartikel</span></div>
        <div><strong>4</strong><span>Produktservices</span></div>
      </section>

      <section class="open-source-band" aria-labelledby="open-source-title">
        <div>
          <p class="section-label">Jetzt Open Source</p>
          <h2 id="open-source-title">Der Betrieb endet. Der Code bleibt zugänglich.</h2>
        </div>
        <div class="open-source-copy">
          <p>
            Stiftungskartei und die zugehörige Datenpipeline Stiftungs-Sammler sind
            als bereinigte Archivfassungen unter Apache-2.0 veröffentlicht. Beide
            Repositories enthalten lokale Startanleitungen und fiktive Beispieldaten.
          </p>
          <div class="source-actions">
            <a class="button primary" href="https://github.com/sichgeis/stiftungskartei" target="_blank" rel="noreferrer">
              <CodeXml :size="18" /> Stiftungskartei auf GitHub
            </a>
            <a class="button secondary" href="https://github.com/sichgeis/stiftungs-sammler" target="_blank" rel="noreferrer">
              <CodeXml :size="18" /> Stiftungs-Sammler
            </a>
          </div>
        </div>
      </section>

      <section id="projekte" class="section project-section">
        <div class="section-heading">
          <p class="section-label">Zwei Produkte, eine Mission</p>
          <h2>Fördermittelbeschaffung zugänglicher machen.</h2>
          <p>
            Das Vorhaben verband Produktdesign, Datenarbeit und KI-gestützte Recherche
            zu einem Werkzeugkasten für kleine Organisationen und Vereine.
          </p>
        </div>

        <div class="project-grid">
          <article class="project-card project-card-featured">
            <div class="project-number">01</div>
            <div class="project-icon"><Search :size="28" /></div>
            <p class="project-kicker">Rechercheprodukt</p>
            <h3>Stiftungskartei</h3>
            <p>
              Semantische Stiftungssuche mit KI-gestützter Organisationsrecherche,
              Direkt-Suche, Profi-Filtern und detaillierten Stiftungsprofilen.
            </p>
            <ul class="tag-list">
              <li>Nuxt</li><li>FastAPI</li><li>Postgres</li><li>Redis</li>
            </ul>
            <a class="text-link" href="./stiftungskartei/">
              Fallstudie öffnen <ArrowUpRight :size="18" />
            </a>
          </article>

          <article class="project-card">
            <div class="project-number">02</div>
            <div class="project-icon"><Bot :size="28" /></div>
            <p class="project-kicker">KI-Arbeitsplatz</p>
            <h3>Förderwerk</h3>
            <p>
              Eine datenschutzorientierte Chat- und Arbeitsumgebung für NGOs, ergänzt
              um Recherche, Wissensspeicher und spezialisierte Fördermittel-Workflows.
            </p>
            <ul class="tag-list">
              <li>LibreChat</li><li>RAG</li><li>MCP</li><li>Docker</li>
            </ul>
          </article>

          <article class="project-card">
            <div class="project-number">03</div>
            <div class="project-icon"><Database :size="28" /></div>
            <p class="project-kicker">Datenpipeline</p>
            <h3>Stiftungs-Sammler</h3>
            <p>
              Recherche- und Verarbeitungspipeline, die öffentliche Stiftungsdaten
              sammelte, Inhalte extrahierte, strukturierte und für die Suche aufbereitete.
            </p>
            <ul class="tag-list">
              <li>Python</li><li>MongoDB</li><li>Web Search</li><li>LLMs</li>
            </ul>
            <a class="text-link" href="https://github.com/sichgeis/stiftungs-sammler" target="_blank" rel="noreferrer">
              Quellcode öffnen <ArrowUpRight :size="18" />
            </a>
          </article>
        </div>
      </section>

      <section class="case-study-preview">
        <div class="case-copy">
          <p class="section-label">Fallstudie 01</p>
          <h2>Stiftungskartei</h2>
          <p class="case-tagline">Smart suchen, mehr wirken.</p>
          <p>
            Die Web-App übersetzte den Kontext einer Organisation und ihres Vorhabens
            in eine semantische Suche. Ergebnisse wurden nicht nur gelistet, sondern
            als strukturierte, nachvollziehbare Stiftungsprofile aufbereitet.
          </p>
          <a class="text-link" href="./stiftungskartei/">
            Produkt, Prozess und Architektur <ArrowUpRight :size="18" />
          </a>
        </div>
        <a class="product-frame" :href="archivePath('screenshots/stiftungskartei-home.png')">
          <img
            :src="archivePath('screenshots/stiftungskartei-home.png')"
            alt="Die ehemalige Startseite der Stiftungskartei"
          />
        </a>
      </section>

      <section id="galerie" class="section gallery-section">
        <div class="section-heading compact">
          <p class="section-label">Visuelles Archiv</p>
          <h2>Das Produkt in seinem letzten öffentlichen Stand.</h2>
          <p>
            Aufgenommen am 28. August 2026 vor der Umstellung auf dieses Archiv.
            Die Abbildungen zeigen echte öffentliche Produktzustände mit neutralen Suchdaten.
          </p>
        </div>
        <div class="gallery-grid">
          <figure v-for="(shot, index) in screenshots" :key="shot.src" :class="{ wide: index === 0 }">
            <a :href="shot.src">
              <img :src="shot.src" :alt="shot.caption" loading="lazy" />
            </a>
            <figcaption><strong>{{ shot.title }}</strong><span>{{ shot.caption }}</span></figcaption>
          </figure>
        </div>
      </section>

      <section class="architecture-band">
        <div class="section-heading compact light">
          <p class="section-label">Systemgedanke</p>
          <h2>Von unstrukturierten Quellen zu erklärbaren Treffern.</h2>
        </div>
        <div class="flow" aria-label="Vereinfachter Datenfluss">
          <div class="flow-node"><FileText :size="25" /><strong>Öffentliche Quellen</strong><span>Register, Websites, PDFs</span></div>
          <span class="flow-arrow">→</span>
          <div class="flow-node"><Sparkles :size="25" /><strong>Aufbereitung</strong><span>Extraktion, Analyse, Strukturierung</span></div>
          <span class="flow-arrow">→</span>
          <div class="flow-node"><Database :size="25" /><strong>Datenbasis</strong><span>Profile und Vektorsuche</span></div>
          <span class="flow-arrow">→</span>
          <div class="flow-node"><Search :size="25" /><strong>Produkt</strong><span>Suche, Matching, Steckbriefe</span></div>
        </div>
      </section>

      <section id="journal" class="section journal-section">
        <div class="section-heading compact">
          <p class="section-label">Produktjournal · 2025</p>
          <h2>Acht Notizen aus Entwicklung und Beta-Test.</h2>
          <p>
            Das Journal dokumentierte Problemverständnis, Technologieentscheidungen
            und Erkenntnisse aus der Zusammenarbeit mit der Community.
          </p>
        </div>
        <div class="journal-grid">
          <article v-for="post in blogPosts" :key="post.title" class="journal-card">
            <div class="author-line">
              <img :src="archivePath(`authors/${post.image}`)" :alt="`Portrait von ${post.author}`" />
              <span>{{ post.author }} · {{ post.date }}</span>
            </div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <a
              class="archived-label"
              :href="archivePath(`journal-source/${post.source}.vue.txt`)"
            >
              <Archive :size="14" /> Originaltext im Quellarchiv
            </a>
          </article>
        </div>
      </section>

      <section class="section timeline-section">
        <div class="section-heading compact">
          <p class="section-label">Chronik</p>
          <h2>Von der Produktidee zum öffentlichen Archiv.</h2>
        </div>
        <ol class="timeline">
          <li><time>2024</time><div><h3>Elbchen entsteht</h3><p>Erste Web-App, Recherche-Workflows und ein KI-Arbeitsplatz auf Basis von Open WebUI.</p></div></li>
          <li><time>Frühjahr 2025</time><div><h3>Fokus auf Stiftungssuche</h3><p>Stiftungs-Sammler, Matching-Service und die erste Stiftungskartei werden zusammengeführt.</p></div></li>
          <li><time>Sommer 2025</time><div><h3>Öffentliche Beta</h3><p>Drei Suchwege, Fachjournal, Feedback-Runden und über 12.000 aufbereitete Stiftungsprofile.</p></div></li>
          <li><time>Ende 2025</time><div><h3>Werkzeuge werden integrierbar</h3><p>REST- und MCP-Schnittstellen verbinden Stiftungskartei und Förderdatenbank mit dem KI-Arbeitsplatz.</p></div></li>
          <li><time>2026</time><div><h3>Bewusst beendet, dauerhaft dokumentiert</h3><p>Die laufenden Dienste werden durch ein statisches, wartungsarmes Projektarchiv ersetzt.</p></div></li>
        </ol>
      </section>

      <section id="archiv" class="retirement-section">
        <div>
          <p class="section-label">Status</p>
          <h2>Das Angebot ist eingestellt.<br />Die Arbeit bleibt sichtbar.</h2>
        </div>
        <div>
          <p>
            Förderwerk, Stiftungskartei und die zugehörigen Online-Dienste werden nicht
            mehr aktiv betrieben. Es werden keine neuen Registrierungen, Suchaufträge
            oder Newsletter-Anmeldungen angenommen.
          </p>
          <p>
            Dieses statische Archiv dient ausschließlich der Dokumentation und als
            Portfolio früherer Produkt- und Entwicklungsarbeit.
          </p>
        </div>
      </section>
    </template>

    <template v-else>
      <section class="case-hero">
        <p class="eyebrow">Produktfallstudie · 2025–2026</p>
        <h1><span>Stiftungskartei.</span><br />Smart suchen, mehr wirken.</h1>
        <p class="hero-copy">
          Eine KI-gestützte Suchmaschine, die den Kontext gemeinnütziger Organisationen
          mit einer strukturierten Datenbasis von mehr als 12.000 deutschen Stiftungen
          zusammenbrachte.
        </p>
        <div class="case-meta">
          <div><span>Rolle</span><strong>Produkt, UX, Data & Engineering</strong></div>
          <div><span>Phase</span><strong>Öffentliche Beta</strong></div>
          <div><span>Status</span><strong>Seit 2026 archiviert</strong></div>
        </div>
        <div class="hero-actions case-source-actions">
          <a class="button primary" href="https://github.com/sichgeis/stiftungskartei" target="_blank" rel="noreferrer">
            <CodeXml :size="18" /> Open-Source-Projekt
          </a>
          <a class="button secondary" href="https://github.com/sichgeis/stiftungs-sammler" target="_blank" rel="noreferrer">
            Datenpipeline ansehen <ArrowUpRight :size="17" />
          </a>
        </div>
      </section>

      <section class="case-cover">
        <img :src="archivePath('screenshots/stiftungskartei-home.png')" alt="Startseite der Stiftungskartei" />
      </section>

      <section class="section narrative-grid">
        <div>
          <p class="section-label">Ausgangslage</p>
          <h2>Recherche kostete Zeit, bevor die eigentliche Arbeit begann.</h2>
        </div>
        <div class="narrative-copy">
          <p>
            Stiftungsinformationen waren über Register, Webseiten und Dokumente verteilt.
            Klassische Datenbanken verlangten passendes Vokabular und viel manuelle
            Vorqualifizierung – eine hohe Hürde für kleine Organisationen.
          </p>
          <blockquote>
            Wie kann eine Organisation beschreiben, was sie bewirken will, statt erst
            die richtige Suchsprache lernen zu müssen?
          </blockquote>
        </div>
      </section>

      <section class="feature-band">
        <article><Search :size="28" /><h3>Drei Einstiege</h3><p>KI-Suche, direkte Namenssuche und präzise Profi-Filter für unterschiedliche Recherchegewohnheiten.</p></article>
        <article><Sparkles :size="28" /><h3>Semantisches Matching</h3><p>Mission, Zielgruppen, Vorhaben und Region wurden mit dem inhaltlichen Profil von Stiftungen verglichen.</p></article>
        <article><FileText :size="28" /><h3>Erklärbare Profile</h3><p>Treffer führten zu Steckbriefen mit Themen, Projekten, Kontakten, Antragsmöglichkeiten und Quellen.</p></article>
      </section>

      <section class="section product-walkthrough">
        <div class="walkthrough-copy">
          <p class="section-label">01 · Finden</p>
          <h2>Von einem Namen zu einer überschaubaren Vorauswahl.</h2>
          <p>
            Die direkte Suche lieferte kompakte Ergebnisprofile. Relevante Themen,
            Zielgruppen und Beispiele wurden unmittelbar sichtbar, ohne jede Stiftung
            einzeln öffnen zu müssen.
          </p>
        </div>
        <a class="walkthrough-image" :href="archivePath('screenshots/stiftungskartei-search.png')">
          <img :src="archivePath('screenshots/stiftungskartei-search.png')" alt="Suchergebnisliste der Stiftungskartei" loading="lazy" />
        </a>
      </section>

      <section class="section product-walkthrough reversed">
        <div class="walkthrough-copy">
          <p class="section-label">02 · Verstehen</p>
          <h2>Struktur statt Linkliste.</h2>
          <p>
            Detailseiten bündelten Stiftungszweck, Zielgruppen, Projekte, geografische
            Einschränkungen, Kontakt- und Antragsmöglichkeiten sowie die verwendeten
            Quellen in einem einheitlichen Format.
          </p>
        </div>
        <a class="walkthrough-image detail" :href="archivePath('screenshots/stiftungskartei-foundation-detail.png')">
          <img :src="archivePath('screenshots/stiftungskartei-foundation-detail.png')" alt="Detailprofil einer Stiftung" loading="lazy" />
        </a>
      </section>

      <section class="architecture-band case-architecture">
        <div class="section-heading compact light">
          <p class="section-label">Technische Architektur</p>
          <h2>Vier spezialisierte Services, ein durchgängiger Recherchefluss.</h2>
        </div>
        <div class="service-grid">
          <div><Layers3 :size="26" /><strong>Nuxt Frontend</strong><span>SSR, Suchoberfläche, Profile und Journal</span></div>
          <div><ServerCog :size="26" /><strong>FastAPI</strong><span>REST API, MCP-Schnittstelle und Orchestrierung</span></div>
          <div><Database :size="26" /><strong>Postgres</strong><span>Strukturierte Stiftungs- und Organisationsdaten</span></div>
          <div><Sparkles :size="26" /><strong>Redis Vector Search</strong><span>Embedding-basiertes Matching und Ranking</span></div>
        </div>
        <ul class="stack-list">
          <li>Vue / Nuxt</li><li>TypeScript</li><li>Python</li><li>FastAPI</li>
          <li>Postgres</li><li>Redis</li><li>OpenAI</li><li>MCP</li>
          <li>Docker</li><li>GitLab CI</li><li>Portainer</li>
        </ul>
      </section>

      <section class="section lessons-section">
        <div class="section-heading compact">
          <p class="section-label">Was die Fallstudie zeigt</p>
          <h2>Produktarbeit an der Schnittstelle von Daten, KI und Vertrauen.</h2>
        </div>
        <div class="lesson-grid">
          <article><span>01</span><h3>KI braucht eine überprüfbare Informationsstruktur.</h3><p>Gute Treffer allein reichen nicht. Quellen, Kriterien und Detailinformationen müssen nachvollziehbar bleiben.</p></article>
          <article><span>02</span><h3>Ein Suchprodukt braucht mehrere mentale Modelle.</h3><p>Manche Menschen beginnen mit ihrer Organisation, andere mit einem Stiftungsnamen oder konkreten Filtern.</p></article>
          <article><span>03</span><h3>Datenqualität ist selbst ein Produkt.</h3><p>Das Sammeln, Bereinigen und Aktualisieren von Stiftungsinformationen war ein zentraler Teil des Nutzerwerts.</p></article>
        </div>
      </section>

      <section class="retirement-section case-end">
        <div>
          <p class="section-label">Ende der Fallstudie</p>
          <h2>Stiftungskartei ist heute ein dokumentiertes Produktkapitel.</h2>
        </div>
        <div>
          <p>
            Die interaktive Suche und ihre APIs werden stillgelegt. Die hier gezeigten
            Aufnahmen bewahren den letzten öffentlichen Stand; der bereinigte Code und
            fiktive Beispieldaten bleiben als Open-Source-Projekt verfügbar.
          </p>
          <a class="button primary" href="https://github.com/sichgeis/stiftungskartei" target="_blank" rel="noreferrer"><CodeXml :size="17" /> Quellcode auf GitHub</a>
          <a class="button primary" :href="localBase">Zurück zum Projektarchiv <ArrowUpRight :size="17" /></a>
        </div>
      </section>
    </template>
  </main>

  <footer>
    <div>
      <strong>Förderwerk Projektarchiv</strong>
      <p>Das operative Angebot ist eingestellt.</p>
    </div>
    <div class="footer-links">
      <a href="https://github.com/sichgeis" target="_blank" rel="noreferrer">Kontakt auf GitHub</a>
      <details>
        <summary>Impressum</summary>
        <p>Geisler Software Consulting<br />Dr. Christian Geisler<br />Goethe-Allee 5<br />37073 Göttingen</p>
      </details>
    </div>
  </footer>
</template>
