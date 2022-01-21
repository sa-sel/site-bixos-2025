import { Injectable } from '@angular/core'

import { ImageGridItemModel } from '@models'

@Injectable({
  providedIn: 'root',
})
export class ImageTestService {
  images: ImageGridItemModel[] = []
  constructor() {}

  getImages(): ImageGridItemModel[] {
    for (let i = 0; i < 8; i++) {
      this.images.push(<ImageGridItemModel>{
        image: {
          src: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(i + 1)
            .toString(10)
            .padStart(3, '0')}.png`,
          alt: 'É o pokemon de id ' + (i + 1).toString(10),
        },
        url: `https://www.pokemon.com/us/pokedex/${(i + 1).toString(10)}`,
      })
    }
    return this.images
  }
}
