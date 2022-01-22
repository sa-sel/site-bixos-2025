import { AlternatingLayout } from '@models'
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-alternating-layout',
  templateUrl: './alternating-layout.component.html',
  styleUrls: ['./alternating-layout.component.scss'],
})
export class AlternatingLayoutComponent implements OnInit {
  @Input() contents: AlternatingLayout[] = []
  isImageLeft = true

  ngOnInit(): void {
    for(let i = 0; i < this.contents.length; i++) {
      this.isImageLeft = !this.isImageLeft
      this.contents[i].imageOnLeft = this.isImageLeft
    }
  }

  swapSides() {
    this.isImageLeft = !this.isImageLeft
  }
}
