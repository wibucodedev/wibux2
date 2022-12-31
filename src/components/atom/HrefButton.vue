<script setup lang="ts">
  interface HrefButtonProps {
    secondary?: boolean,
    icon?: string,
    href: string,
    target?: string
  }

  const props = defineProps<HrefButtonProps>()
  
</script>

<template>
  <a
    :href="href"
    :target="target"
    class="wibux2-button shadow-solid-black"
    :class="props.secondary ? 'bg-wibux2-blue' : 'bg-wibux2-red'"
  >
    <slot/>
  </a>
</template>