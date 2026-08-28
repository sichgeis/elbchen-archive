<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
</script>

<template>
  <section class="container">
    <div
      class="place-items-center gap-8 grid mx-auto py-8 md:py-8 lg:max-w-screen-xl"
    >
      <div class="space-y-8 text-center">
        <div
          class="mx-auto max-w-screen-md font-bold text-5xl text-center md:text-6xl"
        >
          <h1>
            <span class="bg-clip-text text-input">Förderwerk:</span>
            Digitale Werkzeuge für smarte Förderung
          </h1>
        </div>

        <p class="mx-auto max-w-screen-md text-muted-foreground text-xl">
          Förderwerk ist die Chat-GPT Alternative für NGOs und Vereine: Dein
          DSGVO-konformer KI-Arbeitsplatz für die tägliche Arbeit. Zusätzlich
          unterstützen dich integrierte smarte Tools bei der Recherche, der
          Antragstellung und dem Reporting bei der Fördermittelbeschaffung.
        </p>

        <div class="md:space-x-4 space-y-4 md:space-y-0">
          <Button as-child class="group/arrow w-5/6 md:w-1/3 font-bold">
            <a href="#contact" class="flex flex-row">
              Jetzt Demo vereinbaren
              <ArrowRight
                class="ml-2 transition-transform group-hover/arrow:translate-x-1 size-5"
              />
            </a>
          </Button>

          <Button
            as-child
            class="group/arrow w-5/6 md:w-1/3 font-bold"
            variant="secondary"
          >
            <a href="#value" class="flex flex-row">
              Unser Angebot
              <ArrowRight
                class="ml-2 transition-transform group-hover/arrow:translate-x-1 size-5"
              />
            </a>
          </Button>
        </div>

        <div class="text-sm text-muted-foreground">
          Wir freuen uns auf ein persönliches Kennenlerngespräch: vollkommen
          unverbindlich und kostenlos.
        </div>
      </div>

      <div class="group relative mt-6 md:mt-14">
        <!-- gradient shadow -->
        <div
          class="-top-2 right-12 absolute bg-primary/30 img-shadow-animation blur-3xl rounded-full w-[90%] h-12 lg:h-[80%]"
        ></div>

        <img
          class="relative flex items-center img-border-animation mx-auto border border-t-2 border-t-primary/30 rounded-lg w-full md:w-[1200px] leading-none rouded-lg"
          :src="'hero-image-librechat.jpg'"
          alt="dashboard using shadcn-vue"
        />

        <!-- gradient effect img -->
        <div
          class="bottom-0 left-0 absolute bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg w-full h-20 md:h-28"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
}
</style>
