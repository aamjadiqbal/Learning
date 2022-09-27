import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gender } from '../model';

@Component({
  selector: 'app-bio-data',
  templateUrl: './bio-data.component.html',
  styleUrls: ['./bio-data.component.css']
})
export class BioDataComponent implements OnInit {

  errorFromAlert = document.createElement('p').textContent = '';



  showHeading: boolean = false;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  @ViewChild('f') submittedFrom: NgForm;
  alertMessage: 'Plz enter a valid Email';
  genders: Gender[] = [
    {
      id:1,
      name:"male"
    }, {id: 2, name: 'female'}, {id: 3, name: 'transgender'}
  ]
  provinces = ['Punjab', 'Sindh', 'KPK', 'Balochistan'];
  dataEntered = false;
  agreement: any = {id:1, name: false};
  userData = {
    firstName: '',
    lastName: '',
    email:'',
    gender:'',
    province:''
  }
  list = ['pakpattan', 'punjab']
  hobby = {
    name: 'Coding',
    click: () => {
      document.getElementById('button1').addEventListener('click', () => console.log(this.hobby.name))
    }
  }

  selectedProv: any = this.provinces[0];
  selectedGender: Gender = this.genders[0]

  addup({item = 'Apple', quantity = 2, price = 3} = {}) {
    console.log(`Price for ${quantity} ${item} is ${quantity * price}`)
  }

  pCheck(passenger, ...belongings) {
    const item = belongings.length > 0 ? belongings : 'none';
        console.log(`All this luggage belongs to ${passenger.firstName} ${passenger.lastName} including ${item} `)
  }
  phone = {
    ring(i) {
      console.log('beep '.repeat(i))
    }
  }
  x = 'abc';
  g() {
    return 'ring'
  }
  phone2 = {
    [this.x] : 'Apple',
    [this.g()](i) {
      console.log('bep '.repeat(i))
    }
  }
  onGenderChange() {
   Object.assign(this.phone2, {warranty: 3})
    console.log(this.phone2)

    let passenger = {firstName: 'Amjad', lastName: 'Iqbal'};
    // let belongings = {item1: 'bag', item2: 'hand carry'}
    this.pCheck(passenger)
    this.addup({item: 'Banana'})

    let [city, country] = this.list;
    console.log(city, country)
    this.hobby.click();
    console.log(this.selectedGender)
  }
  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }
  onAgreement() {
     this.agreement.name = !this.agreement.name;
     console.log(this.agreement.name)

  }

  displayVal() {
    console.log(this.agreement);
  }

  onSubmit(form) {
    console.log('form', form)

        this.dataEntered = true;
        this.userData.firstName = this.submittedFrom.value.customFormGroup.firstname;
        this.userData.lastName = this.submittedFrom.value.customFormGroup.lastname;
        this.userData.email = this.submittedFrom.value.email;
        this.userData.province = this.submittedFrom.value.province;
        this.userData.gender = this.submittedFrom.value.gender.name;
        this.submittedFrom.reset();

  }
  onShowHeading() {
      this.showHeading = !this.showHeading
  }
  onErrorMessageClick(event) {
   const errorFromAlert = document.createElement('p');
   errorFromAlert.textContent = event.errorName;
   document.querySelector('.test-email').appendChild(errorFromAlert)
  }
  onSuggestUser() {
    this.submittedFrom.form.patchValue({
        customFormGroup: {
          firstname: 'Bismil',
          lastname: 'mwm'
        }
    })
  }
}
