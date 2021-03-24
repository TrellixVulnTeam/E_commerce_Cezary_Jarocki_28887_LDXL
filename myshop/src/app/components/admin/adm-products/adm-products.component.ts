import { MainService } from 'src/app/services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm-products',
  templateUrl: './adm-products.component.html',
  styleUrls: ['./adm-products.component.scss']
})
export class AdmProductsComponent implements OnInit {

  // tslint:disable-next-line: no-shadowed-variable
  constructor(public MainService: MainService) { }

  newProduct = {
    thumbnail: '',
    title: '',
    price: 0,
    category: ''
  };

  ngOnInit(): void {
  }
  getProducts(): void {
    this.MainService.getProducts(this.MainService.productsRequest);
  }
}
