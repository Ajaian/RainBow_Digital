import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { ComponentsComponent } from './components/components.component';
import { FooterComponent } from './shared/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ComponentsComponent, FooterComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit  {
  title = 'RainBow_Digital';
  isTransparent:boolean = true;
  constructor( private renderer : Renderer2) {}

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
