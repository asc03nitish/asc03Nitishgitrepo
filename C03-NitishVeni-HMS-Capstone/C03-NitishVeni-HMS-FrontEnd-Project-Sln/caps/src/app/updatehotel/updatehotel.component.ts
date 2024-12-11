import { Component, Host } from '@angular/core';
import { Hotel } from '../model/hotel.model';
import { HotelService } from '../service/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatehotel',
  // standalone: true,
  // imports: [],
  templateUrl: './updatehotel.component.html',
  styleUrl: './updatehotel.component.css'
})
export class UpdatehotelComponent {

  hotelId: number = 0;
  hotel: Hotel = new Hotel();
  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hotelId = this.route.snapshot.params['hotelId'];
    this.hotel = new Hotel();
    this.hotelService.getHotelById(this.hotelId)
      .subscribe(
        (searchedHotel) => {
          this.hotel = searchedHotel;
        },
        (error) => console.log(error)
      );
  }

  updateHotel(): void {
    this.hotelService.updateHotel(this.hotelId, this.hotel)
      .subscribe(
        (updatedHotel) => {
          console.log(updatedHotel);
          this.router.navigate(['/list-hotels']);
        },
        (error) => console.log(error)
      );
  }
}
