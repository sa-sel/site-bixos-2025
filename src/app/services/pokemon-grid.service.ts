import { Injectable } from '@angular/core'
import { ImageGridItemModel } from '@models'

@Injectable({
  providedIn: 'root',
})
export class PokemonGridService {
  pokemonItens: ImageGridItemModel[] = []

  getPokemons() {
    for (let i = 50; i <= 100; i++) {
      let pokemon: ImageGridItemModel
      switch (i % 2) {
        case 0:
          pokemon = {
            image: {
              src: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${i
                .toString(10)
                .padStart(3, '0')}.png`,
              alt: `O pokemon de id ${i}`,
            },
            modal: {
              image: {
                src: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${i
                  .toString(10)
                  .padStart(3, '0')}.png`,
                alt: `O pokemon de id ${i}`,
              },
              text: `Pokemon legal demais, que tem id '${i}'`,
              title: `ID: ${i.toString(10).padStart(3, '0')}`,
              url: `https://www.pokemon.com/us/pokedex/${i}`,
            },
          }
          this.pokemonItens.push(pokemon)
          break

        default:
          pokemon = {
            image: {
              src: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${i
                .toString(10)
                .padStart(3, '0')}.png`,
              alt: `O pokemon de id ${i}`,
            },
            url: `https://www.pokemon.com/us/pokedex/${i}`,
          }
          this.pokemonItens.push(pokemon)
          break
      }
    }
    this.pokemonItens.forEach(pokemonItem => console.log(pokemonItem.image))
    return this.pokemonItens
  }
}
