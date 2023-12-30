<template>
  <Section title="Overview">
    <p class="mb-6 tracking-wider text-sm leading-relaxed">
      2020年末からプログラミングを学び始めました。<br />
      フロントエンドが専門で、主にTypeScriptとNext.jsを使って仕事をしています。<br />
      現在は株式会社PLAN-Bにフロントエンドエンジニアとして勤めています。<br />
      このResumeは、勉強の一環としてNuxt.jsで作成しました。
    </p>
    <dl class="flex flex-wrap gap-6">
      <Box v-for="item in overview" :key="item.name" class="p-4 grow">
        <dt class="mb-2 tracking-wider">{{ item.name }}</dt>
        <dd class="text-sm">
          <span>{{ item.value }}</span>
          <span v-if="item.detail" class="text-xs mt-1 md:mt-0 block md:inline"><span class="hidden md:inline px-1">/</span>{{ item.detail }}</span>
        </dd>
      </Box>
    </dl>
  </Section>
</template>

<script setup lang="ts">
import Section from '~/components/ui/Section.vue';
import Box from '~/components/ui/Box.vue';

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
    detail: 'React, Next.js, TypeScript',
  },
];
</script>
