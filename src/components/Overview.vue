<template>
  <Section title="Overview">
    <dl class="flex flex-wrap gap-6">
      <Box v-for="item in overview" :key="item.name" class="p-4 grow">
        <dt class="mb-2">{{ item.name }}</dt>
        <dd class="text-sm">
          <span>{{ item.value }}</span>
          <span v-if="item.detail" class="text-xs mt-1 md:mt-0 block md:inline"><span class="hidden md:inline px-1">/</span>{{ item.detail }}</span>
        </dd>
      </Box>
    </dl>
  </Section>
</template>

<script setup lang="ts">
import Section from '~/components/Section.vue';
import Box from '~/components/Box.vue';

const overview = [
  {
    name: 'Name',
    value: '田川翔太',
  },
  {
    name: 'Birth',
    value: '1995/10/11',
  },
  {
    name: 'Address',
    value: 'Osaka, Japan',
  },
  {
    name: 'Specialty',
    value: 'Frontend Development',
    detail: 'React, Next.js, TypeScript'
  }
];
</script>
