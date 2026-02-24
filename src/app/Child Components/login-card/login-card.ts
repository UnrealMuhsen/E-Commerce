import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './../../../Service/Auth.service';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login-card.html',
  styleUrl: './login-card.css',
})
export class LoginCard {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

onLogin() {
  const success = this.authService.login(this.email, this.password);

  if (success) {
    alert("Login Successful ✅");

    // عمل Redirect للصفحة المطلوبة
    this.router.navigate(['/products']).then(() => {
      // بعد ما Angular يغير الصفحة، نعمل Refresh كامل
      window.location.reload();
    });

  } else {
    alert("Invalid email or password ");
  }
}
}
