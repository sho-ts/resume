<template>
  <Section title="Carrier">
    <div v-if="!data">
      <p class="mb-4 text-sm">Carrierを表示するにはアクセスキーを入力してください。</p>
      <div class="flex flex-col md:flex-row md:items-center gap-4">
        <Input type="password" :value="password" @input="(e) => (password = e.target.value)" />
        <Button :loading="isPending" class="px-8 py-2" @click="handleSubmit">表示</Button>
      </div>
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
import { HTTP_STATUS } from '~/constants/httpStatus';

let isPending = ref(false);

const route = useRoute();

const password = ref((route.query.limited_token as string | undefined) ?? '');
const data = ref<{
  items: {
    name: string;
    start: string;
    end: string;
    description: string;
  }[];
} | null>(null);

const handleSubmit = async () => {
  try {
    isPending.value = true;

    const response = await $fetch('/api/resume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: password.value,
      },
    });

    data.value = response;
  } catch (e) {
    if (isFetchError(e)) {
      if (e.status === HTTP_STATUS.UNAUTHORIZED) {
        alert('アクセスキーが違います。');
      } else {
        alert('通信エラーが発生しました。');
      }
    }
  } finally {
    isPending.value = false;
  }
};
</script>
