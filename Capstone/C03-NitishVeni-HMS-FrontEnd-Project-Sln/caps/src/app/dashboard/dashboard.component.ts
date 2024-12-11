import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  // standalone: true,
  // imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

 
  constructor(private router: Router) { }
 
  navigateToHotels() {
    this.router.navigate(['/list-hotels']);
  }
 
  navigateToGuests() {
    this.router.navigate(['/guests']);
  }
 
  // navigateToReviews() {
  //   this.router.navigate(['/reviews']);
  // }
  navigateToFacilities() {
    this.router.navigate(['/facilities']);
  }
 
  navigateToBookings() {
    this.router.navigate(['/bookings']);
  }

  logOut(): void {
    
    sessionStorage.setItem("loggedIn", "no");
    this.router.navigate(['/login']);
  }
}
 
