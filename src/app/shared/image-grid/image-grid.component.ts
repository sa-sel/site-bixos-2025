import { Component, OnInit } from '@angular/core';
import { Image } from './image';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit {

  images: Image[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
