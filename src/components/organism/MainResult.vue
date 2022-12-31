<script setup lang="ts">

  import { IState } from "@/interface/storeInterface"
  import { state } from "@/store"
  import { toRefs } from "vue"

  const clearConvert = () => {
    state.convertCompleted = false
    state.fileUpload = null
    state.imageResult = ''
    state.fileUploadName = ''
    state.fileURL = ''
  }

  const { imageResult } = toRefs<IState>(state)

</script>

<template>
  <main class="box py-5 md:py-10 px-5 md:px-20 bg-white w-full main-shadow">
    <div class="w-full bg-gray-100 mb-5">
      <img :src="imageResult" class="w-full" alt="result">
    </div>
    <div class="flex items-center justify-between flex-col-reverse md:flex-row gap-8">
      <div>
        <BaseButton @click="clearConvert" secondary>
          <IconArrow/>
          Back
        </BaseButton>
      </div>
      <div class="flex items-center gap-5">
        <HrefButton 
          :href="imageResult"
          target="_blank"
        >
          <IconDownload/>
          DOWNLOAD
        </HrefButton>
      </div>
    </div>
  </main>
</template>