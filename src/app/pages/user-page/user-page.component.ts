import { Component, inject } from '@angular/core';
import { CarService } from '../../services/car.service';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { StarPipe } from '../../pipes/star.pipe';
import { ReversePipe } from '../../pipes/reverse.pipe';

@Component({
  selector: 'app-user-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
    StarPipe,
    ReversePipe,
  ],
  templateUrl: './user-page.component.html',
})
export class UserPageComponent {
  display = '';
  carService = inject(CarService);
  constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
  num = 1103.12345;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
  name = 'Muhammad';
  word = 'You are a champion';
}
