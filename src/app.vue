<template>
  <div class="py-6 px-4 md:px-6 bg-slate-100 min-h-screen min-h-dvh tracking-wider">
    <div class="max-w-screen-lg mx-auto">
      <Header />
      <main class="py-6">
        <div class="flex flex-col gap-12">
          <Overview />
          <Carrier />
          <Skills />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/layout/Header.vue';
import Skills from '~/components/section/Skills.vue';
import Carrier from '~/components/section/Carrier.vue';
import Overview from '~/components/section/Overview.vue';

useHead({
  title: 'RESUME',
  meta: [{ name: 'robots', content: 'noindex' }],
});
</script>
