import { Component } from '@angular/core';

// Step 4: unified by @Component() 
@Component({
  selector: 'app-root', // exposed in an element selector -- to use in index.html
  templateUrl: './app.component.html', // html - template is mandatory for a comp -- should be only one
  styleUrls: ['./app.component.scss'] // scss -- styles are optional -- can be multiple
})
export class AppComponent { // ts 
  title = 'user-mgmt-plus-ng13';
}
