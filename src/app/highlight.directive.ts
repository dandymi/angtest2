import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'blue');
  }
}
