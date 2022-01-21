import { Component, Input } from '@angular/core'

interface alternatingLayout {
  image?: {
    alt: string,
    src: string
  },
  text?: string
}

@Component({
  selector: 'app-alternating-layout',
  templateUrl: './alternating-layout.component.html',
  styleUrls: ['./alternating-layout.component.scss'],
})
export class AlternatingLayoutComponent {

  @Input()
  contents: alternatingLayout[] = []
  imageLeft = true

  updateState() {
    if(this.imageLeft) {
      this.imageLeft = false
    } else {
      this.imageLeft = true
    }
  }
}
