<script setup lang="ts">
  interface BaseButtonProps {
    secondary?: boolean,
    icon?: string
  }

  const props = defineProps<BaseButtonProps>()
  
</script>

<template>
  <button 
    class="wibux2-button shadow-solid-black"
    :class="props.secondary ? 'bg-wibux2-blue' : 'bg-wibux2-red'"
  >
    <slot/>
  </button>
</template>