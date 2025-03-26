import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { OutputComponent } from '../../components/output/output.component';

@Component({
  selector: 'app-home',
  imports: [InputComponent, OutputComponent],
  templateUrl: './home.component.html',
})
export class HomePageComponent {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
