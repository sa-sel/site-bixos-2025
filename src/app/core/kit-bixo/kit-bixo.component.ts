import { Component } from '@angular/core'
import { AlternatingLayoutModel, ImageGridItemModel } from '@models'

@Component({
  selector: 'app-kit-bixo',
  templateUrl: './kit-bixo.component.html',
})
export class KitBixoComponent {
  lastEditionsTextAndImageList: AlternatingLayoutModel[] = [
    {
      image: {
        alt: 'Kit Bixo 2022',
        src: '/assets/images/kit-bixo/kit_bixo_2022.jpg',
        caption: 'Kit Bixo de 2022',
      },
      text: 'Ao lado podemos ver a edição anterior, ou seja, de 2022, cujo tema foi "grafite".',
    },
    {
      image: {
        alt: 'Kit Bixo 2021',
        src: '/assets/images/kit-bixo/kit_bixo_2021.jpg',
        caption: 'Kit Bixo de 2021',
      },
      text: 'Ao lado podemos ver a edição de 2021, cujo tema foi "Super-Bixo no Bixoverso".',
    },
    {
      image: {
        alt: 'Kit Bixo 2020',
        src: '/assets/images/kit-bixo/kit_bixo_2020.jpg',
        caption: 'Kit Bixo de 2020',
      },
      text: 'Vemos ao lado a edição de 2020, cujo tema escolhido foi "pixel art".',
    },
  ]
}
