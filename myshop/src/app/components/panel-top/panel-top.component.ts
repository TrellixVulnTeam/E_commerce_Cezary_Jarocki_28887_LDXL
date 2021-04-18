import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-panel-top',
  templateUrl: './panel-top.component.html',
  styleUrls: ['./panel-top.component.scss']
})
export class PanelTopComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }
  getCartQuantity(): number{
    let quantity = 0;
    for (const product of this.mainService.cart) {
      quantity += 1;
    }
    return quantity;
  }
  HideMe(): void {
    const hid = document.getElementsByClassName('testowanko');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < hid.length; i++) {
      const h = hid[i] as HTMLElement;
      if (h.style.display === 'none') {
        h.style.display = 'block';
      } else {
        h.style.display = 'none';
      }
    }
  }
  scrollTop(): void {

    let topEL = document.getElementById("scroll_top");

    window.scrollTo({ top: 0, behavior: 'smooth'});

    window.onscroll = () => {
      window.scrollY > 500 // You can change the value if you want
        ? (topEL!.style.display = 'block')
        : (topEL!.style.display = 'none')
    };
  }
}
