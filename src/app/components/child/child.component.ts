import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    OnDestroy,
    OnChanges
{
  @Input() title!: string;
  @Output() eventChange = new EventEmitter<string>();
  public temp!: string;
  ngOnInit(): void {
    this.temp = this.title;
    console.log('%cNgOnInit', 'color: green');
  }
  ngAfterContentInit(): void {
    console.log('%cContent', 'color: orange');
  }
  ngAfterViewInit(): void {
    console.log('%cAfterView', 'color: aqua');
  }
  ngDoCheck(): void {
    console.log('%cNgDoCheck', 'color: yellow');
  }
  ngOnDestroy(): void {
    console.log('%cOnDestroy', 'color: violet');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    console.log('%cngOnChanges', 'color: greenyellow');
  }
  constructor() {
    console.log('%cConstructor', 'color: red');
  }
  public clickHandler(): void {
    this.temp = 'clickChild';
    this.eventChange.emit(this.temp);
  }
}
