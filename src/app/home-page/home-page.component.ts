import { AppService } from './../app.service';
import {  Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router,
              private appService: AppService) { }

  ngOnInit(): void {

    let backdrop = document.querySelector('.backdrop') as HTMLElement | null;
    let modal = document.querySelector('.modal') as HTMLElement | null;

    let packagesButtons = document.querySelectorAll('.plan button');
    for (let i = 0; i < packagesButtons.length; i++) {
       packagesButtons[i].addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
        // modal.classList.add("open");
       })
    }
    backdrop.addEventListener('click', () => {
      backdrop.style.display = 'none';
      modal.style.display = 'none';
    })
  }
  onCloseModal() {

  }
  onSendingData() {
    // this.appService.activatedEmitter.emit(true);  when 'public activatedEmitter = new EventEmitter<boolean>()' used in service
    //  in header component we subscribed to this property from serice.
    this.appService.activatedEmitter.next(true);
      // this.router.navigate(['customers', 4, 'Largo'])
  }
  onLoadCustomer() {
      this.router.navigate(['customers', 10, 'anaya'], {queryParams: {editCustomer: '6'}, fragment: 'Notloading'})
  }
}
