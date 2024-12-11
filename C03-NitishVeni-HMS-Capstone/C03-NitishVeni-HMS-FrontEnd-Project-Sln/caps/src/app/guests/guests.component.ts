import { Component, OnInit } from '@angular/core';
import { Guest } from '../model/guest.model';
import { Router } from '@angular/router';
import { GuestService } from '../service/guest.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {
  guests: Guest[] = [];
  matchedGuests: Guest[] = [];  // This will hold the filtered guests
  searchId: number | null = null;  // Initialized as null

  constructor(private guestService: GuestService, private router: Router) {}

  ngOnInit(): void {
    // Get the list of all guests when the component initializes
    this.guestService.getGuests().subscribe((guestData) => {
      this.guests = guestData;
      this.matchedGuests = [...this.guests];  // Initialize matchedGuests with all guests
    });
  }

  // Delete a guest by their ID
  deleteGuest(guestId: number | undefined): void {
    if (guestId !== undefined) {
      this.guestService.deleteGuest(guestId).subscribe(() => {
        this.guests = this.guests.filter(guest => guest.guestId !== guestId);
        this.searchGuest();  // Update matchedGuests after deletion
      });
    }
  }

  // Navigate to the update guest page
  updateGuest(guestId: number | undefined): void {
    if (guestId !== undefined) {
      this.router.navigate(['/updateguest', guestId]);
    } else {
      console.error("Guest ID is undefined");
    }
  }

  // Search for a guest by ID
  searchGuest(): void {
    if (this.searchId) {
      // Filter the guests based on the searchId
      this.matchedGuests = this.guests.filter(guest => guest.guestId === this.searchId);
    } else {
      // If searchId is null or empty, show all guests
      this.matchedGuests = [...this.guests];
    }
  }

  // Navigate to the add guest page
  addGuest(): void {
    this.router.navigate(['/addguest']);
  }

  // Navigate back to the dashboard
  back(): void {
    this.router.navigate(['/dashboard']);
  }
}
