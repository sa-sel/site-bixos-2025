import { Component } from '@angular/core'
import { ImageModel } from '@models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  openModal = false
  image1: ImageModel = {
    src: '../../../assets/images/banner.jpg',
    alt: 'uma foto da comissao',
  }

  image2: ImageModel = {
    src: 'https://freepikpsd.com/file/2019/10/generic-company-logo-png-7-Transparent-Images.png',
    alt: 'uma logo qualquer',
  }

  toggleModal() {
    this.openModal = !this.openModal
  }
}
