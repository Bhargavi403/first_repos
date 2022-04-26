import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Feature Module for Users Feature

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule, //Needed for ngModel, temp driven form to work
    ReactiveFormsModule, // Needed for ReactiveForms to work
    UsersRoutingModule
  ]
})
export class UsersModule { }
