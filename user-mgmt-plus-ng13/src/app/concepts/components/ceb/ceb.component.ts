import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <button (click)="handleSendData()">Send Data to Parent</button>
    </div>
  `,
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step1 of CEB : Let's have the data in child comp 
  private profileName = 'Arun';

  // Step 2 of CEB: Create Custom Event 
  // Step 2.1 Create an object of EventEmitter()
  // Step 2.2 Make it as custom event -- by using @Output()
  @Output() profileLoaded = new EventEmitter(); // @Output() will make profileLoaded as custom Event.

  constructor() { }

  ngOnInit(): void {
  }

  handleSendData(){
    console.log('Will send data to parent comp');

    // Step 3 of CEB: Let's emit / trigger the custom event with data
    this.profileLoaded.emit(this.profileName); // Refer concepts.comp.html for step 4
  }

}
