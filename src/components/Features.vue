<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Blocks,
  Goal,
  Library,
  LineChart,
  Newspaper,
  SearchCheck,
  ShieldHalf,
  Sparkle,
  SquarePen,
  Stamp,
  Wallet,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
  items?: { name: string; icon: string }[];
}

const featureList: FeaturesProps[] = [
  {
    icon: "searchCheck",
    title: "Smart Matching",
    description:
      "Finde mit smarter Recherche die Förderprogramme, die perfekt zu deiner Organisation passen.",
    items: [
      {
        name: "Missions- und Zielanalyse",
        icon: "sparkle",
      },
      {
        name: "Fördermittelsuche",
        icon: "blocks",
      },
      {
        name: "Stiftungssuche",
        icon: "blocks",
      },
    ],
  },
  {
    icon: "goal",
    title: "Ideenwerkstatt",
    description:
      "Verfeinere Projektideen und entwickle passgenaue Konzepte - zugeschnitten auf dein Förderprogramm.",
    items: [
      {
        name: "Förderzweckanalyse",
        icon: "sparkle",
      },
      {
        name: "Ideenschmiede",
        icon: "sparkle",
      },
      {
        name: "Feinkonzeptionsassistent",
        icon: "sparkle",
      },
    ],
  },
  {
    icon: "squarePen",
    title: "Antragsunterstützung",
    description:
      "Förderwerk unterstützt mit smarten Textvorschlägen im Kontext deiner Organisation und Förderprogramm.",
    items: [
      {
        name: "Ausfüllassistenz",
        icon: "lineChart",
      },
      {
        name: "Benutzerführung",
        icon: "wallet",
      },
      {
        name: "Maßgeschneidert",
        icon: "sparkle",
      },
    ],
  },
  {
    icon: "library",
    title: "Informiert",
    description:
      "Stelle dir eine persönliche und aktuelle Wissensablage aus Websites, E-Mails und Newslettern zusammen.",
  },
  {
    icon: "stamp",
    title: "Berichtswesen",
    description:
      "Beschleunige das Reporting und Post-Award Management durch intelligente Dokumentenauswertung.",
  },
  {
    icon: "shieldHalf",
    title: "Vertraulich",
    description:
      "Du bestimmst welche KI-Sprachmodelle verwendet werden, ob open-source oder proprietär. Deine Daten werden in jedem Fall DSGVO-konform behandelt.",
  },
];

const iconMap: Record<string, any> = {
  goal: Goal,
  newspaper: Newspaper,
  sparkle: Sparkle,
  blocks: Blocks,
  lineChart: LineChart,
  wallet: Wallet,
  squarePen: SquarePen,
  searchCheck: SearchCheck,
  library: Library,
  stamp: Stamp,
  shieldHalf: ShieldHalf,
};
</script>

<template>
  <section id="features" class="container py-8 sm:py-0 bg-muted">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Der Rote Faden
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Förderwerk: Dein Software-Assistent
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Förderwerk bringt Licht ins Dunkel und vereinfacht die
      Fördermittelbeschaffung mit Best-Practices, Recherche und
      KI-Unterstützung.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description, items } in featureList"
        :key="title"
      >
        <Card
          class="bg-card hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary-foreground/60 p-2 rounded-full ring-8 ring-primary-foreground/30 mb-4"
            >
              <component :is="iconMap[icon]" class="size-6 text-primary" />
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground flex flex-col items-center">
            <div class="text-center">{{ description }}</div>
            <ul v-if="items" class="mt-2 space-y-1 flex flex-col pt-2">
              <li v-for="item in items" class="w-fit">
                <div class="flex gap-2">
                  <component
                    class="size-6 text-primary"
                    :is="iconMap[item.icon]"
                  />
                  <span>{{ item.name }}</span>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
    <div class="text-center max-w-screen-md mx-auto py-8 sm:py-12">
      <div class="space-y-4 md:space-y-0 md:space-x-4">
        <Button as-child class="w-5/6 md:w-1/4 font-bold group/arrow">
          <a href="#contact" class="flex flex-row">
            Demo vereinbaren
            <ArrowRight
              class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
            />
          </a>
        </Button>

        <Button
          as-child
          variant="secondary"
          class="group/arrow w-5/6 md:w-1/4 font-bold"
        >
          <a href="#earlyBird" class="flex flex-row">
            Jetzt anmelden
            <ArrowRight
              class="ml-2 transition-transform group-hover/arrow:translate-x-1 size-5"
            />
          </a>
        </Button>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>
