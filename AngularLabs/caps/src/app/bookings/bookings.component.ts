import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../service/booking.service';
import { Booking } from '../model/booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  
  bookings: Booking[] = [];
  matchedBookings: Booking[] = [];
  searchBookingId: string = '';

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit(): void {
    // Fetch all bookings on initialization
    this.bookingService.getBookings().subscribe((bookingData) => {
      this.bookings = bookingData;
    });
  }

  // Search bookings dynamically
  searchBooking(): void {
    if (this.searchBookingId) {
      // Filter bookings based on the entered Booking ID
      this.matchedBookings = this.bookings.filter(booking => 
        booking.bookingId.toString().includes(this.searchBookingId)
      );
    } else {
      // If search is empty, show all bookings
      this.matchedBookings = [];
    }
  }

  // Add new booking
  addBooking(): void {
    this.router.navigate(['/addbooking']);  
  }

  // Update booking
  updateBooking(bookingId: number | undefined): void {
    if (bookingId !== undefined) {
      this.router.navigate(['/updatebooking', bookingId]); 
    } else {
      console.error("Booking ID is undefined");
    }
  }

  // Delete booking
  deleteBooking(bookingId: number | undefined): void {
    if (bookingId !== undefined) {
      this.bookingService.deleteBooking(bookingId).subscribe(() => {
        this.bookings = this.bookings.filter(booking => booking.bookingId !== bookingId);
      });
    }
  }

  // Navigate back to dashboard
  back(): void {
    this.router.navigate(['/dashboard']);  
  }
}
