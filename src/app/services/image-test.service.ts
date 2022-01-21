import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Image } from '@shared';

@Injectable({
  providedIn: 'root'
})
export class ImageTestService {
  images: Image[] = []
  constructor(private http: HttpClient) { }

  getImages(): Image[]{
    for(let i=0; i<898; i++){
      let image_tmp: Image = {
        image: {
          src: "",
          alt: "",
        },
        url: "",
      }
      let alt: string = "É o pokemon de id " + (i+1).toString(10)
      let src: string = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(i+1).toString(10).padStart(3, "0")}.png`
      let url: string = `https://www.pokemon.com/us/pokedex/${(i+1).toString(10)}`
      image_tmp.image.alt = alt
      image_tmp.image.src = src
      image_tmp.url = url
      this.images.push(image_tmp)
    }
    return this.images
  }

}
