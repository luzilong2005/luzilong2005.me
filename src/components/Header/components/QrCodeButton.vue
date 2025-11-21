<template>
  <button class="flex" @click="handleOpenQrCodeModal">
    <QrCodeIcon :size="20" class="cursor-pointer" />
  </button>
</template>

<script setup lang="ts">
import { QrCodeIcon } from "lucide-vue-next";
import swal from "sweetalert2";
import { renderSVG } from "uqr";
import { Canvg } from "canvg";
import { WEB_SITE_URL } from "@/constants";
import { debounce } from "es-toolkit";

const generateQRCode = async (
  url: string,
): Promise<{ dataUrl: string; downloadUrl: string }> => {
  const qrCode = renderSVG(url);
  const canvas = document.createElement("canvas");
  const size = 128;

  const pixelRatio = window.devicePixelRatio || 1;
  canvas.width = size * pixelRatio;
  canvas.height = size * pixelRatio;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("无法获取画布上下文");

  ctx.imageSmoothingEnabled = false;
  const v = await Canvg.from(ctx, qrCode);
  await v.render();

  const dataUrl = canvas.toDataURL("image/png");
  const blob = await (await fetch(dataUrl)).blob();
  const downloadUrl = URL.createObjectURL(blob);

  return { dataUrl, downloadUrl };
};

const downloadQrCode = debounce((downloadUrl: string) => {
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = "qrCode.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}, 500);

const handleOpenQrCodeModal = async () => {
  try {
    const { dataUrl, downloadUrl } = await generateQRCode(WEB_SITE_URL);
    const size = 128;

    swal.fire({
      theme: "dark",
      title: "扫描二维码访问网站",
      imageUrl: dataUrl,
      imageWidth: size,
      imageHeight: size,
      html: `<button id="download-qr" class="text-blue-400 hover:text-blue-300 bg-transparent border-none cursor-pointer">下载 PNG</button>`,
      showCloseButton: true,
      showConfirmButton: false,
      didOpen: () => {
        const downloadBtn = document.getElementById("download-qr");
        if (downloadBtn) {
          downloadBtn.addEventListener("click", () => downloadQrCode(downloadUrl));
        }
      },
    });
  } catch (error) {
    console.error("生成二维码失败:", error);
    swal.fire({
      icon: "error",
      title: "生成二维码失败",
      text: "请稍后再试",
    });
  }
};
</script>