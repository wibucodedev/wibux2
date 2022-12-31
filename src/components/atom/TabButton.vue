<script setup lang="ts">
  withDefaults(
    defineProps<{ selected: boolean }>(),
    { selected: false }
  )
</script>

<template>
  <button 
    class="px-6 py-3"
    :class="selected && 'bg-wibux2-red text-white'"
  >
    <slot/>
  </button>
</template>