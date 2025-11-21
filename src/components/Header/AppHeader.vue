<template>
  <header
    class="fixed top-0 left-0 z-50 h-(--header-height) w-screen bg-white/1 px-6
      backdrop-blur-md transition-all duration-300"
  >
    <nav class="flex h-full items-center justify-between">
      <div class="flex items-center justify-start space-x-4">
        <AvatarBox class="size-12" />
        <SignatureBox />
      </div>
      <!-- 桌面端导航 -->
      <div class="hidden items-center space-x-2 sm:flex sm:space-x-4">
        <HeaderNavBox title="该项目的Github仓库地址" :link="PROJECT_GITHUB_URL">
          本项目
        </HeaderNavBox>
        <HeaderNavBox>
          <ParticlesBgSwitcher />
        </HeaderNavBox>
        <HeaderNavBox title="首页" route="/">
          <HomeIcon :size="20" />
        </HeaderNavBox>
        <HeaderNavBox title="Github 主页" :link="GITHUB_HOME_URL">
          <GithubIcon :size="20" />
        </HeaderNavBox>
        <HeaderNavBox title="二维码">
          <QrCodeButton />
        </HeaderNavBox>
      </div>

      <!-- 移动端菜单 -->
      <div class="sm:hidden">
        <MobileMenu />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { GithubIcon, HomeIcon } from "lucide-vue-next";
import HeaderNavBox from "./HeaderNavBox.vue";
import MobileMenu from "./mobiles/MobileMenu.vue";
import { GITHUB_HOME_URL, PROJECT_GITHUB_URL } from "@/constants";
import AvatarBox from "../AvatarBox.vue";
import SignatureBox from "./SignatureBox.vue";
import ParticlesBgSwitcher from "./ParticlesBgSwitcher.vue";
import QrCodeButton from "./components/QrCodeButton.vue";
</script>
