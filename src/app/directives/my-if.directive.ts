import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyIf]',
})
export class MyIfDirective implements OnInit {
  private _show: boolean = false;
  @Input() set appMyIf(show: boolean) {
    this._show = show;
    this.displayTemplate();
  }
  constructor(
    private vcr: ViewContainerRef,
    private temp: TemplateRef<unknown>
  ) {}
  ngOnInit(): void {
    this.displayTemplate();
  }
  private displayTemplate() {
    this.vcr.clear();
    if (this._show) {
      this.vcr.createEmbeddedView(this.temp);
    }
  }
}
