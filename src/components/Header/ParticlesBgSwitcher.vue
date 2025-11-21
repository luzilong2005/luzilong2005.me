<template>
  <Switch
    title="开/关粒子效果"
    v-model:model-value="globals.enableParticles"
    :class="globals.enableParticles ? 'bg-neutral-700' : 'bg-neutral-800'"
    class="relative inline-flex h-5 w-10 items-center rounded-full"
  >
    <SparklesIcon
      :class="
        globals.enableParticles
          ? 'translate-x-5 text-neutral-100'
          : 'translate-x-2'
      "
      class="inline-block size-3 transform rounded-full transition"
    />
  </Switch>
</template>

<script setup>
import { Switch } from "@headlessui/vue";
import { useGlobalsStore } from "@/stores/useGlobalsStore";
import { SparklesIcon } from "lucide-vue-next";
const globals = useGlobalsStore();
</script>
