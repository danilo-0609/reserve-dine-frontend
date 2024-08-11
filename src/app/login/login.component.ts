import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FontAwesomeModule, MatIconModule, CommonModule, FormsModule, HttpClientModule ],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  errorMessage: string = "The user email or password is incorrect";
  isLoginAttempted: boolean = false;

  constructor(private router : Router, private loginService : LoginService) {}

  ngOnInit(): void {
  }

  navigateToHomePage() : void {
    this.router.navigate(['/home']);
  }

  signIn(): void {
    this.isLoginAttempted = true;
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        this.navigateToHomePage();
        console.log("successful!:" + this.email + this.password);
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
}
