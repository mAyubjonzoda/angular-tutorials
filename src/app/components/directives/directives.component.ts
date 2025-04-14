import { Component } from '@angular/core';
import { MyChangeColorDirective } from '../../directives/my-change-color.directive';
import { ChangeColorDirective } from '../../directives/change-color.directive';
import { MyIfDirective } from '../../directives/my-if.directive';

@Component({
  selector: 'app-directives',
  imports: [MyChangeColorDirective, ChangeColorDirective, MyIfDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
})
export class DirectivesComponent {
  public color: string[] = ['red', 'yellow', 'blue', 'green'];
  public isShow = true;
}
