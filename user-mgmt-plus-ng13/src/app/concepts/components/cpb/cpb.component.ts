import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',    
  template: `
    <div>
      <p>Age is: {{age}}</p>
    </div>
  `,
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: Let's create custom property
  @Input() age = 20; // @Input() will make age as custom property of the selector app-cpb 

  // For Step 2: Refer concepts.comp.html 

  constructor() { }

  ngOnInit(): void {
  }

}
