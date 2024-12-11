import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacilityService } from '../service/facilities.service';
import { Facility } from '../model/facilities.model';

@Component({
  selector: 'app-facilities',
  // standalone: true,
  // imports: [],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.css'
})
export class FacilitiesComponent implements OnInit {
  
    facilities: Facility[] = [];
    matchedFacilities: Facility[] = [];
    searchFacilityName: string = '';
  
    constructor(
      private facilityService: FacilityService,
      private router: Router
    ) { }
  
    ngOnInit(): void {
      // Load all facilities on component initialization
      this.loadFacilities();
    }
  
    // Fetch the list of all facilities
    loadFacilities(): void {
      this.facilityService.getFacilities().subscribe((facilityData) => {
        this.facilities = facilityData;
      });
    }
  
    // Delete a facility by ID
    deleteFacility(facilityId: number): void {
      this.facilityService.deleteFacility(facilityId).subscribe(() => {
        this.facilities = this.facilities.filter(facility => facility.facilityId !== facilityId);
        alert("Facility deleted successfully.");
      });
    }
  
    // Update facility - Navigate to update form
    updateFacility(facilityId: number): void {
      this.router.navigate([`/update-facility`, facilityId]);
    }
  
    // Search facility by name
    searchFacility(): void {
      if (this.searchFacilityName.trim()) {
        this.matchedFacilities = this.facilities.filter(facility =>
          facility.facilityName.toLowerCase().includes(this.searchFacilityName.toLowerCase())
        );
        if (this.matchedFacilities.length === 0) {
          alert('No facilities found.');
        }
      } else {
        this.matchedFacilities = [];
      }
    }
  
    // Navigate to add facility page
    addFacility(): void {
      this.router.navigate(['/addfacilities']);
    }
  
    // Navigate back to the previous page (list-hotels)
    back(): void {
      this.router.navigate(['/dashboard']);
    }
  }
  
