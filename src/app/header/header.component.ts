import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dataReceived: boolean = false;
  private activeSub: Subscription;


  constructor(private router: Router,
              private appService: AppService ) { }

  ngOnInit(): void {
    this.activeSub = this.appService.activatedEmitter.subscribe(data => {
      this.dataReceived = data;
    })

    let backDrop = document.querySelector('.backdrop') as HTMLElement | null;
    let mobileNav = document.querySelector('.mobile-nav') as HTMLElement | null;
    let navLogo = document.querySelector('.main-header__brand') as HTMLElement | null;
    navLogo.addEventListener('click', () => {
            mobileNav.style.display = 'block';
            backDrop.style.display = 'block';
            // // add class to list (did not work here)
            // backDrop.classList.add('open');
            // mobileNav.classList.add('open');
    })
    backDrop.addEventListener('click', () => {

      backDrop.style.display = 'none';
      mobileNav.style.display = 'none';
      // mobileNav.classList.remove('open')
    })
  }

  // onLogoClick(bdrop: any, mNav: any) {
  //     bdrop.style.display = 'block';
  //     mNav.style.display = 'block';
  // }
  onNameClick() {
    this.router.navigate([''])
  }
  ngOnDestroy(): void {
    this.activeSub.unsubscribe();
  }
}



// onLogoClick event is used to navigate a path programmatically
//   this.route.queryParams
// .subscribe(params => {
//   console.log('params', params)
//   this.user.id = params.id;
//   this.user.name = params.name;
// })
