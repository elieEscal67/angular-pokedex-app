import { Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Pokemon } from './pokemon.model';
import { PokemonService } from './pokemon.service';
import { PokemonBorderDirective } from './pokemon-border.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
}
