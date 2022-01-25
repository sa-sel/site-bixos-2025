import { ImageModel } from './image.model'

export interface Style {
  customImageClasses?: string
  customTextClasses?: string
}

export interface AlternatingLayoutModel {
  image?: ImageModel
  text?: string
  imageStyle?: string
  textStyle?: string
  imageOnLeft?: boolean
}
