import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    this.profileForm = fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z].*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z].*')]]
    })
  }

  ngOnInit() {
    this.profileForm.patchValue({
      firstName: this.authService.currentUser.firstName,
      lastName: this.authService.currentUser.lastName
    })
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues: { firstName: any; lastName: any; }) {
    if (this.profileForm?.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events']);
    }
  }
  validateFirstName() {
    let firstName = this.profileForm.controls['firstName'];
    return firstName.invalid && firstName.touched
  }

  validateLastName() {
    let lastName = this.profileForm.controls['lastName']
    return lastName.invalid && lastName.touched
  }
}