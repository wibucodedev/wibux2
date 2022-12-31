<script setup lang="ts">
  import { ref } from "vue"
  import { state } from "@/store"

  const inputFile = ref<any>('')
  const inputLabel = ref<any>('')

  const preventDefaults = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDropover = (e: any) => {
    preventDefaults(e)
    inputLabel.value.style.boxShadow = "7px 7px #A64652"
  }

  const handleDragleave = (e: any) => {
    preventDefaults(e)
    inputLabel.value.style.boxShadow = "10px 10px #A64652"
  }

  const dropHandler = (e: any) => {
    preventDefaults(e)
    inputFile.value.files = e.dataTransfer.files
    state.fileUpload = inputFile.value
    state.fileUploadName = e.dataTransfer.files[0].name
  }

  const handleUpload = (e: any) => {
    if(e.target.files[0]) {
      state.fileUpload = e.target
      state.fileUploadName = e.target.files[0].name
    }
  }

</script>

<template>
  <div class="pt-3 pb-2 text-lg">File:</div>
  <label 
    ref="inputLabel"
    for="file" 
    class="label-input-file shadow-solid-red w-full"
    @drop="dropHandler" 
    @dragenter="preventDefaults"
    @dragleave="handleDragleave"
    @dragover="handleDropover"
    dropzone="true"
  >
    <div class="flex items-center justify-center gap-2 opacity-60 w-full px-3 overflow-hidden">
      <IconGear v-if="state.loadingConvert" />
      <IconUpload v-else-if="!state.fileUpload && !state.fileUploadName" />
      <IconCheck v-else/>
      <p class="whitespace-nowrap truncate">
        {{ state.loadingConvert 
          ? `Converting ${state.fileUploadName}...` 
          : state.fileUploadName 
          || 'select your file or drag' 
        }}
      </p>
    </div>
    <input 
      ref="inputFile"
      type="file" 
      id="file" 
      class="hidden" 
      @change="handleUpload"
      accept="image/png, image/jpeg"
    />
  </label>
</template>

<style scoped>
.shadow-solid-red {
  box-shadow: 5px 5px #A64652;
}
.shadow-solid-red:hover {
  box-shadow: 3px 3px #A64652;
}
@media (min-width: 768px){
  .shadow-solid-red  {
    box-shadow: 10px 10px #A64652;
  }
  .shadow-solid-red:hover {
    box-shadow: 7px 7px #A64652;
  }
}

.label-input-file {
  @apply border-2 border-[#D3A3A9] w-full h-14 md:h-32 rounded-md grid place-items-center cursor-pointer transition duration-100
}
</style>