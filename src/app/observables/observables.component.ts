import { filter, map } from 'rxjs/operators';
import { Observable, Subject, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  cardArray = ['down', 'up', 'down', 'down'];

  //  const customObservable = new Observable(observer => {
  customObservable = Observable.create(observer => {
    // observer.next('1')
    setTimeout(() => { observer.next("1") }, 1000);
    setTimeout(() => { observer.next("2") }, 2000);
    setTimeout(() => { observer.next("3") }, 3000);
    // setTimeout(() => {observer.error('Error occured')}, 3500);
    setTimeout(() => { observer.next("4") }, 4000);
    setTimeout(() => { observer.next("5") }, 5000);
    // observer.complete()
  }).pipe(
    filter(data => data > 2),
    map(data => { return data as number * 2 })
  )

  //  subject Code
  subject = new Subject();
  mathRandObservable = new Observable(observer => {
    observer.next(Math.floor(Math.random() * 200) + 1);
  })
  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.customObservable.subscribe(data => {
      console.log('Value is: ', data),
        error => console.log('error message'),
        () => { console.log('completed') }


    })
    //  Subject code
    this.mathRandObservable.subscribe(data => {
      console.log('obs-1', data)
    })
    this.mathRandObservable.subscribe(data => {
      console.log('obs-2', data)
    })
    this.subject.subscribe(val => {
      console.log('sub-1',val);
    });
    this.subject.subscribe(val => {
      console.log('sub-2',val);
    });
    this.subject.next(Math.floor(Math.random() * 200) + 1);

  }

  onCardClick(colValue, index) {

    this.cardArray.forEach((item, i) => {
        if(i === index ) {
              if(colValue !== 'up') {
           this.cardArray = this.cardArray.map(data => { return data = 'down'})
                  this.cardArray[index] = 'up';

              }
        }
    })
  }

}


// There is no difference between the Observable.create method and observable constructor.
// The Create method calls the constructor behind the scene.
//  obs-1 , obs-2 with get different instances of observable , while sub-1,2 will get same instance.

