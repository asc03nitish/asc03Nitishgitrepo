import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../model/booking.model';  // Adjust the path if necessary
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseUrl: string = 'http://localhost:8080/api/v1/booking';  // URL for booking API

  constructor(private httpClient: HttpClient) {}

  // Fetch all bookings
  getBookings() {
    return this.httpClient.get<Booking[]>(this.baseUrl);
  }

  // Fetch a specific booking by ID
  getBookingById(bookingId: number) {
    return this.httpClient.get<Booking>(`${this.baseUrl}/${bookingId}`);
  }

  // Add a new booking
  createBooking(booking: Booking) {
    return this.httpClient.post(this.baseUrl, booking);
  }

  // Update booking details by ID
  updateBooking(bookingId: number, booking: Booking): Observable<Booking> {
    return this.httpClient.put<Booking>(`${this.baseUrl}/${bookingId}`, booking);
  }

  // Delete a booking by ID
  deleteBooking(bookingId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${bookingId}`);
  }
}
