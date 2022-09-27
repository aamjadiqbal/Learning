import { Subject } from 'rxjs';
import { IProfile } from './../../shared/models';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProfileService {
  errorSubject = new Subject<string>();

  constructor(private http: HttpClient) {}

onCreatingProfile(profileData: IProfile) {
  this.http.post('https://http-request-angular-code-default-rtdb.asia-southeast1.firebasedatabase.app/profiles.json', profileData
  )
  .subscribe(response => {
      console.log('CreateResp', response)
  }, error => {
     this.errorSubject.next(error.message)
  })
}
// this method is returning an observable, that will be subscribed where you want to use it.
//  or use Subject (suitable to use when that service is reqired in multiple components)
// this we use subject -> next -> then subscrible to that in component where it is required to use.
// errorSubject is example of it.
onGettingProfile() {
  return this.http.get<{[key: string]: IProfile}>('https://http-request-angular-code-default-rtdb.asia-southeast1.firebasedatabase.app/profiles.json', {
    headers: new HttpHeaders({
      'custom-header':'Hey'
    })
  })
  .pipe(
    map((data) => {
      const newArray: IProfile[] = [];
      for(const key in data) {
        newArray.push({...data[key], id: key})
      }
      return newArray
    })
  )

}
onClearProfiles() {
 return this.http.delete('https://http-request-angular-code-default-rtdb.asia-southeast1.firebasedatabase.app/profiles.json')

}

}
