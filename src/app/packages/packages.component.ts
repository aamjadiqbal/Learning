import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map} from 'rxjs/operators'
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit, OnDestroy {
private firstSubscription: Subscription

  constructor() { }

  ngOnInit(): void {
//  this.firstSubscription = interval(1000).subscribe(a => {
//       console.log(a)
//     })
    // custom observable
    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 5) {
          observer.complete();
        }
        if(count == 3) {
          observer.error(new Error('count is greater than 3'));
        }
        count++;
      }, 1000)
    })
   this.firstSubscription = customObservable.pipe(filter(data => {
       return data > 0;
   }), map((data:number) => {
    return 'Round: ' + (data+1);
   }) ).subscribe(data => {
      console.log(data)
    }, error => {
          console.log(error.message);
          alert(error.message)
    }, () => {
      console.log('completed')
    });
  }
  ngOnDestroy(): void {
   this.firstSubscription.unsubscribe();

  }

}
