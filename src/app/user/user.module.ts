import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutes } from './user.routes';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [LoginComponent, ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UserRoutes),
  ]
})
export class UserModule { }
