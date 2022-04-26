import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../../services/cart-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartCount: number = 0;

  constructor(private cartDataService: CartDataService ) { }

  ngOnInit(): void {
    // Let's subscribe to the cart data
    this.cartDataService.latestCartItems.subscribe( (cartItems: any[] ) => {
      console.log(cartItems.length);
      this.cartCount = cartItems.length;
    });

  }

}
