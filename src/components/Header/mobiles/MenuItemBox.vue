<template>
  <component
    :is="props.link ? 'a' : 'div'"
    class="flex items-center justify-center space-x-2 rounded-lg p-2
      transition-colors active:bg-neutral-700"
    :href="props.link"
    target="_blank"
  >
    <slot></slot>
    <p>{{ props.title }}</p>
  </component>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  route?: string;
  link?: string;
}
const props = defineProps<Props>();
</script>
