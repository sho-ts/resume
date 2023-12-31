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
    <div v-else class="flex flex-wrap flex-col gap-8">
      <Box v-for="item in data.items" :key="item.name" class="pt-3 px-3 pb-4 md:pt-5 md:px-5 md:pb-6">
        <div class="flex flex-col gap-2 mb-6 md:flex-row md:gap-4 md:items-center md:mb-4">
          <h3 class="text-sm">{{ item.name }}</h3>
          <p class="text-xs text-right">
            <span>{{ item.start }} -</span>
            <span v-if="item.end" class="md:ml-2">{{ item.end }}</span>
          </p>
        </div>
        <List class="mt-2" :items="item.descriptions" />
        <Divide class="my-5" />
        <List :items="item.achievements" />
        <Divide class="my-5" />
        <ul class="flex flex-wrap gap-5">
          <li v-for="use in item.uses">
            <Badge>
              {{ use }}
            </Badge>
          </li>
        </ul>
      </Box>
    </div>
  </Section>
</template>

<script setup lang="ts">
const route = useRoute();
const password = ref((route.query.limited_token as string | undefined) ?? '');

const headers = computed(() => ({
  authorization: password.value,
}));

const { data, execute, pending, status, error } = useFetch('/api/resume', {
  method: 'GET',
  headers,
  immediate: !!password.value,
  watch: false,
});
</script>
