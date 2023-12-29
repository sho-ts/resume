<template>
  <input
    :type="type"
    :placeholder="props.placeholder"
    :value="props.value"
    class="bg-slate-100 shadow-[inset_-2px_-2px_1px_1px_rgb(255_255_255)_,inset_2px_2px_1px_1px_rgb(226_232_240)] rounded-full py-2 px-4"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
});
</script>
