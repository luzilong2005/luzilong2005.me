<template>
  <vue-particles
    v-if="globals.enableParticles"
    class="absolute top-0 left-0 size-0"
    id="tsp"
    :options="options"
  >
  </vue-particles>
</template>
<script setup lang="ts">
import { useGlobalsStore } from "@/stores/useGlobalsStore";
import { reactive } from "vue";

const globals = useGlobalsStore();

const options = reactive({
  background: {
    opacity: 0,
  },
  autoPlay: true,
  clear: true,
  fpsLimit: 24,
  particles: {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    opacity: {
      value: 0.35,
    },
    number: {
      value: 200,
      limit: {
        mode: "delete",
        value: 500,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
    move: {
      enable: true,
      speed: 0.45,
      direction: "none",
      outModes: "out",
    },
    links: {
      enable: true,
      distance: 80,
      color: "#ffffff",
      opacity: 0.05,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.25,
          color: "#ffffff",
        },
      },
    },
  },
});
</script>
