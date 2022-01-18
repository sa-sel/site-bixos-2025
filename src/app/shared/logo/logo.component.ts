import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent implements OnInit {
  @Input() subtitle: boolean = false

  path: string = '../../assets/images/logo/logo.png'

  constructor() {}

  ngOnInit(): void {}
}
