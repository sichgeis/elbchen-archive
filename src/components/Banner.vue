<script setup lang="ts">
import { Button } from "@/components/ui/button";

const handleButtonClick = (event: MouseEvent) => {
  event.stopPropagation();
  event.preventDefault();
  window.open("https://kartei.foerderwerk.org", "_blank");
};
</script>

<template>
  <a
    href="https://kartei.foerderwerk.org"
    target="_blank"
    rel="noopener noreferrer"
    class="block w-full bg-[#c21b0f] hover:bg-[#a11809] transition-colors duration-200"
  >
    <div
      class="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl container mx-auto px-4 py-3 flex items-center justify-between"
    >
      <div class="flex items-center gap-4 text-white">
        <span class="text-sm md:text-base font-medium">
          Entdecke unser neues Produkt - Die KI-gestützte Stiftungssuche!
        </span>
      </div>
      <Button
        variant="secondary"
        size="sm"
        class="bg-white text-[#c21b0f] hover:bg-gray-100"
        @click="handleButtonClick"
      >
        Stiftungskartei testen →
      </Button>
    </div>
  </a>
</template>
