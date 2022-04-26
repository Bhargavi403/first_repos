import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

// Feature Routing Module for Users Feature
// Let's setup feature routing config 
const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/:id', component: UserDetailsComponent },   //  Setting URL Param - id is the URL Param
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // registering feature/child routes 
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
