import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent implements OnInit {
  @Input() secondary = false
  path = '/assets/images/logo/primary.png'

  ngOnInit(): void {
    if (this.secondary) {
      this.path = this.path.replace('primary', 'secondary')
    }
  }
}
