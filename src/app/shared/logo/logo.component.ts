import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  @Input() subtitle = false

  path = '../../assets/images/logo/logo.png'
}
