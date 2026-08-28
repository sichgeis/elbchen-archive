<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  Database,
  FileText,
  Infinity,
  ArrowRight,
} from "lucide-vue-next";
</script>

<template>
  <section id="stiftungskartei" class="container pb-16 sm:pb-12 pt-20 sm:pt-16">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Recherche-Tools
    </h2>
    <h3 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Werkzeuge für smarte Fördermittelbeschaffung
    </h3>
    <p class="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-8">
      Wir entwickeln digitale Tools, die dir die Fördermittelbeschaffung spürbar
      erleichtern.
    </p>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card class="bg-card">
        <CardHeader>
          <div class="flex items-center gap-2">
            <Search class="text-primary" /> <CardTitle>KI-Recherche</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="text-muted-foreground">
          Du gibts nur den Namen deiner Organisation ein und umreißt kurz das
          Vorhaben. Mit unserer automatische Web-Recherche ermitteln wir deine
          Mission, Zielgruppen und Region. Das ist die Basis für die
          intelligente Suche in unserer Datenbank.
        </CardContent>
      </Card>
      <Card class="bg-card">
        <CardHeader>
          <div class="flex items-center gap-2">
            <Database class="text-primary" />
            <CardTitle>Intelligente Suche</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="text-muted-foreground">
          Unser System gleicht deine Mission, Zielgruppen und Region mit über
          12.000 Stiftungen in Deutschland ab. Dabei nutzen wir KI-Technologien,
          um genau die Förderstiftungen zu finden, die zu dir und deinem
          Vorhaben passen.
        </CardContent>
      </Card>
      <Card class="bg-card">
        <CardHeader>
          <div class="flex items-center gap-2">
            <FileText class="text-primary" />
            <CardTitle>Steckbriefe</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="text-muted-foreground">
          Wir liefern dir alle Informationen zu deiner Suche an einem Ort:
          übersichtlich, priorisiert und umfassend inkl. Quellenangabe. Optimal
          sowohl für den schnellen Überblick als auch für eine effiziente
          Vorqualifizierung.
        </CardContent>
      </Card>
      <Card class="bg-card">
        <CardHeader>
          <div class="flex items-center gap-2">
            <Infinity class="text-primary" />
            <CardTitle>Voll Integriert</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="text-muted-foreground">
          Unsere Tools sind nicht nur als Web-App verfügbar, sie sind auch
          vollständig in unseren KI-Arbeitsplatz integriert. Hier können die sie
          ihre volle Stärke ausspielen und lassen sich nahtlos in neue oder
          bestehende KI-Workflows integrieren.
        </CardContent>
      </Card>
    </div>

    <div
      class="place-items-center gap-8 grid mx-auto py-2 md:py-2 lg:max-w-screen-xl"
    >
      <div class="space-y-8 text-center w-full">
        <div class="md:space-x-4 space-y-4 md:space-y-0">
          <Button as-child class="group/arrow w-5/6 md:w-1/5 font-bold">
            <a href="#librechat" class="flex flex-row">
              KI-Arbeitsplatz
              <ArrowRight
                class="ml-2 transition-transform group-hover/arrow:translate-x-1 size-5"
              />
            </a>
          </Button>

          <Button
            as-child
            class="group/arrow w-5/6 md:w-1/5"
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
          Lerne unsere Förderwerkzeuge im KI-Arbeitsplatz kennen und vereinbare
          eine Demo.
        </div>
      </div>
    </div>
  </section>
</template>
