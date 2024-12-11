import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-addhotels',
  templateUrl: './addhotels.component.html',
  styleUrls: ['./addhotels.component.css']
})
export class AddhotelsComponent implements OnInit {


 
  
    addHotelForm: FormGroup;
  
    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private hotelService: HotelService 
    ) { }
  
    ngOnInit(): void {
      this.addHotelForm = this.formBuilder.group({
                 hotelid: ['', Validators.required],
                 name: ['', Validators.required],
                 location : ['', Validators.required],
                 price : ['', Validators.required],
                 availability: ['', Validators.required],
                 contact: ['', [Validators.required]],
                 dateAdded: ['', Validators.required]
       });
    }
  
    back() {
      this.router.navigate(['/list-hotels']);  
    }
  
    onSubmit(): void {
      if (this.addHotelForm.valid) {
        this.hotelService.createHotel(this.addHotelForm.value).subscribe(
          data => {
            
            this.router.navigate(['/list-hotels']);  
          },
          error => {
            alert('Error: ' + error.message);
          }
        );
      } else {
        this.addHotelForm.markAllAsTouched();
      }
    }

  }
  