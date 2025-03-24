import { Component } from '@angular/core';
import { IfComponent } from './components/if/if.component';
import { ForComponent } from './components/for/for.component';
import { ClickComponent } from './components/click/click.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { DeferComponent } from './components/defer/defer.component';
import { NgOptimizedImageComponent } from './components/ng-optimized-image/ng-optimized-image.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    IfComponent,
    ForComponent,
    ClickComponent,
    InputComponent,
    OutputComponent,
    DeferComponent,
    NgOptimizedImageComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-tutorials';
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
