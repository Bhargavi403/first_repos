import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  // Step 0: Have the HTML form with necessary inputs first. It is already present. 
  
  // Step 1: Have the HTML form tag equivalent in TS 
  addUserForm = new FormGroup({
    // Step 2: Have the input equivalents in TS 
    name: new FormControl('', Validators.required), // Step 5: Let's setup validations 
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
  // Refer HTML for step 3

  constructor() { }

  ngOnInit(): void {
  }

}
