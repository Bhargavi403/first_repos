import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  isUpdated = false;
  userData: User = new User;
  duplicateUserData: User = new User;

  constructor( private userService: UserService, private route: ActivatedRoute) { // 0. connect with the service 
  }

  ngOnInit(): void {
    // exec'd when the comp is coming into view.
    console.log('inside ngOnInit');

    // 1. send the req to the service
    this.userService.getUserById(this.route.snapshot.params['id']) // Reading URL Params using Angular
      .subscribe( (res: User) => { // 2. get the res from the service
        console.log(res);
        this.userData = res;
      });
  }

  handleUpdateModalOpen(): void{
    this.duplicateUserData = {...this.userData};
  }

  async handleUpdateForm() {
    console.log(this.duplicateUserData); // form Data 
    const result: User =  await this.userService.updateUser(this.duplicateUserData);
    console.log(result);

    if(result && result.id){
      this.isUpdated = true;
      this.userData = result;
    }
  }
}

