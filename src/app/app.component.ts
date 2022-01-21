import { Component, OnInit } from '@angular/core'

import { Image } from '@shared'
import { ImageTestService } from '@services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  images: Image[] = []
  constructor(private imageService: ImageTestService){}

  ngOnInit(){
    this.images=this.imageService.getImages()
  }
}
