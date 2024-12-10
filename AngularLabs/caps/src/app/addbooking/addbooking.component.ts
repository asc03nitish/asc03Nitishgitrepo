import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../service/booking.service';
import { Booking } from '../model/booking.model';

@Component({
  selector: 'app-addbooking',
  // standalone: true,
  // imports: [],
  templateUrl: './addbooking.component.html',
  styleUrl: './addbooking.component.css'
})
export class AddbookingComponent implements OnInit {
  
    addBookingForm: FormGroup;
  
    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private bookingService: BookingService 
    ) { }
  
    ngOnInit(): void {
      this.addBookingForm = this.formBuilder.group({
        // bookingId: ['', Validators.required],
        hotelId: ['', Validators.required],
        guestId: ['', Validators.required],
        checkInDate: ['', Validators.required],
        checkOutDate: ['', Validators.required],
        totalAmount: ['', [Validators.required, Validators.min(0)]]
      });
    }
  
    back() {
      this.router.navigate(['/bookings']);  
    }
  
    onSubmit(): void {
      if (this.addBookingForm.valid) {
        this.bookingService.createBooking(this.addBookingForm.value).subscribe(
          data => {
            
            this.router.navigate(['/bookings']);  
          },
          error => {
            alert('Error: ' + error.message);
          }
        );
      } else {
        this.addBookingForm.markAllAsTouched();
      }
    }
  }
  