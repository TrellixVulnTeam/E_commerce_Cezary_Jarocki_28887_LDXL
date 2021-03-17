import { MainService } from 'src/app/services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }
  getCartPrice(): number{
    let price = 0;
    for (const object of this.mainService.cart){
      price += parseFloat(object.product.price);
    }
    return price;
  }
}
