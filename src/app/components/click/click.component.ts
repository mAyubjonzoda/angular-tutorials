import { Component } from '@angular/core';

@Component({
  selector: 'app-click',
  imports: [],
  template: `
    <button (click)="greet()">click</button>
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
  `,
})
export class ClickComponent {
  message: string = '';
  greet() {
    console.log('Hello, there 👋');
  }
  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}
