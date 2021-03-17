import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  getProducts(){
    this.mainService.getProducts(this.mainService.productsRequest);
  }

}
