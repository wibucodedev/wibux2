<script setup lang="ts">
  defineProps<{ message: string }>()
</script>

<template>
  <div class="wibux2-alert">
    {{ message }}
  </div>
</template>

<style>
  .wibux2-alert {
    @apply fixed top-3 right-3 z-10 text-white font-medium bg-wibux2-red px-3 py-2 rounded-lg border-2 border-black shadow-lg;
  }
</style>