import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-content-login',
  templateUrl: './content-login.component.html',
})
export class ContentLoginComponent {
  constructor(public authService: AuthService) {}

  onGoogleSignIn() {
    this.authService.googleSignIn();
  }
}