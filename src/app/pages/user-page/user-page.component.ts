import { Component, inject } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-user-page',
  imports: [],
  templateUrl: './user-page.component.html',
})
export class UserPageComponent {
  display = '';
  carService = inject(CarService);
  constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}
