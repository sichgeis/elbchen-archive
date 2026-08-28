<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
</script>

<template>
  <section
    id="newsletter-badge"
    class="container grid place-items-center p-2 sm:p-6"
  >
    <Badge variant="outline" class="text-sm py-2">
      <a href="#earlyBird" class="flex flex-row">
        <span class="mr-2 text-primary">
          <Badge>Newsletter</Badge>
        </span>
        <span> Auf dem Laufenden bleiben! </span>
      </a>
    </Badge>
  </section>
</template>

<style lang="less" scoped></style>
