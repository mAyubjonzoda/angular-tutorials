import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  imports: [NgIf],
  templateUrl: './if.component.html',
})
export class IfComponent {
  isServerRunning: boolean = true;
  serverRunning: boolean = false;
}
