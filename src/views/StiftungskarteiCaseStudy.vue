<script setup lang="ts">
import { ArrowUpRight, CodeXml, Database, FileText, Layers3, Search, ServerCog, Sparkles } from "@lucide/vue";
defineProps<{ homeHref: string; archivePath: (path: string) => string }>();
</script>

<template>
  <section class="case-hero page-width">
    <p class="eyebrow">Produktfallstudie · 2025–2026</p>
    <h1>Stiftungskartei.<br /><span>Smart suchen, mehr wirken.</span></h1>
    <p class="hero-copy">Eine KI-gestützte Suchmaschine, die den Kontext gemeinnütziger Organisationen mit einer strukturierten Datenbasis von mehr als 12.000 deutschen Stiftungen verband.</p>
    <div class="case-meta">
      <div><span>Rolle</span><strong>Produkt, UX, Data & Engineering</strong></div>
      <div><span>Phase</span><strong>Öffentliche Beta</strong></div>
      <div><span>Status</span><strong>Seit 2026 archiviert</strong></div>
    </div>
    <div class="hero-actions">
      <a class="button primary" href="https://github.com/sichgeis/stiftungskartei" target="_blank" rel="noreferrer"><CodeXml :size="18" /> Open-Source-Projekt</a>
      <a class="button secondary" href="https://github.com/sichgeis/stiftungs-sammler" target="_blank" rel="noreferrer">Datenpipeline ansehen <ArrowUpRight :size="17" /></a>
    </div>
  </section>

  <section class="case-cover page-width"><img :src="archivePath('screenshots/stiftungskartei-home.png')" alt="Startseite der Stiftungskartei" /></section>

  <section class="case-narrative content-section page-width">
    <div><p class="section-label">Ausgangslage</p><h2>Recherche kostete Zeit, bevor die eigentliche Arbeit begann.</h2></div>
    <div class="narrative-copy"><p>Stiftungsinformationen waren über Register, Webseiten und Dokumente verteilt. Klassische Datenbanken verlangten passendes Vokabular und viel manuelle Vorqualifizierung – eine hohe Hürde für kleine Organisationen.</p><blockquote>Wie kann eine Organisation beschreiben, was sie bewirken will, statt erst die richtige Suchsprache lernen zu müssen?</blockquote></div>
  </section>

  <section class="feature-line page-width" aria-label="Produktmerkmale">
    <article><Search :size="24" /><div><h3>Drei Einstiege</h3><p>KI-Suche, Namenssuche und Profi-Filter.</p></div></article>
    <article><Sparkles :size="24" /><div><h3>Semantisches Matching</h3><p>Mission, Zielgruppen, Vorhaben und Region.</p></div></article>
    <article><FileText :size="24" /><div><h3>Erklärbare Profile</h3><p>Kontakte, Projekte, Antragswege und Quellen.</p></div></article>
  </section>

  <section class="content-section page-width screencast-section">
    <div class="section-intro compact"><p class="section-label">Produkt in Bewegung</p><h2>Ein letzter Rundgang durch die Stiftungskartei.</h2><p>Die Aufnahme zeigt öffentliche Produktzustände mit neutralen Stiftungsdaten – ohne Accounts oder Nutzerdaten.</p></div>
    <div class="video-frame"><video controls preload="metadata" :poster="archivePath('screenshots/stiftungskartei-home.png')" :src="archivePath('video/stiftungskartei-screencast.webm')" aria-label="Stiller Rundgang durch die archivierte Stiftungskartei"></video></div>
  </section>

  <section class="walkthrough content-section page-width">
    <div class="walkthrough-copy"><p class="section-label">01 · Finden</p><h2>Von einem Namen zu einer überschaubaren Vorauswahl.</h2><p>Die direkte Suche zeigte relevante Themen, Zielgruppen und Beispiele unmittelbar in kompakten Ergebnisprofilen.</p></div>
    <a class="screenshot-frame" :href="archivePath('screenshots/stiftungskartei-search.png')"><img :src="archivePath('screenshots/stiftungskartei-search.png')" alt="Suchergebnisliste der Stiftungskartei" loading="lazy" /></a>
  </section>

  <section class="walkthrough reverse content-section page-width">
    <div class="walkthrough-copy"><p class="section-label">02 · Verstehen</p><h2>Struktur statt Linkliste.</h2><p>Detailseiten bündelten Stiftungszweck, Zielgruppen, Projekte, geografische Einschränkungen, Kontakte, Antragsmöglichkeiten und Quellen.</p></div>
    <a class="screenshot-frame tall" :href="archivePath('screenshots/stiftungskartei-foundation-detail.png')"><img :src="archivePath('screenshots/stiftungskartei-foundation-detail.png')" alt="Detailprofil einer Stiftung" loading="lazy" /></a>
  </section>

  <section class="architecture-section">
    <div class="page-width">
      <div class="section-intro compact"><p class="section-label">Technische Architektur</p><h2>Vier Services, ein durchgängiger Recherchefluss.</h2></div>
      <div class="architecture-flow">
        <div><Layers3 :size="24" /><strong>Nuxt Frontend</strong><span>Suche und Profile</span></div><b aria-hidden="true">→</b>
        <div><ServerCog :size="24" /><strong>FastAPI</strong><span>API und Orchestrierung</span></div><b aria-hidden="true">→</b>
        <div><Database :size="24" /><strong>Postgres</strong><span>Stiftungsdaten</span></div><b aria-hidden="true">→</b>
        <div><Sparkles :size="24" /><strong>Redis Vector Search</strong><span>Matching und Ranking</span></div>
      </div>
      <ul class="stack-list" aria-label="Technologien"><li>Vue / Nuxt</li><li>TypeScript</li><li>Python</li><li>FastAPI</li><li>Postgres</li><li>Redis</li><li>OpenAI</li><li>MCP</li><li>Docker</li></ul>
    </div>
  </section>

  <section class="content-section page-width lessons-section">
    <div class="section-intro compact"><p class="section-label">Was die Fallstudie zeigt</p><h2>Produktarbeit an der Schnittstelle von Daten, KI und Vertrauen.</h2></div>
    <ol class="lesson-list">
      <li><span>01</span><h3>KI braucht überprüfbare Informationsstrukturen.</h3><p>Treffer müssen durch Quellen, Kriterien und Details nachvollziehbar bleiben.</p></li>
      <li><span>02</span><h3>Ein Suchprodukt braucht mehrere mentale Modelle.</h3><p>Menschen beginnen mit ihrer Organisation, einem Namen oder konkreten Filtern.</p></li>
      <li><span>03</span><h3>Datenqualität ist selbst ein Produkt.</h3><p>Sammeln, Bereinigen und Aktualisieren waren ein zentraler Teil des Nutzerwerts.</p></li>
    </ol>
  </section>

  <section class="case-end">
    <div class="page-width"><p class="section-label">Open Source</p><h2>Ein dokumentiertes Produktkapitel.<br />Offen für die Zukunft.</h2><p>Die interaktive Suche ist eingestellt. Aufnahmen bewahren den letzten Stand; der bereinigte Code bleibt öffentlich verfügbar.</p>
      <div class="hero-actions"><a class="button primary" href="https://github.com/sichgeis/stiftungskartei" target="_blank" rel="noreferrer"><CodeXml :size="17" /> Quellcode auf GitHub</a><a class="button secondary" :href="homeHref">Zurück zum Projektarchiv <ArrowUpRight :size="17" /></a></div>
    </div>
  </section>
</template>
