import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';


@Directive({
  selector: '[backgroundColor]'
})
export class CustomAttributeDrctvDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  @Input() defaultColor = 'orange';
  @Input() hoverColor = 'black'
  @HostBinding('style.color') color: string
  @HostListener('mouseover') onmouseenter() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'pink')
    this.color = this.hoverColor;
  }
  @HostListener('mouseout') onmouseout() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green')
    this.color = this.defaultColor;
  }
  ngOnInit(): void {
      // this.color = this.defaultColor;
    // this.element.nativeElement.outerText = ' Text changed via attribute'
    // this.element.nativeElement.style.backgroundColor = 'yellow';

  }


}

//  element ref. works same way as querySelector in javascript.
//  to avoid accessing DOM directly, its better to use renderer
//  @HostListner works just as 'addEventListner'
//  @HostBinding can replace the use of 'renderer'
