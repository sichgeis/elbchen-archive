<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Blocks, LineChart, Sparkle, Wallet } from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "blocks",
    title: "Recherche",
    description:
      "Fragmentierte und unstrukturierte Informationen erschweren Förderprogramm-Recherche",
  },
  {
    icon: "lineChart",
    title: "Antragstellung",
    description:
      "Steile Lernkurve und hohe bürokratische Hürden bei der Antragstellung.",
  },
  {
    icon: "wallet",
    title: "Zeitaufwand",
    description:
      "Mangel an Personal und Kapazitäten für Beschäftigung mit Fördermöglichkeiten.",
  },
  {
    icon: "sparkle",
    title: "Passgenauigkeit",
    description:
      "Aufwendige Erstellung und Abstimmung von passgenauen Konzepten und Finanzplänen.",
  },
];

const iconMap: Record<
  string,
  typeof Sparkle | typeof Blocks | typeof LineChart | typeof Wallet
> = {
  sparkle: Sparkle,
  blocks: Blocks,
  lineChart: LineChart,
  wallet: Wallet,
};
</script>

<template>
  <section id="product" class="container py-8 sm:py-24">
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 class="text-lg text-primary mb-2 tracking-wider">
          Die Herausforderung
        </h2>

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Im Fördermittel-Labyrinth verloren?
        </h2>
        <p class="text-xl text-muted-foreground mb-8">
          Die aufwendige Suche nach passenden Förderprogrammen kostet Zeit und
          Nerven. Fragmentierte Informationen, bürokratische Hürden und knappe
          Ressourcen machen den Prozess zur Herausforderung.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="{ icon, title, description } in benefitList"
          :key="title"
          class="bg-card hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component class="size-8 text-primary" :is="iconMap[icon]" />
              <CardTitle>{{ title }}</CardTitle>
            </div>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
