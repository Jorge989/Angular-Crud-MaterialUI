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
  constructor() {
    console.log('Directive creatred...');
  }
  @HostBinding('className')
  get cssClasses() {
    return 'highlighted';
  }
  @HostListener('mouseleave', ['$event']) mouseOver($event: any) {
    console.log('aqui$', $event);
    this.isHighlighted = true;
  }
  @HostBinding('attr.disabled')
  get disabled() {
    return true;
  }
}
