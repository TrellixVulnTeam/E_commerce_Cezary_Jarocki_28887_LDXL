import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @HostListener('window:scroll')
  scrollChange(): void {
    let topEL = document.getElementById("scroll_top");
      window.scrollY > 500
        ? (topEL!.style.display = 'block')
        : (topEL!.style.display = 'none');
  }

  constructor() { }

  ngOnInit(): void {
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }
}
