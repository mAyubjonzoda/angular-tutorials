import { Component } from '@angular/core';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { NgOptimizedImageComponent } from './components/ng-optimized-image/ng-optimized-image.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    InputComponent,
    OutputComponent,
    NgOptimizedImageComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-tutorials';

  links = [
    {
      name: 'click',
      link: 'click',
    },
    {
      name: 'defer',
      link: 'defer',
    },
    {
      name: 'for',
      link: 'for',
    },
    {
      name: 'forms',
      link: 'forms',
    },
    {
      name: 'if',
      link: 'if',
    },
    {
      name: 'input',
      link: 'input',
    },
    {
      name: 'output',
      link: 'output',
    },
    {
      name: 'ngOpImg',
      link: 'ngOpImg',
    },
    {
      name: 'pipe',
      link: 'user',
    },
    {
      name: 'home',
      link: 'home',
    },
  ];
}
