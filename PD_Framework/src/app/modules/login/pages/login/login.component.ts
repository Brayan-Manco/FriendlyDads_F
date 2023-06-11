import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showLoginSection: boolean = true;
  showRegisterSection: boolean = false;

  toggleSections(): void {
    this.showLoginSection = !this.showLoginSection;
    this.showRegisterSection = !this.showRegisterSection;
  }
}
