import { Component, Input, OnInit } from '@angular/core';

interface alternatingLayout {
  image?: {
    alt: string,
    src: string
  },
  text?: string
};

@Component({
  selector: 'app-alternating-layout',
  templateUrl: './alternating-layout.component.html',
  styleUrls: ['./alternating-layout.component.scss']
})
export class AlternatingLayoutComponent implements OnInit {

  @Input()
  contents: alternatingLayout[] = [];
  imageLeft = true;

  constructor() { }
  ngOnInit(): void { }

}
