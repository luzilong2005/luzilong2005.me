<template>
  <component
    :is="componentType"
    :class="['inline-flex h-8 items-center justify-center px-2']"
    :href="props.link"
    :to="props.route"
    :target="props.link && '_blank'"
  >
    <span
      class="truncate text-sm text-neutral-400 transition-colors select-none
        hover:text-neutral-100"
      :title="props.tooltip"
    >
      <slot></slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";

interface Props {
  tooltip?: string;
  link?: string;
  route?: string;
}

const props = defineProps<Props>();

const componentType = computed(() => {
  if (props.route) return RouterLink;
  return "a";
});
</script>
