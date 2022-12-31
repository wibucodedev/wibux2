<script setup lang="ts">
import { state } from "./store"
</script>

<template>
  <section class="relative md:section-home pb-20 md:pb-48 overflow-x-hidden">
    <img class="hidden md:block absolute bottom-0 right-0" src="./assets/images/zero.webp" alt="">
    <div class="relative z-10 max-w-[750px] min-h-[120vh] md:min-h-[140vh] px-5 mt-5 mx-auto">
      <Header class="mb-7" title="Wibux2" desc="Change image quality with Wibux2" />
      <Main v-if="!state.convertCompleted"/>
      <MainResult v-else/>
      <Sample/>
      <Footer/>
    </div>
  </section>
  <GetApp/>
</template>
