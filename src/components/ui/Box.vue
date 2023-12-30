<template>
  <div class="shadow-[-2px_-2px_4px_4px_rgb(255_255_255)_,2px_2px_4px_4px_rgb(226_232_240)] rounded" :class="class"><slot /></div>
</template>

<script setup lang="ts">
defineProps({
  class: {
    type: String,
    default: '',
  },
});
</script>