<script setup lang="ts">
import { ArrowDown, ArrowUpRight, Bot, CodeXml, Database, Search } from "@lucide/vue";
import type { Component } from "vue";
import { journalEntries, metrics, projects, type ProjectIcon } from "../content";

defineProps<{ archivePath: (path: string) => string }>();
const projectIcons: Record<ProjectIcon, Component> = { search: Search, bot: Bot, database: Database };
const heroImage = `${import.meta.env.BASE_URL}hero-image-librechat.jpg`;
</script>

<template>
  <section class="home-hero page-width">
    <p class="eyebrow">Digitale Werkzeuge für gemeinnützige Organisationen</p>
    <h1>Was wir gebaut haben.<br /><span>Und was davon bleibt.</span></h1>
    <p class="hero-copy">Förderwerk und Stiftungskartei waren ein unabhängiges Produktvorhaben für bessere Fördermittelrecherche und Wissensarbeit. Heute bewahrt dieses Archiv die Produkte, den offenen Quellcode und die Erkenntnisse dahinter.</p>
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
      <h2>Drei Bausteine für eine zugänglichere Fördermittelarbeit.</h2>
      <p>Produktdesign, Datenarbeit und KI-gestützte Recherche wurden zu einem zusammenhängenden Werkzeugkasten.</p>
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
        <p>Eine KI-gestützte Suchmaschine, die den Kontext einer Organisation mit einer strukturierten Datenbasis von mehr als 12.000 deutschen Stiftungen verband.</p>
        <a class="button primary" href="./stiftungskartei/">Produktfallstudie öffnen <ArrowUpRight :size="18" /></a>
      </div>
      <a class="screenshot-frame" :href="archivePath('screenshots/stiftungskartei-home.png')"><img :src="archivePath('screenshots/stiftungskartei-home.png')" alt="Die ehemalige Startseite der Stiftungskartei" /></a>
    </div>
  </section>

  <section id="open-source" class="content-section page-width open-source-section">
    <div class="open-source-mark"><CodeXml :size="32" /></div>
    <div><p class="section-label">Jetzt Open Source</p><h2>Der Betrieb endet. Der Code bleibt zugänglich.</h2></div>
    <div class="open-source-copy">
      <p>Stiftungskartei und die Datenpipeline Stiftungs-Sammler sind als bereinigte Archivfassungen unter Apache-2.0 veröffentlicht. Die Originaldaten können auf Anfrage beim Projektinhaber bezogen werden.</p>
      <div class="source-links">
        <a href="https://github.com/sichgeis/stiftungskartei" target="_blank" rel="noreferrer">Stiftungskartei <ArrowUpRight :size="17" /></a>
        <a href="https://github.com/sichgeis/stiftungs-sammler" target="_blank" rel="noreferrer">Stiftungs-Sammler <ArrowUpRight :size="17" /></a>
      </div>
    </div>
  </section>

  <section id="journal" class="content-section page-width journal-section">
    <div class="section-intro compact"><p class="section-label">Produktjournal · 2025</p><h2>Acht Notizen aus Entwicklung und Beta-Test.</h2><p>Originaltexte über Problemverständnis, Technologie und Erkenntnisse aus der Community.</p></div>
    <div class="journal-list">
      <article v-for="(post, index) in journalEntries" :key="post.title">
        <span class="journal-number">{{ String(index + 1).padStart(2, "0") }}</span>
        <div><p class="journal-meta">{{ post.author }} · {{ post.date }}</p><h3>{{ post.title }}</h3><p>{{ post.excerpt }}</p></div>
        <a :href="archivePath(`journal-source/${post.source}.vue.txt`)" :aria-label="`${post.title}: Originaltext öffnen`"><ArrowUpRight :size="18" /></a>
      </article>
    </div>
  </section>

  <section class="retirement-note">
    <div class="page-width">
      <p class="section-label">Status</p><h2>Das Angebot ist eingestellt.<br />Die Arbeit bleibt sichtbar.</h2>
      <div><p>Förderwerk, Stiftungskartei und die zugehörigen Online-Dienste werden nicht mehr aktiv betrieben.</p><p>Dieses statische Archiv dokumentiert die frühere Produkt- und Entwicklungsarbeit – ohne Accounts, Tracking oder laufende Server.</p></div>
    </div>
  </section>
</template>
