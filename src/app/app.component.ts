import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMON_LIST } from './pokemon-list.fake';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  name = signal("Pikachu");
  life = signal(21);
  pokemons = POKEMON_LIST;

  

  size (pokemon : Pokemon) {
    if(pokemon.life <= 15) {
      return "Petit";
    } else if (pokemon.life <= 25) {
      return "Moyen";
    } else {
      return "Grand";
    }
  }

  imageSrc = signal('https:///assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png')

  

  incrementLife(pokemon : Pokemon) {
    pokemon.life = pokemon.life + 1;

  }
  decrementLife(pokemon : Pokemon) {
     pokemon.life = pokemon.life - 1

  }

  
}
