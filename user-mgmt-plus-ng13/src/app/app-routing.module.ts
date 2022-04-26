import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/components/about.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { HomeComponent } from './home/components/home.component';
import { AddUserComponent } from './users/components/add-user/add-user.component';
import { UserDetailsComponent } from './users/components/user-details/user-details.component';
import { UsersComponent } from './users/components/users.component';

// Configure the routes 
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/:id', component: UserDetailsComponent },   //  Setting URL Param - id is the URL param
  { path: 'about', component: AboutComponent }
  // TODO: Work on 404 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // registering routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
