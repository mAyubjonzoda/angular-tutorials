import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

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
];
