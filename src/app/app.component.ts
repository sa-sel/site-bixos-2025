import { Component } from '@angular/core'
import { ImageModel } from '@models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  image1: ImageModel = {
    src: '../../../assets/images/banner.jpg',
    alt: 'uma foto da comissao',
  }

  image2: ImageModel = {
    src: 'https://pixy.org/src2/600/6007103.jpg',
    alt: 'imagem teste',
  }

  image3: ImageModel = {
    src: 'https://freepikpsd.com/file/2019/10/generic-company-logo-png-7-Transparent-Images.png',
    alt: 'uma logo qualquer',
  }
}
