<script setup lang="ts">
import { ArrowLeft } from "@lucide/vue";
import GithubIcon from "../icons/GithubIcon.vue";
defineProps<{ homeHref: string; isCaseStudy: boolean }>();
</script>

<template>
  <header class="site-header">
    <a class="brand" :href="homeHref" aria-label="Förderwerk Projektarchiv – Startseite">
      <img :src="`${homeHref}foerderwerk-color-logo.svg`" alt="" />
      <span><strong>Förderwerk</strong><small>Projektarchiv</small></span>
    </a>
    <nav v-if="!isCaseStudy" aria-label="Hauptnavigation">
      <a href="#projekte">Projekte</a><a href="#journal">Journal</a><a href="#open-source">Open Source</a>
    </nav>
    <a v-else class="header-action" :href="homeHref"><ArrowLeft :size="17" /> Übersicht</a>
    <a v-if="!isCaseStudy" class="header-action header-github" href="https://github.com/sichgeis" target="_blank" rel="noreferrer"><GithubIcon class="github-icon" /> GitHub</a>
  </header>
</template>
