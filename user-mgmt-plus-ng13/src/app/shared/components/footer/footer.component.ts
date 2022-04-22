import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr>
      <app-menu> 
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu>
      <p class="redText">Copyright 2022 | Arun</p>
    </footer>
  `,
  styles: [
    `
      .redText{
        color: green;
      }
    `
  ]
  // TODO: Learn ViewEncapsulation
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
