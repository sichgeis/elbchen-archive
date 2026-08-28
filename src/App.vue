<script setup lang="ts">
import ArchiveHome from "./views/ArchiveHome.vue";
import StiftungskarteiCaseStudy from "./views/StiftungskarteiCaseStudy.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";

const isCaseStudy = /\/stiftungskartei(?:\/|$)/.test(window.location.pathname);
const homeHref = isCaseStudy ? "../" : "./";
const archivePath = (path: string) => `${homeHref}archive/${path}`;

document.title = isCaseStudy
  ? "Stiftungskartei – Förderwerk Archiv"
  : "Förderwerk Projektarchiv";
</script>

<template>
  <a class="skip-link" href="#main-content">Zum Inhalt springen</a>
  <div class="archive-banner">
    <span aria-hidden="true"></span>
    Projektarchiv · Angebot seit 2026 eingestellt
  </div>
  <SiteHeader :home-href="homeHref" :is-case-study="isCaseStudy" />
  <main id="main-content">
    <StiftungskarteiCaseStudy
      v-if="isCaseStudy"
      :home-href="homeHref"
      :archive-path="archivePath"
    />
    <ArchiveHome v-else :archive-path="archivePath" />
  </main>
  <SiteFooter :home-href="homeHref" />
</template>
