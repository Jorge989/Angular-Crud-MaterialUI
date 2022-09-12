import {
  Directive,
  Host,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl',
})
export class HighlightedDirective {
  @Input('highlighted') isHighlighted = false;
  constructor() {}
  @HostBinding('className')
  get cssClasses() {
    return 'highlighted';
  }
  @HostListener('mouseleave', ['$event']) mouseOver($event: any) {
    this.isHighlighted = true;
  }
  @HostBinding('attr.disabled')
  get disabled() {
    return true;
  }
}
