import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  openModal = false

  toggleModal() {
    this.openModal = !this.openModal
  }
}
