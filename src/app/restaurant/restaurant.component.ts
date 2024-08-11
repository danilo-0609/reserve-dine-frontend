import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantPageResponse } from './RestaurantPageResponse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnInit {
  
  restaurants: RestaurantPageResponse[] = [];
  pageNumber = 1;
  pageSize = 10;

  constructor(private router: Router, private http: HttpClient){ }

  ngOnInit(): void {
    this.http.get<RestaurantPageResponse[]>("https://localhost:5000/restaurants/all?pageNumber=1&pageSize=10", { withCredentials: true } ).subscribe({
      next: (v) => { this.restaurants = v; console.log(this.restaurants.forEach(r => r.name)) } ,
      error: (e) => console.error("An error occurred:", e)
    })
  } 

  navigateToHome() : void {
    this.router.navigate(['/home']);
  }

  navigateToLogin() : void {
    this.router.navigate(['/login']);
  }
}
