import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../model/booking.model';  // Adjust the path if necessary
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseUrl: string = 'http://localhost:8080/api/v1/booking';  

  constructor(private httpClient: HttpClient) {}
  getBookings() {
    return this.httpClient.get<Booking[]>(this.baseUrl);
  }
  getBookingById(bookingId: number) {
    return this.httpClient.get<Booking>(`${this.baseUrl}/${bookingId}`);
  }
  createBooking(booking: Booking) {
    return this.httpClient.post(this.baseUrl, booking);
  }
  updateBooking(bookingId: number, booking: Booking): Observable<Booking> {
    return this.httpClient.put<Booking>(`${this.baseUrl}/${bookingId}`, booking);
  }
  deleteBooking(bookingId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${bookingId}`);
  }
}
