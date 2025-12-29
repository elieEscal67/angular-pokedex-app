import { Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Pokemon } from './pokemon.model';
import { PokemonService } from './pokemon.service';
import { PokemonBorderDirective } from './pokemon-border.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonBorderDirective, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  /**
   * Injection du service via la nouvelle API `inject()`
   * ➜ évite le constructor
   * ➜ le service est partagé dans toute l'app (singleton)
   */
  readonly #pokemonService = inject(PokemonService);

  /**
   * Signal contenant la liste complète des Pokémon.
   * ➜ source de vérité
   * ➜ on ne la modifie jamais directement dans un computed
   */
  readonly pokemonList = signal(
    this.#pokemonService.getPokemonList()
  );

  /**
   * Signal lié au champ de recherche.
   * ➜ mis à jour depuis le template via (input)
   */
  readonly searchTerm = signal('');

  /**
   * computed = état dérivé
   *
   * ➜ dépend automatiquement de :
   *   - searchTerm()
   *   - pokemonList()
   *
   * ➜ se recalcule TOUT SEUL quand l’un des deux change
   * ➜ aucune mutation, uniquement du calcul
   */
  readonly pokemonListFiltered = computed(() => {
    const searchTerm = this.searchTerm();
    const pokemonList = this.pokemonList();

    return pokemonList.filter(pokemon =>
      pokemon.name
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase())
    );
  });

  /**
   * Méthode utilitaire appelée depuis le template.
   * ➜ logique métier légère
   * ➜ PAS de logique d'affichage dans le HTML
   */
  size(pokemon: Pokemon): string {
    if (pokemon.life <= 15) {
      return 'Petit';
    } else if (pokemon.life <= 25) {
      return 'Moyen';
    } else {
      return 'Grand';
    }
  }

  /**
   * Actions utilisateur
   * ➜ mutation volontaire d’un Pokémon
   * ➜ OK ici car ce n’est PAS un computed
   */
  incrementLife(pokemon: Pokemon): void {
    pokemon.life++;
  }

  decrementLife(pokemon: Pokemon): void {
    pokemon.life--;
  }
}
