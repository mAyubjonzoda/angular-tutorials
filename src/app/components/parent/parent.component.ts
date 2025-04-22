import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  obj: string = 'parent';
  public handleEvent(value: string) {
    this.obj = value;
  }
  show: boolean = false;
}
