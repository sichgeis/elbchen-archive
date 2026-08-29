<script setup lang="ts">
import { Bot, FileSearch, LockKeyhole, Wrench } from "@lucide/vue";

defineProps<{ homeHref: string }>();
const productImage = `${import.meta.env.BASE_URL}hero-image-librechat.jpg`;
</script>

<template>
  <section class="home-hero case-hero page-width">
    <p class="eyebrow">Förderwerk · KI-Arbeitsplatz</p>
    <h1>Ein digitaler Arbeitsplatz<br /><span>für gemeinnützige Arbeit.</span></h1>
    <p class="hero-copy">Förderwerk verband einen vertrauten KI-Chat mit eigenem Wissen und Werkzeugen für Recherche und Fördermittelarbeit. Der Betrieb ist beendet. Diese Seite bewahrt einen kompakten Rückblick auf das Produkt.</p>
    <div class="case-meta">
      <div><span>Status</span><strong>Seit 2026 eingestellt</strong></div>
      <div><span>Erfasster Zeitraum</span><strong>September 2025 – August 2026</strong></div>
      <div><span>Nutzung</span><strong>645 Besucher:innen · 1.082 Seitenaufrufe</strong></div>
    </div>
  </section>

  <section class="case-cover page-width">
    <img :src="productImage" alt="Der ehemalige Förderwerk KI-Arbeitsplatz mit Chat und Förderwerkzeugen" />
  </section>

  <section class="content-section page-width">
    <div class="case-narrative">
      <div>
        <p class="section-label">Die Idee</p>
        <h2>KI sollte dort helfen, wo gemeinnützige Arbeit Zeit verliert.</h2>
      </div>
      <div class="narrative-copy">
        <p>Viele Teams arbeiteten bereits mit KI, mussten aber zwischen Chat, Dokumenten, Recherche und Förderportalen wechseln. Förderwerk brachte diese Schritte in einer datenschutzorientierten Arbeitsumgebung zusammen.</p>
        <p>Das Produkt basierte auf LibreChat und ergänzte den allgemeinen KI-Dialog um eigenes Organisationswissen, semantische Suche und spezialisierte Werkzeuge. Stiftungskartei war als Rechercheprodukt eng damit verbunden.</p>
      </div>
    </div>
  </section>

  <section class="feature-line page-width" aria-label="Förderwerk Funktionen">
    <article><Bot :size="25" /><div><h3>KI-Chat</h3><p>Mehrere Sprachmodelle in einer gemeinsamen Arbeitsoberfläche.</p></div></article>
    <article><FileSearch :size="25" /><div><h3>Eigenes Wissen</h3><p>Dokumente und Organisationswissen als Kontext für die tägliche Arbeit.</p></div></article>
    <article><Wrench :size="25" /><div><h3>Förderwerkzeuge</h3><p>Recherche und spezialisierte Abläufe über integrierte Werkzeuge.</p></div></article>
  </section>

  <section class="content-section page-width">
    <div class="case-narrative">
      <div>
        <p class="section-label">Ruhestand</p>
        <h2>Keine Accounts.<br />Keine laufenden Server.</h2>
      </div>
      <div class="narrative-copy">
        <p>Der Förderwerk KI-Arbeitsplatz und das zugrunde liegende Open WebUI werden nicht mehr betrieben. Bestehende Accounts, Chats und Uploads sind nicht mehr verfügbar.</p>
        <p>Was bleibt, sind dieses statische Archiv, die Produktgeschichte und die offen veröffentlichte Stiftungskartei. Die oben genannten Nutzungszahlen stammen aus einer abschließenden, aggregierten Plausible-Sicherung; das Archiv selbst verwendet kein Tracking.</p>
        <p><LockKeyhole :size="20" aria-hidden="true" /> Die früheren Anwendungsdaten werden nach Abschluss der gesicherten Exporte gelöscht.</p>
        <a class="button primary" :href="`${homeHref}stiftungskartei/`">Stiftungskartei ansehen</a>
      </div>
    </div>
  </section>
</template>
