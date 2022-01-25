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
    item: AlternatingLayoutModel,
    imageOnLeft: boolean,
    textHeight: number,
    imageHeight: number
  ): string => {
    if (item.textStyle === undefined) {
      if (textHeight < imageHeight) {
        const order = imageOnLeft ? 'order-2' : 'order-1'
        item.textStyle = `px-5 w-50 ${order}`
      } else {
        item.textStyle = 'w-100'
      }
    }
    return item.textStyle
  }

  getCustomImageClasses = (
    item: AlternatingLayoutModel,
    imageOnLeft: boolean,
    textHeight: number,
    imageHeight: number
  ): string => {
    if (item.imageStyle === undefined) {
      if (textHeight < imageHeight) {
        item.imageStyle = imageOnLeft ? 'order-1' : 'order-2'
      } else {
        item.imageStyle = imageOnLeft ? 'float left' : 'float right'
      }
    }
    return item.imageStyle
  }
}
