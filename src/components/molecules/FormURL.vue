<script setup lang="ts">
  import { ref } from "vue"

  import { state } from "@/store"
  import { createDebounce, isValidURL } from "@/utils/helpers"

  const debounce = createDebounce()

  const inputBg = ref<string>('')

  const validURL = ref<boolean>(false)
  
  const changeURL = (e: any) => {
    debounce(() => {
      state.fileURL = e.target.value
      validURL.value = isValidURL(state.fileURL)
      inputBg.value = isValidURL(state.fileURL) ? 'bg-blue-100' : 'bg-wibux2-red/20'
    }, 500)
  }

</script>

<template>
  <div class="pt-3 pb-2 text-lg">URL:</div>
  <div class="flex items-center h-10 rounded-md border border-black overflow-hidden">
    <div class="h-full px-4 border-r border-black grid place-items-center">
      <IconUrl />
    </div>
    <input 
      type="text" 
      class="h-full px-5 w-full focus:outline-none"
      :class="inputBg"
      name="from-url" 
      id="from-url" 
      :value="state.fileURL"
      @input="changeURL"
      placeholder="type URL"
    />
  </div>
  <div v-if="state.loadingConvert" class="flex items-center justify-center mt-3">
    <IconGear class="mr-2 opacity-60" /> Converting...
  </div>
</template>