<template>
  <section class="space-y-6">
    <h2 class="text-xl font-bold text-neutral-200">我的技术栈</h2>

    <TechStackBox title="包管理工具">
      <TagBox title="Bun" src="https://favicon.im/bun.sh" />
      <TagBox title="Pnpm" src="https://favicon.im/pnpm.io" />
    </TechStackBox>

    <TechStackBox title="前端">
      <TagBox
        title="HTML"
        src="https://images.icon-icons.com/2415/PNG/512/html_original_logo_icon_146477.png"
      />
      <TagBox
        title="CSS"
        src="https://images.icon-icons.com/2415/PNG/512/css_original_logo_icon_146575.png"
      />
      <TagBox
        title="JavaScript"
        src="https://images.icon-icons.com/2108/PNG/512/javascript_icon_130900.png"
      />
      <TagBox
        title="TypeScript"
        src="https://favicon.im/www.typescriptlang.org"
      />
      <TagBox title="Vue" src="https://favicon.im/vuejs.org" />
      <TagBox title="Vue-Router" src="https://favicon.im/router.vuejs.org" />
      <TagBox title="VueUse" src="https://favicon.im/vueuse.org" />
      <TagBox title="Pinia" src="https://favicon.im/pinia.vuejs.org" />
      <TagBox title="Sass" src="https://favicon.im/sass-lang.com" />
      <TagBox title="TailwindCSS" src="https://favicon.im/tailwindcss.com" />
      <TagBox title="Axios" src="https://favicon.im/axios-http.com" />
      <TagBox title="Storybook" src="https://favicon.im/storybook.js.org" />
      <TagBox title="Vitepress" src="https://favicon.im/vitepress.dev" />
    </TechStackBox>

    <TechStackBox title="构建工具">
      <TagBox title="Vite" src="https://favicon.im/vitejs.dev" />
    </TechStackBox>

    <TechStackBox title="组件库">
      <TagBox title="Element-Plus" src="https://favicon.im/element-plus.org" />
      <TagBox title="Naive-UI" src="https://favicon.im/www.naiveui.com" />
      <TagBox title="Ant-Design-Vue" src="https://favicon.im/ant.design" />
    </TechStackBox>

    <TechStackBox title="后端">
      <TagBox title="Node.js" src="https://favicon.im/nodejs.org" />
      <TagBox title="Express" src="https://favicon.im/expressjs.com" />
    </TechStackBox>

    <TechStackBox title="服务">
      <TagBox title="Github" src="https://favicon.im/github.com/" />
      <TagBox
        title="Cloudflare"
        src="https://favicon.im/dash.cloudflare.com/"
      />
    </TechStackBox>
  </section>
</template>

<script setup lang="ts">
import TagBox from "@/components/TagBox.vue";
import TechStackBox from "../components/TechStackBox.vue";
</script>
