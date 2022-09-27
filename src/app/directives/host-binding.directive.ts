import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class HostBindingDirective implements OnInit {
@HostBinding('style.border') border: string = '1px solid red';

constructor() { }
  ngOnInit(): void {

  }

@HostListener('mouseover') onMouseOv() {
  this.border = '3px solid blue'

}
@HostListener('mouseleave') onMouseLev() {
  this.border = '3px solid orange'

}
}
