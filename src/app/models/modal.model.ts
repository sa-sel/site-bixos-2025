import { ImageModel } from "./image.model"

export interface ModalModel {
  image ?: ImageModel
  isOpen : boolean
  text ?: string
  title : string
}