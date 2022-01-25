import { AlternatingLayoutModel } from '@models'
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-alternating-layout',
  templateUrl: './alternating-layout.component.html',
  styleUrls: ['./alternating-layout.component.scss'],
})
export class AlternatingLayoutComponent implements OnInit {
  @Input() contents: AlternatingLayoutModel[] = []
  isImageLeft = true

  ngOnInit(): void {
    this.contents = this.contents.map(item => {
      if (item.image && item.text) {
        this.isImageLeft = !this.isImageLeft
        return { ...item, imageOnLeft: this.isImageLeft }
      }
      return item
    })
  }

  getCustomTextClasses = (
    imageOnLeft: boolean,
    textHeight: number,
    imageHeight: number
  ): string => {
    if (textHeight < imageHeight) {
      const order = imageOnLeft ? 'order-2' : 'order-1'
      return `px-5 w-50 ${order}`
    }
    return ''
  }

  getCustomImageClasses = (
    imageOnLeft: boolean,
    textHeight: number,
    imageHeight: number
  ) => {
    if (textHeight < imageHeight) {
      return imageOnLeft ? 'order-1' : 'order-2'
    }
    return imageOnLeft ? 'left' : 'right'
  }
}
