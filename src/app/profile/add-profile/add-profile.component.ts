import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  newReactiveForm: FormGroup;

  gender = ['male', 'female']

  constructor() { }

  ngOnInit(): void {
  this.newReactiveForm = new FormGroup({
          userInfo : new FormGroup({
            'username': new FormControl(null, Validators.required),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            }),
            'hobbies': new FormArray([]),
          'gender': new FormControl('female')
    })
  }

  onSubmit() {
    console.log('reactive Form', this.newReactiveForm)
  }
  onAddingHobbie() {
    const hobbyControl = new FormControl(null, Validators.required);
    (<FormArray>this.newReactiveForm.get('hobbies')).push(hobbyControl);
  }
  getControls () {
    return (this.newReactiveForm.get('hobbies') as FormArray).controls;
    }
}
