import { Component, OnInit } from '@angular/core'

import { ImageGridItemModel } from '@models'
import { ImageTestService } from '@services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  images: ImageGridItemModel[] = []
  constructor(private imageService: ImageTestService) {}

  ngOnInit() {
    this.images = this.imageService.getImages()
  }
}
