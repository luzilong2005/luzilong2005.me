<template>
  <Popover class="relative inline-block text-left">
    <PopoverButton class="outline-none">
      <MenuMergeButton />
    </PopoverButton>
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <PopoverPanel
        class="absolute right-0 flex min-w-[180px] flex-col space-y-2 rounded-lg
          border border-neutral-500 bg-white/5 p-2"
      >
        <MenuItemBox :link="PROJECT_GITHUB_URL"> 项目地址 </MenuItemBox>
        <MenuItemBox title="粒子效果">
          <ParticlesBgSwitcher />
        </MenuItemBox>
        <MenuItemBox title="首页" route="/">
          <HomeIcon :size="20" />
        </MenuItemBox>
        <MenuItemBox title="Github 主页" :link="GITHUB_HOME_URL">
          <GithubIcon :size="20" />
        </MenuItemBox>
        <MenuItemBox title="二维码">
          <QrCodeButton />
        </MenuItemBox>
      </PopoverPanel>
    </Transition>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import MenuMergeButton from "./MenuMergeButton.vue";
import { Transition } from "vue";
import MenuItemBox from "./MenuItemBox.vue";
import { PROJECT_GITHUB_URL, GITHUB_HOME_URL } from "@/constants";
import ParticlesBgSwitcher from "../ParticlesBgSwitcher.vue";
import { GithubIcon, HomeIcon } from "lucide-vue-next";
import QrCodeButton from "../components/QrCodeButton.vue";
</script>
