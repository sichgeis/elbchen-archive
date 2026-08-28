<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check } from "lucide-vue-next";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "KI-Arbeitsplatz - Starter",
    popular: 0,
    price: 20,
    description: "Für Einzelpersonen und kleine Vereine.",
    buttonText: "Demo buchen",
    benefitList: [
      "1 Nutzer:in",
      "GPT-5 EU-Edition",
      "Wissensspeicher",
      "Cloud anbindung",
      "Eigene KI-Agenten",
      "Förderwerk-Tools",
    ],
  },
  {
    title: "KI-Arbeitsplatz - Team",
    popular: 1,
    price: 79,
    description: "Für Teams, die gemeinsam arbeiten.",
    buttonText: "Demo buchen",
    benefitList: [
      "Für ein Team mit bis zu 5 Nutzer:innen",
      "Eigener Server für erhöhte Sicherheit",
      "Teile eigene Agenten und Prompts mit dem Team",
      "Cloud-Anbindung an z.B. Google Workspace, Microsoft 365 oder Nextcloud",
      "Auswahl von EU-freundlichen Sprachmodellen",
      "Priorisierter Support via E-Mail oder Telefon",
    ],
  },
  {
    title: "Individuelles Angebot",
    popular: 0,
    price: 0,
    description: "Individuelle Beratung, Entwicklung und Betrieb.",
    buttonText: "Kontakt aufnehmen",
    benefitList: [
      "Kostenlose Erstberatung",
      "Abrechnung nach Aufwand oder als Pauschalpreis",
      "Anforderungsanalyse & UX/UI-Design",
      "Implementierung, Integration & Tests",
      "Betrieb & Monitoring auf EU-Servern",
      "Accessibility-Audit",
      "Schulung & Dokumentation",
    ],
  },
];

</script>

<template>
  <section id="pricing" class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Pakete & Preise
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Dein KI-Arbeitsplatz - fair, transparent und sicher
    </h2>

    <h3
      class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14"
    >
      Teste den KI-Arbeitsplatz mit GPT-5 EU-Edition 14 Tage kostenlos.
    </h3>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
      <Card
        v-for="{
          title,
          popular,
          price,
          description,
          buttonText,
          benefitList,
        } in plans"
        :key="title"
        :class="{
          'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]':
            popular === PopularPlan?.YES,
        }"
      >
        <CardHeader>
          <CardTitle class="pb-2">
            {{ title }}
          </CardTitle>

          <CardDescription class="pb-4">{{ description }}</CardDescription>

          <div v-if="price">
            <span class="text-3xl font-bold">€{{ price }}</span>
            <span class="text-muted-foreground"> / Monat</span>
          </div>
        </CardHeader>

        <CardContent class="flex">
          <div class="space-y-4">
            <span
              v-for="benefit in benefitList"
              :key="benefit"
              class="flex items-start"
            >
              <Check :size="20" class="text-primary mr-2 shrink-0" />
              <h3>{{ benefit }}</h3>
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            as-child
            :variant="popular === PopularPlan?.NO ? 'secondary' : 'default'"
            class="w-full"
          >
            <a href="#contact">{{ buttonText }}</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
    <div
      class="text-center mt-8 text-sm text-muted-foreground space-y-1 py-2 sm:py-4"
    >
      <p>
        Alle Preise zzgl. USt. NGO-Rabatt: 20% (Nachweis der Gemeinnützigkeit
        erforderlich).
      </p>
      <p>Token-Kontingente und Zusatzpakete nach Verbrauchsmodell.</p>
      <p>
        Service-Level: 99,5% Verfügbarkeit (ohne geplante Wartung). Support
        Mo-Fr 9-17 Uhr.
      </p>
    </div>
  </section>
</template>
