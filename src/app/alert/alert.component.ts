import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { interval } from 'rxjs';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() message: 'string';
  @Output() errorClicked = new EventEmitter<{errorName: string}>();
  @ContentChild('header')
  cardHContent: ElementRef = {
    nativeElement: undefined
  };
  constructor() { }

  ngOnInit(): void {

  }
  onErrorClick() {
          this.errorClicked.emit({errorName: 'this is message From @Output'})
  }
  ngAfterContentInit() {
    this.cardHContent.nativeElement.style.color = 'blue';
    this.cardHContent.nativeElement.style.backgroundColor =
'yellow';
    this.cardHContent.nativeElement.style.fontSize = '24px';
  }

}
