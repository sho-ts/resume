<template>
  <ul class="text-xs leading-relaxed list-disc pl-4" :class="class">
    <li v-if="items" v-for="item in items" key="item">{{ item }}</li>
    <slot v-else />
  </ul>
</template>

<script setup lang="ts">
defineProps<{ class?: string; items?: string[] }>();
</script>
