import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent {

  dummyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

  today = new Date();

  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
  toggle = true; // start with true == shortDate

  sampleText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempore labore iusto libero animi vitae, a quia error.'

  files: File[] = [];

  constructor() { }

  get format()   {
    return this.toggle ? 'shortDate' : 'fullDate'; 
  }

  toggleFormat() { 
    this.toggle = !this.toggle; 
  }
  
  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
