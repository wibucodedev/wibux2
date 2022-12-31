<script setup lang="ts">

  interface HeaderProps {
    title: string,
    desc: string
  }

  defineProps<HeaderProps>()
</script>

<template>
  <header class="box bg-wibux2-red text-center py-8 md:py-16 text-white ">
    <h1 class="text-3xl md:text-4xl lg:text-6xl mb-2">
      {{ title }}
    </h1>
    <h2 class="text-base md:text-xl :text-2xl">
      {{ desc }}
    </h2>
  </header>
</template>