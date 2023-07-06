import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNavOpen: boolean = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  constructor (private router: Router) {}

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/inicio'])
  }
}




