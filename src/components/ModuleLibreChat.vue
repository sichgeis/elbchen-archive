<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Server,
  Users,
  Library,
  Bot,
  ArrowRight,
  PencilRuler,
  HatGlasses,
  Amphora,
} from "lucide-vue-next";
</script>

<template>
  <section id="librechat" class="container py-16 sm:py-12">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      KI-Arbeitsplatz
    </h2>
    <h3 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Chat- und KI-Tools für dein ganzes Team
    </h3>
    <p class="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-8">
      EU-gehostete, datenschutzfreundliche Chat-Umgebung - ähnlich zu ChatGPT,
      aber zugeschnitten auf Vereine und NGOs. Inklusive integrierter
      Förderwerkzeuge.
    </p>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card class="bg-card">
        <CardHeader>
          <div class="flex items-center gap-2">
            <HatGlasses class="text-primary" />
            <CardTitle>Datenschutz</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="text-muted-foreground">
          Unser Service und deine Daten werden in der EU gehostet und erfüllen
          die europäischen Datenschutzbedingungen. Es gibt keine Nutzung deiner
          Inhalte zum Training der KI-Modelle.
        </CardContent>
      </Card>
      <Card class="bg-card">
        <CardHeader>
          <div class="flex items-center gap-2">
            <Server class="text-primary" />
            <CardTitle>Sprachmodelle</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="text-muted-foreground">
          Zur Auswahl stehen dir verschiedene Open-Source und kommerzielle
          KI-Modelle zur Verfügung. Das sind z.B. Openai GPT-5, Anthropic
          Claude, GPT-OSS, Mistral, Llama und weitere.
        </CardContent>
      </Card>
      <Card class="bg-card">
        <CardHeader>
          <div class="flex items-center gap-2">
            <Amphora class="text-primary" />
            <CardTitle>EU-Only Option</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="text-muted-foreground">
          Auf wunsch können wir deinen KI-Arbeitsplatz so einrichten, dass nur
          in der EU gehostete Sprachmodelle verwendet werden. Auch große Modelle
          wie GPT-5 sind für dich auf Servern in Schweden verfügbar.
        </CardContent>
      </Card>
      <Card class="bg-card">
        <CardHeader>
          <div class="flex items-center gap-2">
            <ShieldCheck class="text-primary" />
            <CardTitle>Sicherheit</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="text-muted-foreground">
          Unser Service wird regelmäßigen Sicherheitsprüfungen unterzogen. Und
          wir verschlüsseln deine Daten sowohl während der Übertragung als auch
          auf dem Server.
        </CardContent>
      </Card>
      <Card class="bg-card">
        <CardHeader>
          <div class="flex items-center gap-2">
            <Library class="text-primary" />
            <CardTitle>Wissensspeicher</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="text-muted-foreground">
          Lade Dokumente in den KI-Arbeitsplatz hoch oder binde einen
          Cloud-Speicher an, um eine private Wissensdatenbank zu erstellen.
          Damit sind alle eure Dokumente von der KI durchsuch- und verarbeitbar.
        </CardContent>
      </Card>
      <Card class="bg-card">
        <CardHeader>
          <div class="flex items-center gap-2">
            <Users class="text-primary" />
            <CardTitle>Prompts und Agents</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="text-muted-foreground">
          Erstelle eigene Prompts und Agents. Agents können PDFs, Docs und Texte
          verarbeiten und eigenständig Web-Suchen durchführen. Automatisiere
          wiederkehrende Aufgaben und teile diese in deiner Organisation.
        </CardContent>
      </Card>
      <Card class="bg-card">
        <CardHeader>
          <div class="flex items-center gap-2">
            <Bot class="text-primary" />
            <CardTitle>Vorgefertigte Helfer</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="text-muted-foreground">
          Fertige KI-Agenten wie der „Konzept-Coach“, die „Antragswerkstatt“
          oder der „Workshop-Buddy“ helfen dir beim Skizzieren, Sortieren,
          Sondieren und Ausarbeiten. Dabei bleibst du am Steuer und regelst das
          Vorgehen.
        </CardContent>
      </Card>
      <Card class="bg-card">
        <CardHeader>
          <div class="flex items-center gap-2">
            <PencilRuler class="text-primary" />
            <CardTitle>Maßgeschneidert</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="text-muted-foreground">
          Auf Wunsch bauen wir für euch komplexe KI-Workflows mit Agenten. Diese
          können dann z.B. auf Email-Postfächer zugreifen oder Dokumente aus
          einem Cloud-Speicher verarbeiten.
        </CardContent>
      </Card>
    </div>

    <div
      class="place-items-center gap-8 grid mx-auto py-2 md:py-2 lg:max-w-screen-xl"
    >
      <div class="space-y-8 text-center w-full">
        <div class="md:space-x-4 space-y-4 md:space-y-0">
          <Button as-child class="group/arrow w-5/6 md:w-1/5 font-bold">
            <a href="#contact" class="flex flex-row">
              Jetzt Demo vereinbaren
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
          Lerne den KI-Arbeitsplatz, unsere integrierten Förderwerkzeuge und
          smarten KI-Agenten kennen und vereinbare eine persönliche Demo.
        </div>
      </div>
    </div>
  </section>
</template>
