import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCcIf]'
})
export class CcIfDirective {

@Input() set appCcIf(condition) {
if(!condition) {
    this.viewRef.createEmbeddedView(this.tempRef)
} else {
  this.viewRef.clear()
}
}
  constructor(private tempRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }

}

