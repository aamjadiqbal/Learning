import { map } from 'rxjs/operators';
import { IProfile } from './../../../shared/models';
import { HttpClient } from '@angular/common/http'
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit, OnDestroy {
  isProfileLoading = false;
  isError = null;
  errorSub: Subscription;
  loadedProfiles = [];

  constructor(private http: HttpClient,
              private profileService: ProfileService) { }

  ngOnInit(): void {
   this.errorSub =  this.profileService.errorSubject.subscribe(error => {
      this.isError = error;
    })
    this.onGetProfiles();
  }

  onCreatePost(profileData: IProfile) {
    this.profileService.onCreatingProfile(profileData);
  }
  onFetchPosts() {
        this.onGetProfiles();
  }
  onClearPosts() {
      this.profileService.onClearProfiles().subscribe(response => {
        this.loadedProfiles = [];
      });

  }
  private onGetProfiles() {

    this.isProfileLoading = true;
    this.profileService.onGettingProfile().subscribe(profiles => {
      this.loadedProfiles = profiles;
      this.isProfileLoading = false;
    }, error => {
      console.log('this is error: ', error)
      this.isError = error.message;
    })
  }


  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
