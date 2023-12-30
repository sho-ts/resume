<template>
  <button
    :disabled="loading"
    class="relative shadow-[-2px_-2px_4px_4px_rgb(255_255_255)_,2px_2px_6px_4px_rgb(203_213_225)] rounded-full text-sm flex items-center justify-center transition duration-300 hover:shadow-[-1px_-1px_2px_2px_rgb(255_255_255)_,2px_2px_2px_2px_rgb(203_213_225)]"
  >
    <span
      v-if="loading"
      class="block absolute loading"
      :class="{
        block: loading,
      }"
    >
      <Icon  name="eos-icons:loading" size="24px" />
    </span>
    <span
      :class="{
        'opacity-100': !loading,
        'opacity-0': loading,
      }"
    >
      <slot />
    </span>
  </button>
</template>

<style scoped>
.loading {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script setup lang="ts">
defineProps<{
  loading?: boolean;
}>();
</script>
