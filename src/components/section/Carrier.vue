<template>
  <Section title="Carrier">
    <div v-if="!data">
      <p class="mb-4 text-sm">Carrierを表示するにはアクセスキーを入力してください。</p>
      <div class="flex flex-col md:flex-row md:items-center gap-4">
        <Input type="password" :value="password" @input="(e) => (password = e.target.value)" />
        <Button :loading="status !== 'idle' && pending" class="px-8 py-2" @click="execute">表示</Button>
      </div>
      <p v-if="error" class="mt-5 text-xs text-red-500">アクセスキーが違います</p>
    </div>
    <div v-else class="flex flex-wrap flex-col gap-6">
      <div v-for="item in data.items" :key="item.name">
        <h3 class="mb-2 text-sm">{{ item.name }}</h3>
        <p class="text-xs">
          <span>{{ item.start }} -</span>
          <span v-if="item.end" class="ml-2">{{ item.end }}</span>
        </p>
        <p class="text-xs leading-relaxed mt-2">{{ item.description }}</p>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '~/components/ui/Section.vue';
import Button from '~/components/ui/Button.vue';
import Input from '~/components/ui/Input.vue';

const route = useRoute();
const password = ref((route.query.limited_token as string | undefined) ?? '');

const headers = computed(() => ({
  authorization: password.value,
}));

const { data, execute, pending, status, error } = useFetch('/api/resume', {
  method: 'POST',
  headers,
  immediate: !!password.value,
  watch: false,
});

</script>
