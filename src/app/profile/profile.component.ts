import { AppService } from './../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: {id: number; class: string; name: string; status: string}

  constructor(private router: Router,
              private appService: AppService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.profile = this.appService.getSingleCustomer(id);
    this.route.params.subscribe(
      (params: Params) => {
      this.profile =  this.appService.getSingleCustomer(+params['id']);
      })


  }
  onEditProfile() {
    // this.router.navigate(['customers', 10, 'anaya'], {queryParams: {editCustomer: '6'}, fragment: 'Notloading'})
    this.router.navigate(['edit-profile'], {
      relativeTo: this.route,
      queryParamsHandling: "preserve",
    });
  }

}
