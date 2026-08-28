<script setup lang="ts">
defineProps<{ homeHref: string }>();
</script>

<template>
  <footer>
    <a class="footer-brand" :href="homeHref">
      <img :src="`${homeHref}foerderwerk-mono-transparent-logo.svg`" alt="" />
      <span><strong>Förderwerk Projektarchiv</strong><small>Das operative Angebot ist eingestellt.</small></span>
    </a>
    <div class="footer-links">
      <a href="https://github.com/sichgeis" target="_blank" rel="noreferrer">GitHub</a>
      <details><summary>Impressum</summary><p>Geisler Software Consulting<br />Dr. Christian Geisler<br />Goethe-Allee 5<br />37073 Göttingen</p></details>
    </div>
  </footer>
</template>
