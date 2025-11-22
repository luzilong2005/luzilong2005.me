<template>
  <section class="flex flex-col items-center gap-6">
    <h2 class="text-xl font-bold text-neutral-100">联系我</h2>

    <div class="flex flex-wrap items-center justify-center gap-4">
      <LinkBox>
        <img
          src="https://images.icon-icons.com/2429/PNG/512/qq_logo_icon_147246.png"
          alt="QQ"
          loading="lazy"
          class="size-5"
        />
        <span
          class="ml-2 cursor-pointer hover:text-cyan-500"
          title="点击复制"
          @click="copyClipboard(ME_QQ_CODE)"
        >
          {{ ME_QQ_CODE }}
        </span>
      </LinkBox>

      <LinkBox>
        <img
          class="size-5"
          alt="微信"
          loading="lazy"
          src="https://images.icon-icons.com/3685/PNG/512/wechat_logo_icon_229288.png"
        />
        <span
          class="ml-2 cursor-pointer hover:text-emerald-500"
          title="点击复制"
          @click="copyClipboard(ME_WECHAT_CODE)"
          >{{ ME_WECHAT_CODE }}</span
        >
      </LinkBox>

      <LinkBox>
        <MailIcon :size="20" />
        <span
          class="ml-2 cursor-pointer hover:text-orange-500"
          title="点击复制"
          @click="copyClipboard(ME_EMAIL)"
        >
          {{ ME_EMAIL }}
        </span>
      </LinkBox>

      <LinkBox :link="GITHUB_HOME_URL">
        <GithubIcon :size="20" />
      </LinkBox>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GithubIcon, MailIcon } from "lucide-vue-next";
import LinkBox from "../components/LinkBox.vue";
import {
  ME_EMAIL,
  GITHUB_HOME_URL,
  ME_QQ_CODE,
  ME_WECHAT_CODE,
} from "@/constants";
import copyClipboard from "copy-text-to-clipboard";
</script>
