<template>
  <section>
    <Box class="pt-4 pb-6 px-4 md:pt-6 pb-8 md:px-8">
      <Heading>{{ title }}</Heading>
      <slot />
    </Box>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
