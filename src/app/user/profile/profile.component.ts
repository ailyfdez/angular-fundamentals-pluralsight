import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    this.profileForm = fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z].*'), this.restrictedWords]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z].*'),this.restrictedWords2(['casa', 'foo'])]]
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

  private restrictedWords(control: FormControl): any {
    return control.value.includes('foo')
      ? { 'restrictedWords': 'foo' }
      : null;
  }

  private restrictedWords2(words: string[]) {
    return (control: FormControl): any => {
      if (!words) return null;

      var invalidWords = words
        .map((w: string) => control.value.includes(w) ? w : null)
        .filter((w) => w !== null);

      return invalidWords && invalidWords.length > 0
        ? { 'restrictedWords2': invalidWords.join(', ') }
        : null;
    }
  }

}