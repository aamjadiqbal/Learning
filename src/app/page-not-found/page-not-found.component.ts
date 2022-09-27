import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    let abc = document.querySelector('.heading') as HTMLElement | null;
    // console.dir(abc)
    if(abc != null) {
      abc.style.color = 'red';
    }

  }

}
