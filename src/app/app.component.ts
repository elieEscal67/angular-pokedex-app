import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  name = signal("Pikachu");
  life = signal(21);
  size = computed(() => {
    if(this.life() <= 15) {
      return "Petit";
    } else if (this.life() <= 25) {
      return "Moyen";
    } else {
      return "Grand";
    }
  })

  imageSrc = signal('https:///assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png')

  

  incrementLife() {
    this.life.update((life) => life + 1);

  }
  decrementLife() {
    this.life.update((life) => life - 1);

  }

  
}
