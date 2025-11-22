<template>
  <footer
    class="flex h-30 w-screen flex-wrap items-center justify-center gap-x-2
      gap-y-1 py-12 text-xs text-neutral-500"
  >
    <span>
      <p>
        使用
        <a
          class="font-mono font-bold hover:text-neutral-100 hover:underline"
          target="_blank"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY-NC-SA 4.0</a
        >
        许可
      </p>
    </span>

    <DividerBox vertical class="mx-0 h-3" />

    <section>
      <p class="font-mono">
        {{ `${dayjs().format("YYYY")}-PRESENT © ${AUTHOR_NAME}` }}
      </p>
    </section>

    <DividerBox vertical class="mx-0 hidden h-3 md:block" />

    <section>
      <p>
        由
        <a
          class="font-mono font-bold hover:text-orange-400"
          href="https://cloudflare.com/"
          >Cloudflare</a
        >
        提供网页托管服务
      </p>
    </section>
  </footer>
</template>

<script setup lang="ts">
import { AUTHOR_NAME } from "@/constants";
import dayjs from "dayjs";
import DividerBox from "../DividerBox.vue";
</script>
