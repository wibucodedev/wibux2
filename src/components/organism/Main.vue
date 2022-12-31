<script setup lang="ts">
  import { 
    TabGroup, 
    TabList, 
    Tab, 
    TabPanels, 
    TabPanel
  } from '@headlessui/vue'

  import { convertImage, state } from "@/store"
  import { IConvertResponse } from '@/interface/storeInterface'

  const handleConvert = async () => {
    state.loadingConvert = true
    if(!state.fileUpload && !state.fileURL) {
      state.showAlert = 'please, insert the image!'
      state.loadingConvert = false
      setTimeout(() => state.showAlert = '', 3000)
    } else {
      try {
        const res = await convertImage() as IConvertResponse
        state.imageResult = res.output_url
        state.convertCompleted = true
        state.loadingConvert = false
      } catch (error) {
        console.log((error as Error).message)
        state.showAlert = (error as Error).message
        state.loadingConvert = false
        setTimeout(() => state.showAlert = '', 3000)
      }
      
    }
  }

</script>

<template>
  <Alert v-if="state.showAlert" :message="state.showAlert" />
  <main class="main-section box main-shadow">
    <div class="relative min-h-[15rem]">
      <TabGroup>
        <TabList class="border-b border-wibux2-red">
          <Tab v-slot="{ selected }" as="template" >
            <TabButton :selected="selected">
              From File
            </TabButton>
          </Tab>
          <Tab v-slot="{ selected }" as="template" >
            <TabButton :selected="selected">
              From URL
            </TabButton>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FromFile/>
          </TabPanel>
          <TabPanel>
            <FormURL/>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
    <div class="pt-6 flex flex-col sm:flex-row justify-between gap-5">
      <div>
        <div class="flex gap-2 items-baseline mb-1">
          <IconCheck class="text-wibux2-blue"/>
          Highest noise reduction
        </div>
        <div class="flex gap-2 items-baseline ">
          <IconCheck class="text-wibux2-blue"/>
          2X Resolution
        </div>
      </div>
      <BaseButton @click="handleConvert">
        Convert
      </BaseButton>
    </div>
  </main>
</template>

<style>
  .main-section {
    @apply relative py-5 md:py-10 px-5 md:px-20 bg-white w-full;
  }
  .main-shadow {
    box-shadow: 13px 13px black;
  }
  @media (min-width: 768px){
    .main-shadow {
      box-shadow: 18px 18px black;
    }
  }
</style>