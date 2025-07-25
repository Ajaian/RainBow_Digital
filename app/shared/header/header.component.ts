import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isTransparent:boolean = true;
  constructor(private renderer : Renderer2) { }

  ngOnInit() {
    const navbarElement = document.querySelector('.navbar') as HTMLElement;
    this.renderer.listen('window', 'scroll', (event) => {
      const number = window.scrollY;
      if (number > 150 || window.pageYOffset > 150) {
          this.isTransparent=false;
      } else {
          this.isTransparent=true;
      }
    });
  }

}