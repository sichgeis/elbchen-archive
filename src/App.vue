<script setup lang="ts">
import ArchiveHome from "./views/ArchiveHome.vue";
import FoerderwerkRetirement from "./views/FoerderwerkRetirement.vue";
import JournalArticle from "./views/JournalArticle.vue";
import StiftungskarteiCaseStudy from "./views/StiftungskarteiCaseStudy.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
import { journalEntries } from "./content";

const isCaseStudy = /\/stiftungskartei(?:\/|$)/.test(window.location.pathname);
const isFoerderwerkRetirement = /\/foerderwerk(?:\/|$)/.test(window.location.pathname);
const articleSlug = window.location.pathname.match(/\/blog\/([^/]+)(?:\/|$)/)?.[1];
const journalEntry = articleSlug
  ? journalEntries.find((entry) => entry.slug === articleSlug)
  : undefined;
const isSubpage = isCaseStudy || isFoerderwerkRetirement || Boolean(journalEntry);
const homeHref = journalEntry ? "../../" : isCaseStudy || isFoerderwerkRetirement ? "../" : "./";
const archivePath = (path: string) => `${homeHref}archive/${path}`;

document.title = journalEntry
  ? `${journalEntry.title} – Förderwerk Archiv`
  : isCaseStudy
    ? "Stiftungskartei – Förderwerk Archiv"
    : isFoerderwerkRetirement
      ? "Förderwerk KI-Arbeitsplatz – Projektarchiv"
    : "Förderwerk Projektarchiv";

const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
if (journalEntry) {
  if (description) description.content = journalEntry.excerpt;
  const articleTitle = `${journalEntry.title} – Förderwerk Archiv`;
  const canonicalUrl = `https://foerderwerk.org/blog/${journalEntry.slug}/`;
  const metadata = [
    ['meta[name="title"]', articleTitle],
    ['meta[property="og:type"]', "article"],
    ['meta[property="og:url"]', canonicalUrl],
    ['meta[property="og:title"]', articleTitle],
    ['meta[property="og:description"]', journalEntry.excerpt],
    ['meta[name="twitter:url"]', canonicalUrl],
    ['meta[name="twitter:title"]', articleTitle],
    ['meta[name="twitter:description"]', journalEntry.excerpt],
  ];
  for (const [selector, content] of metadata) {
    const element = document.querySelector<HTMLMetaElement>(selector);
    if (element) element.content = content;
  }
}
</script>

<template>
  <a class="skip-link" href="#main-content">Zum Inhalt springen</a>
  <div class="archive-banner">
    <span aria-hidden="true"></span>
    Projektarchiv · Angebot seit 2026 eingestellt
  </div>
  <SiteHeader
    :home-href="homeHref"
    :is-subpage="isSubpage"
    :back-label="journalEntry ? 'Zum Journal' : 'Übersicht'"
    :back-href="journalEntry ? `${homeHref}#journal` : homeHref"
  />
  <main id="main-content">
    <StiftungskarteiCaseStudy
      v-if="isCaseStudy"
      :home-href="homeHref"
      :archive-path="archivePath"
    />
    <FoerderwerkRetirement
      v-else-if="isFoerderwerkRetirement"
      :home-href="homeHref"
    />
    <JournalArticle
      v-else-if="journalEntry"
      :entry="journalEntry"
      :home-href="homeHref"
      :archive-path="archivePath"
    />
    <ArchiveHome v-else :archive-path="archivePath" :home-href="homeHref" />
  </main>
  <SiteFooter :home-href="homeHref" />
</template>
