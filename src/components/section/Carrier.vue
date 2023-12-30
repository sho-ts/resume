<template>
  <Section title="Carrier">
    <p class="mb-4 text-sm ">Carrierを表示するにはパスワードを入力してください。</p>
    <div class="flex flex-col md:flex-row md:items-center gap-4">
      <Input :value="value" />
      <Button class="px-8 py-2 ">表示</Button>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '~/components/ui/Section.vue';
import Button from '~/components/ui/Button.vue';
import Input from '~/components/ui/Input.vue';

const value = ref('');
</script>
