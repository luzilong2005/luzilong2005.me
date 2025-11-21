<template>
  <div class="my-8 flex items-center">
    <pre
      class="logo-animation mx-auto font-mono text-[0.4rem] text-neutral-300
        select-none md:text-xs lg:text-sm"
      :class="{
        'paused blur-lg': scrollY > 80,
      }"
      aria-hidden="true"
    >
      {{ banner }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { banner } from "@/banner";
import { onMounted, onUnmounted, shallowRef } from "vue";

const scrollY = shallowRef(0);
let rafId = 0;

function update() {
  scrollY.value = window.scrollY;
  rafId = requestAnimationFrame(update);
}

onMounted(() => {
  update();
});
onUnmounted(() => cancelAnimationFrame(rafId));
</script>
<style scoped>
.logo-animation {
  animation: swing-blink 60s linear infinite;
}
.logo-animation.paused {
  animation-play-state: paused;
}
/*prettier-ignore*/
@keyframes swing-blink {
  0%   { transform: rotate(0deg);   opacity: 1;   scale: 1;      }
  25%  { transform: rotate(5deg);   opacity: 0.3;                }
  50%  { transform: rotate(0deg);   opacity: 1;   scale: 0.8;   }
  75%  { transform: rotate(-5deg);  opacity: 0.3;                }
  100% { transform: rotate(0deg);   opacity: 1;   scale: 1;      }
}
</style>
