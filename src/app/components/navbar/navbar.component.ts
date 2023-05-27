import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  clicked: boolean = true;
  menuOpened: boolean = false;


  handleClick() {
    this.clicked = this.clicked ? false : true;
    
  }
  openMenu() {
    this.menuOpened = true;
    
  }
  closeMenu() {
    this.menuOpened = false;
    

  }
  
}
