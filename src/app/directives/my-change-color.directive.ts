import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyChangeColor]',
})
export class MyChangeColorDirective implements AfterViewInit {
  @Input('appMyChangeColor') color?: string[];
  private _el: ElementRef;
  constructor(el: ElementRef) {
    this._el = el;
  }

  ngAfterViewInit(): void {
    this.change(this._el);
  }
  private change(el: ElementRef) {
    if (this.color && this.color.length !== 0) {
      setInterval(() => {
        el.nativeElement.style.color =
          this.color![Math.floor(Math.random() * this.color!.length)];
      }, 300);
    }
  }
}
