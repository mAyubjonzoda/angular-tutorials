import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColorDirective {
  colors: string[] = ['orange', 'gray', 'aqua'];
  constructor(el: ElementRef) {
    this.changeColor(el);
  }
  private changeColor(el: ElementRef) {
    setInterval(() => {
      el.nativeElement.style.color =
        this.colors[Math.floor(Math.random() * this.colors.length)];
    }, 300);
  }
}
