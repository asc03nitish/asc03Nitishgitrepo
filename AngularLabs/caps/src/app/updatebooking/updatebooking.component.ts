import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking.model';
import { BookingService } from '../service/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatebooking',
  // standalone: true,
  // imports: [],
  templateUrl: './updatebooking.component.html',
  styleUrl: './updatebooking.component.css'
})
export class UpdatebookingComponent implements OnInit {
  bookingId: number = 0;
  booking: Booking = new Booking();
  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookingId = this.route.snapshot.params['bookingId'];
    this.booking = new Booking();
    this.bookingService.getBookingById(this.bookingId)
      .subscribe(
        (searchedBooking) => {
          this.booking = searchedBooking;
        },
        (error) => console.log(error)
      );
  }

  updateBooking(): void {
    this.bookingService.updateBooking(this.bookingId, this.booking)
      .subscribe(
        (updatedBooking) => {
          console.log(updatedBooking);
          this.router.navigate(['/bookings']);
        },
        (error) => console.log(error)
      );
  }
}






 
  //   bookingId: number = 0;
  //   bookingForm: FormGroup;
  
  //   constructor(
  //     private bookingService: BookingService,
  //     private route: ActivatedRoute,
  //     private router: Router,
  //     private fb: FormBuilder
  //   ) {}
  
  //   ngOnInit(): void {
  //     this.bookingId = this.route.snapshot.params['bookingId'];
      
  //     // Initialize the form
  //     this.bookingForm = this.fb.group({
  //       bookingId: [{ value: '', disabled: true }],
  //       hotelId: ['', Validators.required],
  //       guestId: ['', Validators.required],
  //       checkInDate: ['', Validators.required],
  //       checkOutDate: ['', Validators.required],
  //       totalAmount: ['', [Validators.required, Validators.min(1)]]
  //     });
  
  //     // Fetch the booking by ID and populate the form
  //     this.bookingService.getBookingById(this.bookingId).subscribe(
  //       (searchedBooking) => {
  //         this.bookingForm.patchValue({
  //           bookingId: searchedBooking.bookingId,
  //           hotelId: searchedBooking.hotelId,
  //           guestId: searchedBooking.guestId,
  //           checkInDate: searchedBooking.checkInDate,
  //           checkOutDate: searchedBooking.checkOutDate,
  //           totalAmount: searchedBooking.totalAmount
  //         });
  //       },
  //       (error) => console.log(error)
  //     );
  //   }
  
  //   updateBooking(): void {
  //     if (this.bookingForm.valid) {
  //       this.bookingService.updateBooking(this.bookingId, this.bookingForm.value)
  //         .subscribe(
  //           (updatedBooking) => {
  //             console.log(updatedBooking);
  //             this.router.navigate(['/bookings']);
  //           },
  //           (error) => console.log(error)
  //         );
  //     }
  //   }
  
  //   resetForm(): void {
  //     this.bookingForm.reset();
  //   }
  // }
   
  

//     bookingId: number = 0;
//     booking: Booking = new Booking();
  
//     constructor(
//       private bookingService: BookingService,
//       private route: ActivatedRoute,
//       private router: Router
//     ) {}
  
//     ngOnInit(): void {
//       this.bookingId = this.route.snapshot.params['bookingId'];
//       this.bookingService.getBookingById(this.bookingId).subscribe(
//         (data) => {
//           this.booking = data;
//         },
//         (error) => console.error(error)
//       );
//     }
  
//     updateBooking(): void {
//       this.bookingService.updateBooking(this.bookingId, this.booking).subscribe(
//         (updatedBooking) => {
//           console.log(updatedBooking);
//           this.router.navigate(['/bookings']);
//         },
//         (error) => console.error(error)
//       );
//     }
//   }
  
