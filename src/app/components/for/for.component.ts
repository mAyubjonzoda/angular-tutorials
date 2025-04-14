import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [CommonModule],
  templateUrl: './for.component.html',
})
export class ForComponent {
  colors = ['red', 'blue', 'yellow', 'green'];
  emptyColors = [];
}
