import { Component, Input } from '@angular/core'

import { ImageGridItemModel, ModalModel } from '@models'
import { ModalComponent } from '@shared'

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
})
export class ImageGridComponent {
  @Input() gridItens!: ImageGridItemModel[]
  modal: ModalModel = {
    image: { src: '', alt: '' },
    text: '',
    url: '',
    title: '',
  }
  openModal = false
  createModal(modal: ModalModel) {
    this.modal = modal
    this.openModal = true
  }
}
