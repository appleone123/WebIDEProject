import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPopControl]'
})
export class PopControlDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
