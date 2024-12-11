import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestService } from '../service/guest.service';

@Component({
  selector: 'app-addguest',
  // standalone: true,
  // imports: [],
  templateUrl: './addguest.component.html',
  styleUrl: './addguest.component.css'
})
export class AddguestComponent implements OnInit {
  
    addGuestForm: FormGroup;
  
    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private guestService: GuestService
    ) { }
  
    ngOnInit(): void {
      this.addGuestForm = this.formBuilder.group({
        guestId: ['', Validators.required],
        name: ['', Validators.required],
        age: ['', [Validators.required, Validators.min(1)]],
        gender: ['', Validators.required],
        contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        email: ['', [Validators.required, Validators.email]],
        checkInDate: ['', Validators.required],
        checkOutDate: ['', Validators.required],
        roomNumber: ['', Validators.required],
        remarks: ['']
      });
    }
  
    back() {
      this.router.navigate(['/guests']);
    }
  
    onSubmit(): void {
      if (this.addGuestForm.valid) {
        this.guestService.createGuest(this.addGuestForm.value).subscribe(
          data => {
            alert('Guest Added Successfully');
            this.router.navigate(['/guests']);
          },
          error => {
            alert('Error: ' + error.message);
          }
        );
      } else {
        this.addGuestForm.markAllAsTouched();
      }
    }
  }
  
