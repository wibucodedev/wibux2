<script lang="ts" setup>
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import IconArrow2 from '../icons/IconArrow2.vue';
import IconStar from '../icons/IconStar.vue';

const isOpen = ref(true)

onMounted(() => {
  if(window.localStorage.getItem('isGetWibux2Open')) {
    isOpen.value = JSON.parse(window.localStorage.getItem('isGetWibux2Open') as string) 
  }
})

const toggleOpen = () => {
  window.localStorage.setItem('isGetWibux2Open', (!isOpen.value).toString())
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="fixed w-full bottom-0 z-50" >
    <div 
      class="relative bg-gray-100 max-w-[710px] mx-auto p-4 transition-transform duration-200"
      :class="isOpen ? 'translate-y-0' : 'translate-y-24 md:translate-y-32'"
    >
      <button @click="toggleOpen" class="absolute left-0 bottom-full w-full">
        <div class="relative z-10 bg-gray-200 h-8 mx-auto w-32 rounded-full flex items-center justify-center">
          <IconArrow2 class="transiton-transform duration-200" :class="isOpen || '-rotate-180'"/>
        </div>
        <div class="absolute bottom-0 left-0 w-full bg-gray-200 h-5 rounded-t-sm"></div>
      </button>
      <div class="flex justify-between gap-5 md:gap-20">
        <div class="flex gap-2 md:gap-8">
          <img src="@/assets/images/wibux2-app-logo.png" class="h-16 md:h-24" alt="wibux2 app logo">
          <div class="flex flex-col justify-evenly">
            <h2 class="text-2xl md:text-3xl font-medium">Wibux2</h2>
            <div class="flex items-center gap-2">
              <IconStar/>
              <IconStar/>
              <IconStar/>
              <IconStar/>
              <IconStar/>
              <span class="text-base md:text-lg">5.0</span>
            </div>
          </div>
        </div>
        <a href="https://play.google.com/store/apps/details?id=com.wibucode.wibux2" target="_blank" class="flex items-center justify-center bg-wibux2-red hover:brightness-110 flex-grow md:m-2 text-white text-xl md:text-3xl rounded-md">
          Get App
        </a>
      </div>
    </div>
  </div>
</template>