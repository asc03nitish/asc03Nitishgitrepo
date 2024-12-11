import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacilityService } from '../service/facilities.service';

@Component({
  selector: 'app-addfacilities',
  // standalone: true,
  // imports: [],
  templateUrl: './addfacilities.component.html',
  styleUrl: './addfacilities.component.css'
})
export class AddfacilitiesComponent implements OnInit {

  addFacilityForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private facilityService: FacilityService
  ) { }

  ngOnInit(): void {
    this.addFacilityForm = this.formBuilder.group({
      facilityId: ['', Validators.required],
      hotelId: ['', Validators.required],
      facilityName: ['', Validators.required],
      description: ['', Validators.required],
      availability: ['', Validators.required],
      cost: ['', Validators.required]
    });
  }

  // Navigate back to the facilities list
  back(): void {
    this.router.navigate(['/facilities']);
  }

  // Handle form submission
  onSubmit(): void {
    if (this.addFacilityForm.valid) {
      this.facilityService.createFacility(this.addFacilityForm.value).subscribe(
        (data) => {
          alert('Facility added successfully!');
          this.router.navigate(['/facilities']); 
        },
        (error) => {
          alert('Error: ' + error.message); 
        }
      );
    } else {
      this.addFacilityForm.markAllAsTouched(); 
    }
  }
}

