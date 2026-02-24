import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './../../../Service/Auth.service';

@Component({
  selector: 'app-register-card',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register-card.html',
  styleUrl: './register-card.css',
})
export class RegisterCard {

  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {

    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const success = this.authService.register(
      this.fullName,
      this.email,
      this.password
    );

    if (success) {
      alert("Registered Successfully ");
      this.router.navigate(['/login']);
    } else {
      alert("Email already exists ");
    }
  }
}