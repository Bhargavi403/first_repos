import { Component } from '@angular/core';
import { QuoteService } from './services/quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-unit-testing';
  x = true;
  quoteList: any[] = [];
  quoteText: String = '';
  
  constructor(private service: QuoteService) {

  }

  add(a: number, b: number): number {
    return a + b;
  }

  ngOnInit() {
    this.quoteList = this.service.getQuote();
  }

  createNewQuote() {
    this.service.addNewQuote(this.quoteText);
    this.quoteText = '';
  }

  removeQuote(index: number) {
    this.service.removeQuote(index);
  }
}
