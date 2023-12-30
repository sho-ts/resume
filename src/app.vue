<template>
  <div class="py-6 px-4 md:px-6 bg-slate-100 min-h-screen min-h-dvh">
    <div class="max-w-screen-lg mx-auto">
      <Header />
      <main class="py-6">
        <div class="flex flex-col gap-12">
          <Overview />
          <Carrier />
          <Skill />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/layoutHeader.vue';
import Skill from '~/components/section/Skill.vue';
import Carrier from '~/components/section/Carrier.vue';
import Overview from '~/components/section/Overview.vue';

useHead({
  title: 'RESUME',
});
</script>
