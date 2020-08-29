import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  /* Las directivas nos ayudan a modificar el DOM dinámicamente */
  constructor(element: ElementRef){
    element.nativeElement.style.backgroundColor = 'red';
  }

}
