import { computed, reactive } from "vue"
import { IState } from "@/interface/storeInterface"
// @ts-ignore
import deepai from "deepai"


export const state = reactive<IState>({
  fileUpload: null,
  fileURL: '',
  fileUploadName: '',
  showAlert: null,
  loadingConvert: false,
  convertCompleted: false,
  isError: false,
  imageResult: '',
})

export const isFileError = computed(() => {
  return !state.fileUpload && !state.fileURL && state.isError
})

export const convertImage = async () =>{
  deepai.setApiKey(import.meta.env.VITE_DEEPAI_APIKEY);

  return new Promise(async (resolve, reject) => {
    try {
      let resp = await deepai.callStandardApi("waifu2x", {
        image: state.fileUpload || state.fileURL,
      });
      resolve(resp)
    } catch (error) {
      reject(error)
    }
  })
}