import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appPokemonBorder]',
})
export class PokemonBorderDirective {

  private initialColor = 'transparent';

  pokemonType = input.required<string>();

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.border = '2px solid transparent';
    this.el.nativeElement.style.borderRadius = '12px';
    this.el.nativeElement.style.transition = 'border-color 0.2s ease';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    const color = this.getBorderColor();
    this.el.nativeElement.style.borderColor = color;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.borderColor = this.initialColor;
  }

  private getBorderColor(): string {
    switch (this.pokemonType()) {
      case 'Feu':
        return '#EF5350';
      case 'Eau':
        return '#42A5F5';
      case 'Plante':
        return '#66BB6A';
      case 'Insecte':
        return '#8d6e63';
      case 'Vol':
        return '#90CAF9';
      case 'Poison':
        return '#b388ff';
      case 'Fée':
        return '#f8bbd0';
      case 'Electrik':
        return '#f4ff81';
      default:
        return '#303030';
    }
  }
}
