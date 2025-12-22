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

  

  incrementLife() {
    this.life.update((life) => life + 1);

  }
  decrementLife() {
    this.life.update((life) => life - 1);

  }

  
}
