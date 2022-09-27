import { AppService } from './../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  profileId: number;
  Edit: boolean = false;
fetchedProfile: {id: number, name: string, class: string, status: string};
profileName: any;
profileStatus: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private appService: AppService
              ) { }

  ngOnInit(): void {

    this.profileId = +this.route.snapshot.params['id'];
    if (+this.route.snapshot.queryParams.allowEdit == 1) {
      this.Edit = true;
    }

    this.getProfile();
  }
getProfile() {
this.fetchedProfile = this.appService.getSingleCustomer(this.profileId);

this.profileName = this.fetchedProfile.name;
this.profileStatus = this.fetchedProfile.status;

}
onUpdateProfile() {
this.appService.onUpdatingProfile(this.fetchedProfile.id, {name: this.profileName, status: this.profileStatus})
}
onCreatePost() {

}
}
