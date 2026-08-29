<script setup lang="ts">
import { ArrowUpRight, CodeXml, Database, FileText, Layers3, Search, ServerCog, Sparkles } from "@lucide/vue";
defineProps<{ homeHref: string; archivePath: (path: string) => string }>();
</script>

<template>
  <section class="case-hero page-width">
    <p class="eyebrow">Produktfallstudie · 2025–2026</p>
    <h1>Stiftungskartei.<br /><span>Smart suchen, mehr wirken.</span></h1>
    <p class="hero-copy">Stiftungskartei sollte die aufwändige Stiftungsrecherche einfacher machen: mit drei Suchwegen, mehr als 12.000 aufbereiteten Stiftungsprofilen und Ergebnissen, die nicht nur auf gleiche Wörter, sondern auf den inhaltlichen Zusammenhang schauten.</p>
    <div class="case-meta">
      <div><span>Unser Beitrag</span><strong>Konzeption, Gestaltung und technische Entwicklung</strong></div>
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
    <div><p class="section-label">Ausgangslage</p><h2>Die passende Stiftung zu finden war oft Detektivarbeit.</h2></div>
    <div class="narrative-copy"><p>Informationen lagen verstreut in Registern, auf Webseiten und in PDF-Berichten. Wer Fördermöglichkeiten finden wollte, musste passende Suchbegriffe kennen, Ergebnisse vergleichen und jede Stiftung einzeln prüfen. Gerade für kleine Organisationen ging dabei viel Zeit verloren – Zeit, die an anderer Stelle fehlte.</p><blockquote>Wie können Organisationen beschreiben, was sie bewirken wollen, ohne zuerst die richtige Suchsprache lernen zu müssen?</blockquote></div>
  </section>

  <section class="feature-line page-width" aria-label="Produktmerkmale">
    <article><Search :size="24" /><div><h3>Drei Wege zur Suche</h3><p>Über die Organisation, einen Namen oder gezielte Filter.</p></div></article>
    <article><Sparkles :size="24" /><div><h3>Mehr als Schlagwörter</h3><p>Mission, Zielgruppen, Vorhaben und Region im Zusammenhang.</p></div></article>
    <article><FileText :size="24" /><div><h3>Alles an einem Ort</h3><p>Kontakte, Projekte, Antragswege und Quellen im Überblick.</p></div></article>
  </section>

  <section class="content-section page-width screencast-section">
    <div class="section-intro compact"><p class="section-label">Produkt in Bewegung</p><h2>So sah Stiftungskartei in ihrer letzten öffentlichen Version aus.</h2><p>Der kurze Rundgang führt von der direkten Suche zu den Ergebnissen und weiter in ein Stiftungsprofil. Zu sehen sind ausschließlich öffentliche, neutrale Stiftungsdaten – keine Accounts oder Nutzerdaten.</p></div>
    <div class="video-frame"><video controls preload="metadata" :poster="archivePath('screenshots/stiftungskartei-home.png')" :src="archivePath('video/stiftungskartei-screencast.webm')" aria-label="Stiller Rundgang durch die archivierte Stiftungskartei"></video></div>
  </section>

  <section class="walkthrough content-section page-width">
    <div class="walkthrough-copy"><p class="section-label">01 · Finden</p><h2>Vom Namen zur ersten brauchbaren Auswahl.</h2><p>Schon in der Trefferliste wurden Themen, Zielgruppen und geförderte Projekte sichtbar. So ließ sich schneller einschätzen, welche Stiftungen einen genaueren Blick wert waren.</p></div>
    <a class="screenshot-frame" :href="archivePath('screenshots/stiftungskartei-search.png')"><img :src="archivePath('screenshots/stiftungskartei-search.png')" alt="Suchergebnisliste der Stiftungskartei" loading="lazy" /></a>
  </section>

  <section class="walkthrough reverse content-section page-width">
    <div class="walkthrough-copy"><p class="section-label">02 · Verstehen</p><h2>Alle wichtigen Informationen an einem Ort.</h2><p>Die Detailseiten bündelten Stiftungszweck, Zielgruppen, Projekte, regionale Einschränkungen, Kontakte, Antragsmöglichkeiten und Quellen. Aus verstreuten Fundstellen wurde ein Steckbrief, mit dem man weiterarbeiten konnte.</p></div>
    <a class="screenshot-frame tall" :href="archivePath('screenshots/stiftungskartei-foundation-detail.png')"><img :src="archivePath('screenshots/stiftungskartei-foundation-detail.png')" alt="Detailprofil einer Stiftung" loading="lazy" /></a>
  </section>

  <section class="architecture-section">
    <div class="page-width">
      <div class="section-intro compact"><p class="section-label">Technische Architektur</p><h2>Was im Hintergrund zusammenarbeitete.</h2><p>Die Oberfläche war nur der sichtbare Teil. Dahinter verbanden vier spezialisierte Dienste Produkterlebnis, Datenbasis und semantische Suche.</p></div>
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
    <div class="section-intro compact"><p class="section-label">Was wir gelernt haben</p><h2>Gute Suche entsteht nicht allein durch gute Technik.</h2><p>Die Rückmeldungen aus dem Beta-Test haben uns gezeigt, wie eng Datenqualität, verständliche Ergebnisse und Vertrauen zusammengehören.</p></div>
    <ol class="lesson-list">
      <li><span>01</span><h3>Gute KI-Ergebnisse müssen nachvollziehbar bleiben.</h3><p>Quellen, Kriterien und Details waren genauso wichtig wie die Reihenfolge der Treffer.</p></li>
      <li><span>02</span><h3>Menschen suchen auf unterschiedliche Weise.</h3><p>Manche starten mit ihrer Organisation, andere mit einem Stiftungsnamen oder konkreten Filtern.</p></li>
      <li><span>03</span><h3>Die Datenbasis war ein Teil des Produkts.</h3><p>Das Sammeln, Prüfen und Aktualisieren der Informationen schuf erst die Grundlage für eine hilfreiche Suche.</p></li>
    </ol>
  </section>

  <section class="case-end">
    <div class="page-width"><p class="section-label">Open Source</p><h2>Der Betrieb ist beendet.<br />Die Idee bleibt zugänglich.</h2><p>Stiftungskartei ist nicht mehr als interaktive Suche verfügbar. Dieses Archiv bewahrt den letzten öffentlichen Stand – und der bereinigte Quellcode zeigt, wie wir das Produkt gebaut haben.</p>
      <div class="hero-actions"><a class="button primary" href="https://github.com/sichgeis/stiftungskartei" target="_blank" rel="noreferrer"><CodeXml :size="17" /> Quellcode auf GitHub</a><a class="button secondary" :href="homeHref">Zurück zum Projektarchiv <ArrowUpRight :size="17" /></a></div>
    </div>
  </section>
</template>
