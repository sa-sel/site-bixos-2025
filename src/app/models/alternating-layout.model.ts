import { ImageModel } from './image.model'

export interface AlternatingLayout {
    image?: ImageModel,
    text?: string,
    imageOnLeft?: boolean
}
