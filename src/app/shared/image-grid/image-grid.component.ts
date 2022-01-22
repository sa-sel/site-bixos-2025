import { Component, Input } from '@angular/core'

import { ImageGridItemModel } from '@models'

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
})
export class ImageGridComponent {
  @Input() gridItems!: ImageGridItemModel[]
}
