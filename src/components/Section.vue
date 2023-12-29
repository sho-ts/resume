<template>
  <Box class="pt-4 pb-6 px-4 md:pt-6 pb-8 md:px-8">
    <Heading>{{ title }}</Heading>
    <slot />
  </Box>
</template>

<script setup lang="ts">
import Box from '~/components/Box.vue';
import Heading from '~/components/Heading.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
