<template>
  <div class="flex w-full flex-col space-y-4">
    <AvatarBox />
    <h1 class="text-3xl font-bold">luzilong2005</h1>
    <p class="text-sm min-h-12 text-neutral-300" id="autotext"></p>
    <p>一个热爱编程的年轻人，喜欢探索新技术，喜欢挑战自我，喜欢分享知识。</p>
    <p>偶尔有点小BUG。</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import TypeIt from "typeit";
import AvatarBox from "@/components/AvatarBox.vue";

onMounted(() => {
  new TypeIt("#autotext", {
    strings:
      "嗨！我是luzilong2005，一名喜爱编程的开发者，欢迎来到我的个人网站。",
    speed: 50,
    loop: true,
    loopDelay: 10000,
  }).go();
});
</script>
