<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { reactive, ref } from "vue";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

import LinkedInIcon from "@/icons/LinkedInIcon.vue";
import { AlertCircle, Mail, Phone } from "lucide-vue-next";

interface ContactFormeProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactForm = reactive<ContactFormeProps>({
  name: "",
  email: "",
  subject: "Kennenlernen",
  message: "",
});

const invalidInputForm = ref<boolean>(false);

const handleSubmit = () => {
  const { name, email, subject, message } = contactForm;
  console.log(contactForm);

  const mailToLink = `mailto:christian@masch-tech.de?subject=${subject}&body=Hallo, mein Name ist ${name}, meine Email ist ${email}. %0D%0A${message}`;

  window.location.href = mailToLink;
};
</script>

<template>
  <section id="contact" class="py-20 sm:py-16 container">
    <section class="gap-8 grid grid-cols-1 md:grid-cols-2">
      <div>
        <div class="mb-4">
          <h2 class="mb-2 text-lg text-primary tracking-wider">Kontakt</h2>

          <h2 class="font-bold text-3xl md:text-4xl">
            Lass uns ins Gespräch kommen!
          </h2>
        </div>
        <p class="mb-8 lg:w-5/6 text-muted-foreground">
          Wir freuen uns mit dir in Kontakt zu treten. Schreibe eine Email,
          melde dich via LinkedIn oder ruf direkt an, um ins Gespräch zu kommen.
        </p>

        <div class="flex flex-col gap-4">
          <div>
            <div class="flex gap-2 mb-1">
              <Phone />
              <div class="font-bold">Ruf an</div>
            </div>
            <div>+49 151 1624 5800</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Mail />
              <div class="font-bold">Schreibe uns</div>
            </div>
            <div>christian@masch-tech.de</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <LinkedInIcon class="mx-0.5" />
              <div class="font-bold">Connecte uns</div>
            </div>
            <a
              href="https://www.linkedin.com/company/foerderwerk"
              target="_blank"
              >LinkedIn Business Page</a
            >
          </div>
        </div>
      </div>

      <!-- form -->
      <Card class="bg-muted/60 dark:bg-card">
        <CardHeader class="text-2xl text-primary"> </CardHeader>
        <CardContent>
          <form @submit.prevent="handleSubmit" class="gap-4 grid">
            <div class="flex md:flex-row flex-col gap-8">
              <div class="flex flex-col gap-1.5 w-full">
                <Label for="first-name">Name</Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder=""
                  v-model="contactForm.name"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="deine.email@example.com"
                v-model="contactForm.email"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="subject">Betreff</Label>

              <Select v-model="contactForm.subject">
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Kennenlernen"> Kennenlernen </SelectItem>
                    <SelectItem value="Newsletter abonnieren">
                      Newsletter abonnieren
                    </SelectItem>
                    <SelectItem value="Angebot anfragen">
                      Angebot anfragen
                    </SelectItem>
                    <SelectItem value="Weitere Informationen">
                      Weitere Informationen
                    </SelectItem>
                    <SelectItem value="Anregungen und Vorschläge">
                      Anregungen und Vorschläge
                    </SelectItem>
                    <SelectItem value="Interesse an einer Demo">
                      Interesse an einer Demo
                    </SelectItem>
                    <SelectItem value="Partnerschaften">
                      Partnerschaften
                    </SelectItem>
                    <SelectItem value="Sonstiges"> Sonstiges </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="message">Nachricht</Label>
              <Textarea
                id="message"
                placeholder="Deine Nachricht..."
                rows="5"
                v-model="contactForm.message"
              />
            </div>

            <Alert v-if="invalidInputForm" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Fehler</AlertTitle>
              <AlertDescription>
                Es gab einen Fehler im Formular. Bitte überprüfe deine Angaben.
              </AlertDescription>
            </Alert>

            <Button class="mt-4">Nachricht abschicken</Button>
          </form>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
    </section>
  </section>
</template>
