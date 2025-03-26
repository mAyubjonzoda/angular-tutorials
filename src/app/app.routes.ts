import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ClickComponent } from './components/click/click.component';
import { DeferComponent } from './components/defer/defer.component';
import { ForComponent } from './components/for/for.component';
import { FormsComponent } from './components/forms/forms.component';
import { IfComponent } from './components/if/if.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { NgOptimizedImageComponent } from './components/ng-optimized-image/ng-optimized-image.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home Page',
    component: HomePageComponent,
  },
  {
    path: 'user',
    title: 'User Page',
    component: UserPageComponent,
  },
  {
    path: 'click',
    component: ClickComponent,
  },
  {
    path: 'defer',
    component: DeferComponent,
  },
  {
    path: 'for',
    component: ForComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'if',
    component: IfComponent,
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'output',
    component: OutputComponent,
  },
  {
    path: 'ngOpImg',
    component: NgOptimizedImageComponent,
  },
];
