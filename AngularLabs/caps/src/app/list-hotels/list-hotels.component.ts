import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../service/hotel.service';
import { Hotel } from '../model/hotel.model';

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.css']
})
export class ListHotelsComponent implements OnInit {

  hotels: Hotel[] = [];
  matchedHotels: Hotel[] = [];
  searchId: number | null = null;  // Initialize searchId as null
  private hotelService: HotelService;

  constructor(hotelService: HotelService, private router: Router) {
    this.hotelService = hotelService;
  }

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe((hotelData) => {
      this.hotels = hotelData;
      this.matchedHotels = [...this.hotels];  // Initialize matchedHotels with all hotels initially
    });
  }

  deleteHotel(hotelId: number | undefined): void {
    if (hotelId !== undefined) {
      this.hotelService.deleteHotel(hotelId).subscribe(() => {
        this.hotels = this.hotels.filter(hotel => hotel.hotelId !== hotelId);
        this.searchHotel();  // Re-filter matchedHotels after deletion
        alert("Deleted");
      });
    }
  }

  updateHotel(hotelId: number | undefined): void {
    if (hotelId !== undefined) {
      this.router.navigate(['/updatehotel', hotelId]);
    } else {
      console.error("Hotel ID is undefined");
    }
  }

  searchHotel(): void {
    if (this.searchId) {
      // Filter hotels by searchId dynamically
      this.matchedHotels = this.hotels.filter(hotel => hotel.hotelId === this.searchId);

      if (this.matchedHotels.length > 0) {
        console.log("Search successful");
      } else {
        console.log("No matching hotels found");
        this.matchedHotels = [];  // Clear matched results if none found
      }
    } else {
      // If searchId is null or empty, reset matchedHotels to show all hotels
      this.matchedHotels = [...this.hotels];
    }
  }

  addHotel(): void {
    this.router.navigate(['/addhotels']);
  }

  back(): void {
    this.router.navigate(['/dashboard']);
  }
}
