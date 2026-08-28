<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Was ist Förderwerk?",
    answer:
      "Förderwerk hilft Vereinen und NGOs, schneller an Fördermittel zu kommen: mit der kostenlosen Stiftungskartei, einem KI-Arbeitsplatz (ähnlich wie ChatGPT) mit integrierten Recherche-Tools und durch Beratung/IT-Services.",
    value: "item-1",
  },
  {
    question:
      "Wie unterscheidet sich Förderwerk von anderen KI-Plattformen wie ChatGPT oder Claude?",
    answer:
      "Förderwerk ist dein DSGVO-konformer, EU-gehosteter KI-Arbeitsplatz, speziell für NGOs und Vereine - statt General-Purpose wie ChatGPT oder Claude. Neben dem sicheren Team-Chat erhältst du integrierte Förder-Workflows: Stiftungssuche, Konzept-Coach, Antragswerkstatt, Reporting und einen Wissensspeicher - alles nahtlos verbunden. Deine Daten bleiben geschützt, du wählst passende Modelle und bekommst auf Wunsch Beratung, Onboarding und maßgeschneiderte Automatisierungen. Förderwerk ist dabei genau so nutzbar wie die bekannten Plattformen,inklusive deren großen Sprachmodelle.",
    value: "item-2",
  },
  {
    question: "Ist Förderwerk DSGVO-konform?",
    answer:
      "Ja. Wir hosten in der EU, schließen einen Auftragsverarbeitungsvertrag (AVV), verschlüsseln Daten in Transit & at Rest und nutzen deine Inhalte nicht zum Training von Modellen.",
    value: "item-3",
  },
  {
    question: "Welche Sprachmodelle unterstützt ihr?",
    answer:
      "Wir unterstützen Open-Source-Modelle wie Mistral, Llama und GPT-OSS. Zusätzlich sind auch die großen kommerziellen Modelle wie OpenAI GPT-5, Anthropic Claude Sonnet/Opus oder Google Gemini nutzbar.",
    value: "item-4",
  },
  {
    question: "Werden meine Daten für das Training von Modellen benutzt?",
    answer:
      "Nein. Deine Daten werden bei uns nicht für das Training von Sprachmodellen genutzt.",
    value: "item-5",
  },
  {
    question: "Was bedeutet 'EU-Only Option'?",
    answer:
      "Wenn du besonderen Wert auf die Sicherheit deiner Daten legst, bietet sich die 'EU-Only-Option' an. Dir stehen dann nur die Modelle zur Verfügung, die auf europäischen Servern gehosted werden können. Das sind z.B. Open-Source-Modelle wie Mistral, LLama und GPT-OSS. Aber auch GPT-5 ist über die Cloud-Plattform Azure in der EU verfügbar.",
    value: "item-6",
  },
  {
    question: "Wie funktioniert die Stiftungskartei?",
    answer:
      "Du gibst Thema, Zielgruppe und Region an und erhältst priorisierte Treffer mit umfangreichen Steckbriefen aus 12.000 deutschen Stiftungen.",
    value: "item-7",
  },
  {
    question: "Gibt es eine Testphase und NGO-Rabatte?",
    answer:
      "Ja, du kannst Förderwerk 14 Tage kostenlos testen. Gemeinnützige Organisationen erhalten 20% Rabatt.",
    value: "item-8",
  },
  {
    question: "Wie werden Daten gespeichert und gesichert?",
    answer: "In EU-Rechenzentren. Tägliche Backups (30 Tage Aufbewahrung).",
    value: "item-9",
  },
  {
    question: "Bietet ihr Beratung & IT-Services an?",
    answer:
      "Ja. Wir ind dein Ansprechpartner für alle Themen wie: Digitalstrategien, barrierearme Websites nach WCAG, Open-Source-Services, Managed Hosting und IT-Support. Falls du nicht sicher bist, ob wir dich bei deinem Vorhaben unterstützen können, vereinbare einfach ein unverbindliches und kostenloses Beratungsgespräch über das Kontaktformular.",
    value: "item-10",
  },
  {
    question: "Kann ich monatlich kündigen?",
    answer: "Ja, alle agebotenen Pakete sind monatlich kündbar.",
    value: "item-11",
  },
  {
    question: "Gibt es SLAs?",
    answer:
      "Ja, für alle Pakete gilt eine Verfügbarkeit von 99,5% (ohne geplante Wartung). Der Support ist in der Zeit von Mo-Fr 9-17 Uhr für dich verfügbar.",
    value: "item-12",
  },
];
</script>

<template>
  <section id="faq" class="container md:w-[700px] py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">FAQ</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">Häufige Fragen</h2>
    </div>

    <Accordion type="single" collapsible class="AccordionRoot">
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4">
      Weitere Fragen?
      <a href="#contact" class="text-muted-foreground underline"
        >Kontakt aufnehmen</a
      >
    </h3>
  </section>
</template>
