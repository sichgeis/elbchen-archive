<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  PencilRuler,
  Accessibility,
  ShieldCheck,
  Server,
  GraduationCap,
  ServerCog,
} from "lucide-vue-next";

interface ServiceProps {
  title: string;
  description: string;
  icon: any;
}

const serviceList: ServiceProps[] = [
  {
    title: "Digitalisierungsberatung",
    description:
      "Wir entwickeln mit dir förderfähige Roadmaps mit Zielbild, Maßnahmen, Budget und Förderoptionen. Mit dir zusammen analysieren wir deine Anforderungen, identifizieren Quick Wins und entwickeln Entscheidungsvorlagen.",
    icon: PencilRuler,
  },
  {
    title: "Barrierearme Websites",
    description:
      "Wir machen deine bestehende oder neue Website barrierearm nach WCAG. Wir analysieren, optimieren und betreiben die Site und bieten Redaktionstraining, DSGVO-freundliche Webanalyse, Wartung und Betrieb aus einer Hand.",
    icon: Accessibility,
  },
  {
    title: "Softwareentwicklung",
    description:
      "Wir setzen dein Digitalisierungsvorhaben professionell um - inkl. Anforderungsanalyse, UX/UI-Design, Implementierung und Betrieb. Wir entwickeln Web-Apps, Portale und Schnittstellen, integrieren deine Systeme und automatisieren Prozesse.",
    icon: ShieldCheck,
  },
  {
    title: "Open-Source für NGOs",
    description:
      "Nextcloud, CiviCRM/Odoo, Rocket.Chat, Jitsi, Matomo u.a.: Wir helfen bei Auswahl, Setup, Rechtekonzept, Integration und Schulung - transparent, ohne Herstellerbindung. Auf Wunsch betreiben wir deine Digitaltools als Managed Service.",
    icon: Server,
  },
  {
    title: "Schulung & Governance",
    description:
      "Praxisnahe Trainings zu KI und Datenschutz für alle, von der Einsteiger:in bis zur Expert:in. Wir bieten Vorlagen für AV-Verträge, Löschkonzepte und Datenflüsse sowie klare KI-Richtlinien. Schulungen bieten wir remote oder vor Ort an.",
    icon: GraduationCap,
  },
  {
    title: "Hosting Service",
    description:
      "Wir betreiben deine gewählten Digitaltools auf EU-Servern: Monitoring, Backups, Updates, Security-Patches - verschlüsselt und DSGVO-konform inkl. AV-Vertrag. Mit klaren SLAs und planbarer monatlicher Abrechnung.",
    icon: ServerCog,
  },
];
</script>

<template>
  <section id="beratung" class="container pt-16 sm:pt-12 pb-20 sm:pb-16">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Beratung & IT-Services
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Von der Strategie bis zum Betrieb
    </h2>
    <p class="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-8">
      Wir beraten zu Digitalisierungsmaßnahmen, setzen barrierearme Websites um,
      entwickeln Apps und maßgeschneiderte Digitallösungen und betreiben eure
      Digitalinfrastruktur auf Servern in der EU.
    </p>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div v-for="{ title, description, icon } in serviceList" :key="title">
        <Card class="bg-card">
          <CardHeader>
            <div class="flex items-center gap-2">
              <component :is="icon" class="text-primary" />
              <CardTitle>{{ title }}</CardTitle>
            </div>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>

    <div
      class="place-items-center gap-8 grid mx-auto py-2 md:py-2 lg:max-w-screen-xl"
    >
      <div class="space-y-8 text-center w-full">
        <div class="md:space-x-4 space-y-4 md:space-y-0">
          <Button as-child class="group/arrow w-5/6 md:w-1/5 font-bold">
            <a href="#contact" class="flex flex-row">
              Jetzt Kontakt aufnehmen
              <ArrowRight
                class="ml-2 transition-transform group-hover/arrow:translate-x-1 size-5"
              />
            </a>
          </Button>

          <Button
            as-child
            class="group/arrow w-5/6 md:w-1/5 font-bold"
            variant="secondary"
          >
            <a href="#earlyBird" class="flex flex-row">
              Zur Early-Bird-Liste
              <ArrowRight
                class="ml-2 transition-transform group-hover/arrow:translate-x-1 size-5"
              />
            </a>
          </Button>
        </div>

        <div class="text-sm text-muted-foreground">
          Hast du ein Digitalisierungsvorhaben, planst einen Website-Relaunch
          oder suchst nach verlässlichem Hosting? Kontaktiere uns für ein
          unverbindliches Kennenlernen.
        </div>
      </div>
    </div>
  </section>
</template>
