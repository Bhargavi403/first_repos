import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // public variables
  // Interpolation related
  appName = 'User Manager+';
  teamSize = 13;

  // Property Binding
  companyName = "Fujitsu";
  devDuration = '3 Months';

  // Two Way Binding related
  courseName = 'Angular 13';
  
  // Step 3 of CPB: Keep the data here 
  myAge = 25;

  dataReceivedFromChildComp = '';

  // Directives related
  isAuthenticated = true;
  skillList = [ 'html', 'css', 'js', 'ts', 'ng'];

  constructor() { }

  ngOnInit(): void {
  }

  // public method 
  handleClickMe(event: any): void {
    event.target.disabled = true;
    event.target.innerText = 'Clicked';
    alert("Clicked");
  }

  // Step 5: defining event handler -- will receive the data soon 
  handleProfileLoaded(event: any){
    console.log('Inside handleProfileLoaded');
    console.log(event);
    this.dataReceivedFromChildComp = event; // Step 6: Let's display this in html using interpolation
  }

}
