<script setup lang="ts">
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  CodeXml,
  Compass,
  Database,
  Rocket,
  Search,
  Sparkles,
  Users,
} from "@lucide/vue";
import type { Component } from "vue";
import { journalEntries, metrics, projects, type JournalEntry, type ProjectIcon } from "../content";

const props = defineProps<{ archivePath: (path: string) => string; homeHref: string }>();
const projectIcons: Record<ProjectIcon, Component> = { search: Search, bot: Bot, database: Database };
const topicIcons: Record<JournalEntry["icon"], Component> = {
  search: Search,
  compass: Compass,
  users: Users,
  sparkles: Sparkles,
  bot: Bot,
  database: Database,
  rocket: Rocket,
};
const leadArticle = journalEntries[0];
const moreArticles = journalEntries.slice(1);
const articleHref = (entry: JournalEntry) => `${props.homeHref}blog/${entry.slug}/`;
const heroImage = `${import.meta.env.BASE_URL}hero-image-librechat.jpg`;
</script>

<template>
  <section class="home-hero page-width">
    <p class="eyebrow">Digitale Werkzeuge für mehr Wirkung</p>
    <h1>Was wir gebaut haben.<br /><span>Und was davon bleibt.</span></h1>
    <p class="hero-copy">Förderwerk entstand aus einer einfachen Frage: Wie können digitale Werkzeuge gemeinnützigen Organisationen mehr Zeit für ihre eigentliche Arbeit geben? Gemeinsam mit unserer Community haben wir daraus Stiftungskartei, einen KI-Arbeitsplatz und eine eigene Datenpipeline entwickelt. Dieses Archiv erzählt, was daraus geworden ist – und was bleibt.</p>
    <div class="hero-actions">
      <a class="button primary" href="./stiftungskartei/">Stiftungskartei ansehen <ArrowUpRight :size="18" /></a>
      <a class="button secondary" href="https://github.com/sichgeis/stiftungskartei" target="_blank" rel="noreferrer"><CodeXml :size="18" /> Open-Source-Projekt</a>
    </div>
    <a class="quiet-link" href="#projekte">Projektarchiv entdecken <ArrowDown :size="16" /></a>
  </section>

  <section class="product-stage page-width" aria-label="Förderwerk Produktansicht">
    <div class="product-glow" aria-hidden="true"></div>
    <img :src="heroImage" alt="Der ehemalige Förderwerk KI-Arbeitsplatz" />
  </section>

  <section class="metric-strip page-width" aria-label="Projekt in Zahlen">
    <div v-for="metric in metrics" :key="metric.label"><strong>{{ metric.value }}</strong><span>{{ metric.label }}</span></div>
  </section>

  <section id="projekte" class="content-section page-width">
    <div class="section-intro">
      <p class="section-label">Das Projekt</p>
      <h2>Drei Bausteine, die Fördermittelarbeit einfacher machen sollten.</h2>
      <p>Wir wollten nicht nur einzelne Schritte digitalisieren, sondern den gesamten Weg zusammendenken: von der Recherche über die Arbeit mit Wissen bis zur passenden Förderung.</p>
    </div>
    <div class="project-list">
      <article v-for="project in projects" :key="project.number" class="project-row">
        <span class="project-number">{{ project.number }}</span>
        <div class="project-symbol"><component :is="projectIcons[project.icon]" :size="24" /></div>
        <div class="project-title"><p class="project-kind">{{ project.kind }}</p><h3>{{ project.title }}</h3></div>
        <div class="project-details">
          <p>{{ project.description }}</p>
          <ul class="tag-list" :aria-label="`Technologien für ${project.title}`"><li v-for="technology in project.technologies" :key="technology">{{ technology }}</li></ul>
          <a v-if="project.href" class="text-link" :href="project.href" :target="project.external ? '_blank' : undefined" :rel="project.external ? 'noreferrer' : undefined">{{ project.linkLabel }} <ArrowUpRight :size="17" /></a>
        </div>
      </article>
    </div>
  </section>

  <section class="featured-case">
    <div class="featured-inner page-width">
      <div class="featured-copy">
        <p class="section-label">Fallstudie 01</p><h2>Stiftungskartei</h2><p class="case-tagline">Smart suchen, mehr wirken.</p>
        <p>Mit Stiftungskartei fing alles an. Statt sich durch Listen, Webseiten und PDF-Berichte zu arbeiten, konnten Organisationen auf drei Wegen nach passenden Stiftungen suchen – und die wichtigsten Informationen direkt vergleichen.</p>
        <a class="button primary" href="./stiftungskartei/">Produktfallstudie öffnen <ArrowUpRight :size="18" /></a>
      </div>
      <a class="screenshot-frame" :href="archivePath('screenshots/stiftungskartei-ki-search-gfbv.png')"><img :src="archivePath('screenshots/stiftungskartei-ki-search-gfbv.png')" alt="KI-Suche der Stiftungskartei mit einem Beispielvorhaben der GfbV" /></a>
    </div>
  </section>

  <section id="journal" class="journal-section">
    <div class="page-width">
      <div class="journal-heading">
        <div><p class="section-label">Produktjournal · 2025</p><h2>Acht Geschichten aus Entwicklung und Beta-Test.</h2></div>
        <p>Was uns angetrieben hat, wie Stiftungskartei technisch funktionierte und was wir gemeinsam mit der Community gelernt haben. Die vollständigen Originalbeiträge aus dem Sommer 2025.</p>
      </div>

      <a class="journal-lead" :href="articleHref(leadArticle)">
        <div class="journal-lead-copy">
          <div class="journal-topic"><component :is="topicIcons[leadArticle.icon]" :size="20" /><span>{{ leadArticle.topic }}</span></div>
          <p class="journal-kicker">Leitartikel · {{ leadArticle.readingTime }}</p>
          <h3>{{ leadArticle.title }}</h3>
          <p>{{ leadArticle.excerpt }}</p>
          <span class="journal-read-link">Artikel lesen <ArrowRight :size="18" /></span>
        </div>
        <div class="journal-lead-author">
          <img :src="archivePath(`authors/${leadArticle.image}`)" :alt="leadArticle.author" />
          <div><span>Geschrieben von</span><strong>{{ leadArticle.author }}</strong><small>{{ leadArticle.date }}</small></div>
        </div>
      </a>

      <div class="journal-grid">
        <a v-for="post in moreArticles" :key="post.title" class="journal-card" :href="articleHref(post)">
          <div class="journal-card-top">
            <div class="journal-topic"><component :is="topicIcons[post.icon]" :size="18" /><span>{{ post.topic }}</span></div>
            <ArrowUpRight :size="19" aria-hidden="true" />
          </div>
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
          <div class="journal-author">
            <img :src="archivePath(`authors/${post.image}`)" :alt="post.author" />
            <div><strong>{{ post.author }}</strong><span>{{ post.date }} · {{ post.readingTime }}</span></div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <section id="open-source" class="content-section page-width open-source-section">
    <div class="open-source-mark"><CodeXml :size="32" /></div>
    <div><p class="section-label">Jetzt Open Source</p><h2>Der Betrieb ist beendet. Der Code bleibt offen.</h2></div>
    <div class="open-source-copy">
      <p>Wir haben Stiftungskartei und den Stiftungs-Sammler bereinigt, dokumentiert und unter Apache-2.0 veröffentlicht. So lassen sich unsere Entscheidungen nachvollziehen und die Projekte lokal weiterentwickeln. Wer mit den ursprünglichen Daten arbeiten möchte, kann sie bei mir anfragen.</p>
      <div class="source-links">
        <a href="https://github.com/sichgeis/stiftungskartei" target="_blank" rel="noreferrer">Stiftungskartei <ArrowUpRight :size="17" /></a>
        <a href="https://github.com/sichgeis/stiftungs-sammler" target="_blank" rel="noreferrer">Stiftungs-Sammler <ArrowUpRight :size="17" /></a>
      </div>
    </div>
  </section>

  <section class="retirement-note">
    <div class="page-width">
      <p class="section-label">Status</p><h2>Das Angebot ist beendet.<br />Die Arbeit bleibt sichtbar.</h2>
      <div><p>Wir betreiben Förderwerk, Stiftungskartei und die dazugehörigen Online-Dienste nicht mehr weiter.</p><p>Was bleibt, ist dieses statische Archiv: ein Rückblick auf unsere Produktarbeit, die Technik dahinter und das, was wir gemeinsam mit der Community gelernt haben – ohne Accounts, Tracking oder laufende Anwendungsserver.</p></div>
    </div>
  </section>
</template>
