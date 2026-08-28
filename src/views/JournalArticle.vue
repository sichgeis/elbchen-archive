<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Compass,
  Database,
  Rocket,
  Search,
  Sparkles,
  Users,
} from "@lucide/vue";
import { computed, onMounted, ref, type Component } from "vue";
import { journalEntries, type JournalEntry } from "../content";
import { parseJournalSource } from "../journalParser";

const props = defineProps<{
  entry: JournalEntry;
  homeHref: string;
  archivePath: (path: string) => string;
}>();

const topicIcons: Record<JournalEntry["icon"], Component> = {
  search: Search,
  compass: Compass,
  users: Users,
  sparkles: Sparkles,
  bot: Bot,
  database: Database,
  rocket: Rocket,
};

const articleHtml = ref("");
const loadingError = ref("");
const currentIndex = journalEntries.findIndex((entry) => entry.slug === props.entry.slug);
const previousEntry = computed(() => journalEntries[currentIndex - 1]);
const nextEntry = computed(() => journalEntries[currentIndex + 1]);
const articleHref = (entry: JournalEntry) => `${props.homeHref}blog/${entry.slug}/`;

onMounted(async () => {
  try {
    const response = await fetch(props.archivePath(`journal-source/${props.entry.source}.vue.txt`));
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    articleHtml.value = parseJournalSource(await response.text(), props.homeHref);
  } catch (error) {
    console.error(error);
    loadingError.value = "Der archivierte Artikel konnte nicht geladen werden.";
  }
});
</script>

<template>
  <header class="article-hero page-width">
    <div class="article-topic-mark" aria-hidden="true">
      <component :is="topicIcons[entry.icon]" :size="25" />
    </div>
    <p class="eyebrow">{{ entry.topic }} · Produktjournal 2025</p>
    <h1>{{ entry.title }}</h1>
    <p class="article-deck">{{ entry.excerpt }}</p>
    <div class="article-author">
      <img :src="archivePath(`authors/${entry.image}`)" :alt="entry.author" />
      <div>
        <strong>{{ entry.author }}</strong>
        <span>{{ entry.date }} · {{ entry.readingTime }}</span>
      </div>
    </div>
  </header>

  <div class="article-layout page-width">
    <aside class="article-rail" aria-label="Hinweise zum Artikel">
      <p class="section-label">Aus dem Archiv</p>
      <p>Dieser Beitrag erschien 2025 während der öffentlichen Beta-Phase. Links, Angebote und Zukunftsaussagen geben den damaligen Stand wieder.</p>
      <a :href="archivePath(`journal-source/${entry.source}.vue.txt`)" target="_blank">Originalquelltext <ArrowUpRight :size="16" /></a>
    </aside>

    <article class="article-prose">
      <p v-if="!articleHtml && !loadingError" class="article-loading" role="status">Artikel wird geladen …</p>
      <p v-else-if="loadingError" class="article-error" role="alert">{{ loadingError }}</p>
      <div v-else v-html="articleHtml"></div>
    </article>
  </div>

  <nav class="article-pagination page-width" aria-label="Weitere Artikel">
    <a v-if="previousEntry" :href="articleHref(previousEntry)" class="article-pagination-link previous">
      <ArrowLeft :size="19" />
      <span><small>Vorheriger Beitrag</small><strong>{{ previousEntry.title }}</strong></span>
    </a>
    <a v-else :href="`${homeHref}#journal`" class="article-pagination-link previous">
      <ArrowLeft :size="19" />
      <span><small>Zur Übersicht</small><strong>Alle Artikel</strong></span>
    </a>
    <a v-if="nextEntry" :href="articleHref(nextEntry)" class="article-pagination-link next">
      <span><small>Nächster Beitrag</small><strong>{{ nextEntry.title }}</strong></span>
      <ArrowRight :size="19" />
    </a>
    <a v-else :href="`${homeHref}#journal`" class="article-pagination-link next">
      <span><small>Zur Übersicht</small><strong>Alle Artikel</strong></span>
      <ArrowRight :size="19" />
    </a>
  </nav>
</template>
