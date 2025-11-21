<template>
  <header
    class="fixed top-0 left-0 h-(--header-height) w-screen bg-white/1 px-6
      backdrop-blur-md"
  >
    <nav class="flex h-full items-center justify-between">
      <div class="flex items-center justify-start space-x-4">
        <AvatarBox class="size-12" />
        <SignatureBox />
      </div>
      <div class="flex items-center">
        <HeaderNavBox title="该项目的Github仓库地址" :link="PROJECT_GITHUB_URL">
          本项目
        </HeaderNavBox>
        <HeaderNavBox>
          <ParticlesToggler />
        </HeaderNavBox>
        <HeaderNavBox title="首页" route="/">
          <HomeIcon :size="20" />
        </HeaderNavBox>
        <HeaderNavBox title="Github 主页" :link="GITHUB_HOME_URL">
          <GithubIcon :size="20" />
        </HeaderNavBox>
        <HeaderNavBox title="二维码" @click="handleOpenQrCodeModal">
          <QrCodeIcon :size="20" class="cursor-pointer" />
        </HeaderNavBox>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { GithubIcon, HomeIcon, QrCodeIcon } from "lucide-vue-next";
import HeaderNavBox from "./HeaderNavBox.vue";
import { GITHUB_HOME_URL, PROJECT_GITHUB_URL, WEB_SITE_URL } from "@/constants";
import swal from "sweetalert2";
import { renderSVG } from "uqr";
import { Canvg } from "canvg";
import ParticlesToggler from "./ParticlesToggler.vue";
import AvatarBox from "../AvatarBox.vue";
import SignatureBox from "./SignatureBox.vue";
const handleOpenQrCodeModal = async () => {
  const qrCode = renderSVG(WEB_SITE_URL);
  const canvas = document.createElement("canvas");
  const w = 128;
  const h = 128;
  canvas.width = w * window.devicePixelRatio;
  canvas.height = h * window.devicePixelRatio;
  const ctx = canvas.getContext("2d");
  ctx!.imageSmoothingEnabled = false;
  const v = await Canvg.from(ctx!, qrCode);
  await v.render();
  const pngDataUrl = canvas.toDataURL("image/png");
  const pngUrl = URL.createObjectURL(
    new Blob([pngDataUrl], { type: "image/png" }),
  );

  swal.fire({
    theme: "dark",
    title: "扫描二维码访问网站",
    imageUrl: pngDataUrl,
    imageWidth: w,
    imageHeight: h,
    html: `<a href="${pngUrl}" download="qrCode.png">下载 PNG</a>`,
  });
};
</script>
