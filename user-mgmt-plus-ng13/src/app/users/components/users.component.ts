import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit, OnDestroy {

  userList: User[] = [];
  usersSubscription: Subscription | undefined;

  constructor(private userService: UserService) { // 0. connect with the service 
    console.log('Inside Constructor');
  }

  // lifecycle hook 
  ngOnInit(): void { 
    console.log('Inside ngOnInit');
    // this lifecycle hook will be called after constructor 
    // will be called automatically whenever the comp is coming into view 
    // ideal place for you to send ajax calls
    // 1. send the req to the service 
    this.usersSubscription = this.userService.getUsers()
      .subscribe( (res: User[]) => { // 2. get the res from the service 
        console.log(res);
        this.userList = res;
      });
  }

  ngOnDestroy(){
    // will be exec'd if the comp goes out of the view
    // ideal place for us to unsubscibe, clear the intervals, clear timeouts, empty data 
    console.log('Inside ngOnDestroy');
    this.usersSubscription?.unsubscribe();
    if(this.userList && this.userList.length > 0){
      this.userList.length = 0;
    }
  }

}
