import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // Step 1: Let's have the default cart item -- 
  // should load this data using REST API call. 
  // but mocking it with static data
  private currentCartItems: any[] = [
    {
      id: 3,
      name: 'Orange',
      category: 'Fruits',
      price: '$4.85'
    }
  ];

  // Step 2: Let's work on to create an observable. so that the comp can subscribe to it. 
  // In order to do it, Create an obj of BehaviorSubject with the default cart items (currentCartItems)
  private cartItemsList = new BehaviorSubject(this.currentCartItems);

  // Step 3: Let's create an observable for the about BehaviorSubject object so that any comp can subscribe 
  latestCartItems: Observable<any[]> = this.cartItemsList.asObservable();

  constructor() { 
    
  }

  updateCartItems(pdt: any): void {
    console.log('Inside cart data service');
    console.log(pdt);

    // let's now work on updating the cart items array over observable
    this.latestCartItems.pipe( take(1)).subscribe( (value: any) => {
      console.log(value); //this will be an array of obj -- existing car items

      const newCartList = [...value, pdt];
      console.log(newCartList);
      this.cartItemsList.next(newCartList);
    })
  }
}
