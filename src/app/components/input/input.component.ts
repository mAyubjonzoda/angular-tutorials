import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  template: `<p>The user's occupation is {{ occupation }}</p>`,
})
export class InputComponent {
  @Input() occupation = 'Hello';
}
