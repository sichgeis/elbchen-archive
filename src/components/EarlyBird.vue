<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "@/components/ui/button";
import { ref, reactive } from "vue";
import { useFetch } from "@vueuse/core";

interface ContactFormeProps {
  name: string;
  email: string;
  newsletter: boolean;
}

const contactForm = reactive<ContactFormeProps>({
  name: "",
  email: "",
  newsletter: false,
});

const isEarlyBird = ref(false);

const handleSubmit = async () => {
  const url = "https://kartei.foerderwerk.org/api/subscriptions";

  const { response } = await useFetch(url).post(contactForm);
  if (response.value?.ok) {
    isEarlyBird.value = true;
  }
};
</script>

<template>
  <section id="earlyBird" class="container py-16 sm:py-12">
    <div class="container">
      <div class="lg:w-[60%] mx-auto">
        <Card
          class="bg-transparent shadow-none text-center flex flex-col items-center justify-center border-0"
        >
          <CardHeader>
            <CardTitle class="mb-2 text-lg text-primary tracking-wider">
              Werde Early-Bird 🐦
            </CardTitle>
            <CardTitle class="text-4xl md:text-5xl font-bold">
              Zugang zu den<br /><span
                class="text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text"
              >
                neuesten Entwicklungen
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent class="lg:w-[80%] text-xl text-muted-foreground pb-4">
            Als Early-Bird bekommst du als Erste einen kostenlosen Zugang zu
            Förderwerk und den neuesten Funktionen. Zudem gibt es Unterstützung
            bei der Recherche, Antragstellung und Berichterstattung.
            <br /><br />
            Trage dich hier unverbindlich und kostenlos ein!
          </CardContent>

          <CardFooter>
            <form
              v-if="!isEarlyBird"
              @submit.prevent="handleSubmit"
              class="gap-4 grid"
            >
              <div class="flex flex-col gap-2 sm:gap-4">
                <div class="flex md:flex-row flex-col gap-4 sm:gap-8">
                  <Input
                    class="placeholder:text-black/50"
                    id="first-name"
                    type="text"
                    placeholder="dein Name"
                    v-model="contactForm.name"
                  />

                  <Input
                    class="placeholder:text-black/50"
                    id="email"
                    type="email"
                    placeholder="deine.email@example.com"
                    v-model="contactForm.email"
                    required
                  />
                </div>

                <div class="self-start flex gap-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    v-model="contactForm.newsletter"
                  />
                  <Label for="email" class=""
                    >Zusätzlich zum Newsletter anmelden</Label
                  >
                </div>
              </div>
              <Button class="mt-2 sm:mt-4 group/arrow font-bold"
                >Jetzt Early-Bird werden</Button
              >
            </form>
            <div class="text-xl text-muted-foreground" v-else>
              Danke für deine Anmeldung!
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
</template>
