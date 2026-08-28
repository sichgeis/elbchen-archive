<template>
  <header
    :class="{
      'top-0 mx-auto sticky z-40 p-2 bg-card shadow-md': true,
    }"
  >
    <div
      :class="{
        'w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl flex justify-between items-center mx-auto': true,
      }"
    >
      <a href="/" class="font-bold text-lg flex items-center">
        <img class="h-16 w-16 mr-2" :src="imageSrc" alt="Förderwerk Logo" />
        {{ title }}</a
      >
      <!-- Mobile -->
      <div class="flex items-center lg:hidden">
        <Sheet v-model:open="isOpen">
          <SheetTrigger as-child>
            <Menu @click="isOpen = true" class="cursor-pointer" />
          </SheetTrigger>

          <SheetContent
            side="left"
            class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
          >
            <div>
              <SheetHeader class="mb-4 ml-4">
                <SheetTitle class="flex items-center">
                  <a href="/" class="flex items-center">
                    <img
                      class="h-16 w-16 mr-2"
                      :src="imageSrc"
                      alt="Förderwerk Logo"
                    />
                    {{ title }}
                  </a>
                </SheetTitle>
              </SheetHeader>

              <div class="flex flex-col gap-2">
                <Button
                  v-for="{ href, label } in routeList"
                  :key="label"
                  as-child
                  variant="ghost"
                  class="justify-start text-base"
                >
                  <a @click="isOpen = false" :href="href">
                    {{ label }}
                  </a>
                </Button>
              </div>
            </div>

            <SheetFooter class="flex-col sm:flex-col justify-start items-start">
              <Separator class="mb-2" />
              <div class="flex flex-row">
                <Button
                  as-child
                  size="sm"
                  variant="ghost"
                  aria-label="Kontakt via Email"
                >
                  <a
                    aria-label="Kontakt via Email"
                    href="mailto:christian@masch-tech.de"
                    target="_blank"
                  >
                    <Mail class="size-6" />
                  </a>
                </Button>

                <Button
                  as-child
                  size="sm"
                  variant="ghost"
                  aria-label="Kontakt on LinkedIn"
                >
                  <a
                    aria-label="Kontakt on LinkedIn"
                    href="https://www.linkedin.com/company/foerderwerk"
                    target="_blank"
                  >
                    <LinkedInIcon class="size-6" />
                  </a>
                </Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <!-- Desktop -->
      <NavigationMenu class="hidden lg:block px-4">
        <NavigationMenuList>
          <NavigationMenuItem class="flex flex-wrap justify-center">
            <NavigationMenuLink asChild>
              <Button
                v-for="{ href, label } in routeList"
                :key="label"
                as-child
                variant="ghost"
                class="justify-start text-base"
              >
                <a :href="href">
                  {{ label }}
                </a>
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div class="hidden lg:flex pl-3">
        <Button
          as-child
          size="sm"
          variant="ghost"
          aria-label="Kontakt via Email"
        >
          <a
            aria-label="Kontakt via Email"
            href="mailto:christian@masch-tech.de"
            target="_blank"
          >
            <Mail class="size-6" />
          </a>
        </Button>

        <Button
          as-child
          size="sm"
          variant="ghost"
          aria-label="Kontakt on LinkedIn"
        >
          <a
            aria-label="Kontakt on LinkedIn"
            href="https://www.linkedin.com/company/foerderwerk"
            target="_blank"
          >
            <LinkedInIcon class="size-6" />
          </a>
        </Button>
      </div>
    </div>
  </header>
  <!-- adds padding to the bottom, so that the next component is properly spaced -->
  <div class="p-4"></div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
mode.value = "dark";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import LinkedInIcon from "@/icons/LinkedInIcon.vue";
import { Mail, Menu } from "lucide-vue-next";

interface RouteProps {
  href: string;
  label: string;
}

const title = "Förderwerk";
const imageSrc = "foerderwerk-mono-transparent-logo.svg";
const routeList: RouteProps[] = [
  { href: "#value", label: "Angebot" },
  { href: "#stiftungskartei", label: "Recherche-Tools" },
  { href: "#librechat", label: "KI-Arbeitsplatz" },
  { href: "#beratung", label: "Beratung" },
  { href: "#pricing", label: "Preise" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Kontakt" },
];

const isOpen = ref<boolean>(false);
</script>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>
