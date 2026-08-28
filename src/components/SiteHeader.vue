<script setup lang="ts">
import { ArrowLeft } from "@lucide/vue";
import GithubIcon from "../icons/GithubIcon.vue";
defineProps<{ homeHref: string; isSubpage: boolean; backLabel: string; backHref: string }>();
</script>

<template>
  <header class="site-header">
    <a class="brand" :href="homeHref" aria-label="Förderwerk Projektarchiv – Startseite">
      <img :src="`${homeHref}foerderwerk-color-logo.svg`" alt="" />
      <span><strong>Förderwerk</strong><small>Projektarchiv</small></span>
    </a>
    <nav v-if="!isSubpage" aria-label="Hauptnavigation">
      <a href="#journal">Journal</a><a href="#projekte">Projekte</a><a href="#open-source">Open Source</a>
    </nav>
    <a v-else class="header-action" :href="backHref"><ArrowLeft :size="17" /> {{ backLabel }}</a>
    <a v-if="!isSubpage" class="header-action header-github" href="https://github.com/sichgeis" target="_blank" rel="noreferrer"><GithubIcon class="github-icon" /> GitHub</a>
  </header>
</template>
