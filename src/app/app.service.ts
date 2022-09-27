import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class AppService {
  // public activatedEmitter = new EventEmitter<boolean>();   emit() method is applied to call this emitter via service
 public activatedEmitter = new Subject<boolean>();
  private profiles = [
    {
      id: 1,
      name: 'Anaya',
      class: 'montessori',
      status: 'online'
    },
      {
        id: 2,
        name: 'Sadia',
        class: 'Master',
        status: 'online'
      },
        {
          id: 3,
          name: 'Amjad',
          class: 'MS',
          status: 'offline'
        }
  ];

  getCustomers() {
    return this.profiles;
  }

  getSingleCustomer(id: number) {
    const customer = this.profiles.find(x =>  x.id === id)
    return customer;
  }

  onUpdatingProfile(id: number, profileInfo: {
    name: string,
    status: string
  }) {
 const fetchedProfile = this.profiles.find(
  x => {
  return x.id === id
 })

 if(fetchedProfile) {
     fetchedProfile.name = profileInfo.name;
     fetchedProfile.status = profileInfo.status
 }

  }

}
