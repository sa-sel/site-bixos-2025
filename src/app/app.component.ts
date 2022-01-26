import { Component, OnInit } from '@angular/core'
import { ImageGridItemModel, ImageModel } from '@models'
import { PokemonGridService } from 'services/pokemon-grid.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  openModal = false
  image1: ImageModel = {
    src: '../../../assets/images/banner.jpg',
    alt: 'uma foto da comissao',
  }
  itensGrid!: ImageGridItemModel[]

  toggleModal() {
    this.openModal = !this.openModal
  }
  ngOnInit() {
    this.itensGrid = this.pokemons.getPokemons()
  }
  constructor(private pokemons: PokemonGridService) {}
}
