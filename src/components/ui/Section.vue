<template>
  <Box class="pt-4 pb-6 px-4 md:pt-6 pb-8 md:px-8">
    <Heading>{{ title }}</Heading>
    <slot />
  </Box>
</template>

<script setup lang="ts">
import Box from '~/components/ui/Box.vue';
import Heading from '~/components/ui/Heading.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
