<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SearchCheck, MessageSquare, Wrench } from "lucide-vue-next";

interface PillarProps {
  icon: string;
  title: string;
  description: string;
  cta: { href: string; label: string };
}

const iconMap: Record<string, any> = {
  search: SearchCheck,
  chat: MessageSquare,
  tools: Wrench,
};

const pillars: PillarProps[] = [
  {
    icon: "search",
    title: "Recherche-Tools",
    description:
      "Wir bieten smarte Werkzeuge an, die dir die Recherche nach passenden Fördermöglichkeiten erleichtern. Finde z.B. mit der Stiftungskartei in Sekunden Förderstiftungen, die genau zu dir und deinem Vorhaben passen.",
    cta: { href: "#stiftungskartei", label: "Mehr erfahren" },
  },
  {
    icon: "chat",
    title: "KI-Arbeitsplatz",
    description:
      "EU-gehosteter, datenschutzfreundlicher KI-Chat für dein ganzes Team. Funktioniert ähnlich wie Chat-GPT. Plus exklusive Tools für NGOs und Vereine wie z.B. Fördermittel-Suche, Antragswerkstatt und Wissensspeicher.",
    cta: { href: "#librechat", label: "Zum Produkt" },
  },
  {
    icon: "tools",
    title: "Digitalisierungs-Beratung",
    description:
      "Wir sind dein kompetenter Partner bei allen Digitalisierungsvorhaben. Wir bieten Beratung & IT-Services zu Themen wie Digital-Strategie, barrierearme Websites und managed Open-Source-Services für NGOs.",
    cta: { href: "#beratung", label: "Zum Angebot" },
  },
];
</script>

<template>
  <section id="value" class="container py-20 sm:py-16">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Unsere Kompetenzen und Leistungen
    </h2>
    <h3 class="text-3xl md:text-4xl text-center font-bold mb-8">
      Recherche, KI-Arbeitsplatz und Beratung
    </h3>
    <p class="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-8">
      Wir entwickeln smarte Tools für die Fördermittelbeschaffung, stellen dir
      einen sicheren KI-Arbeitsplatz bereit und Beraten dich in allen Fragen der
      Digitalisierung.
    </p>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card
        v-for="{ icon, title, description, cta } in pillars"
        :key="title"
        class="bg-card hover:bg-background transition-colors"
      >
        <CardHeader class="flex items-center text-center">
          <component :is="iconMap[icon]" class="size-6 text-primary mb-2" />
          <CardTitle>{{ title }}</CardTitle>
        </CardHeader>
        <CardContent
          class="text-muted-foreground flex flex-col items-center gap-4"
        >
          <p class="text-center">{{ description }}</p>
          <Button as-child size="sm">
            <a :href="cta.href">{{ cta.label }}</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
