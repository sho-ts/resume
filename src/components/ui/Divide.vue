<template>
  <div class="w-full bg-slate-100 shadow-[inset_-1px_-1px_1px_1px_rgb(255_255_255)_,inset_1px_1px_1px_1px_rgb(226_232_240)] rounded-full h-1 appearance-none" :class="class" />
</template>

<script setup lang="ts">
defineProps<{
  class?: string;
}>();
</script>
