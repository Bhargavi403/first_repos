import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component'; // importing the app comp for testing 
import { QuoteService } from './services/quote.service';

// a group of related test specs (often called a test suite). 
describe('AppComponent', () => { // What comp are we testing... 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // individual test spec 
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Taking up the comp for Testing 
    const app = fixture.componentInstance; // Taking App.comp.ts for testing 
    // expect is a matcher -- Create an expectation for a spec
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent); // Taking up the comp for Testing 
    const app = fixture.componentInstance; // Taking App.comp.ts for testing 
    expect(app.title).toEqual('my-unit-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // Taking up the comp for Testing 
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement; // Taking up the App.comp.html for Testing 
    expect(compiled.querySelector('h1')?.textContent).toContain('Success!');
  });

  it('should have a variable x', () => {
    const fixture = TestBed.createComponent(AppComponent); // Taking up the comp for Testing 
    const app = fixture.componentInstance; // Taking App.comp.ts for testing 
    expect(app.x).toBeTrue(); // x should be boolean with true in app.comp.ts 
  });

  it('should add two numbers', () => {
    const fixture = TestBed.createComponent(AppComponent); // Taking up the comp for Testing 
    const app = fixture.componentInstance; // Taking App.comp.ts for testing 
    expect(app.add(10, 20)).toEqual(30);
    expect(app.add(5, 6)).toEqual(11);
  });

  it('should render button with label Login', () => {
    const fixture = TestBed.createComponent(AppComponent); // Taking up the comp for Testing 
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement; // Taking up the App.comp.html for Testing 
    expect(compiled.querySelector('button')?.textContent).toContain('Login');
  });

  it("should use the quoteList from the service", () => {
    const fixture = TestBed.createComponent(AppComponent); // Taking up the comp for Testing 
    const app = fixture.componentInstance;
    const quoteService = fixture.debugElement.injector.get(QuoteService);
    fixture.detectChanges();
    expect(quoteService.getQuote()).toEqual(app.quoteList);
  });

});
