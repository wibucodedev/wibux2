export interface IState {
  fileUpload: File | null,
  fileURL: string,
  fileUploadName: string,
  showAlert: string | null,
  loadingConvert: boolean,
  convertCompleted: boolean,
  isError: boolean,
  imageResult: string,
}

export interface IConvertResponse {
  id: string,
  output_url: string
}