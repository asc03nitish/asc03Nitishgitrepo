import { Component } from '@angular/core';
import { Guest } from '../model/guest.model';
import { GuestService } from '../service/guest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateguest',
  // standalone: true,
  // imports: [],
  templateUrl: './updateguest.component.html',
  styleUrl: './updateguest.component.css'
})
export class UpdateguestComponent {

  guestId: number = 0;
  guest: Guest = new Guest();
  constructor(
    private guestService: GuestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.guestId = this.route.snapshot.params['guestId'];
    this.guest = new Guest();
    this.guestService.getGuestById(this.guestId)
      .subscribe(
        (searchedGuest) => {
          this.guest = searchedGuest;
        },
        (error) => console.log(error)
      );
  }

  updateGuest(): void {
    this.guestService.updateGuest(this.guestId, this.guest)
      .subscribe((updatedGuest) => {
          console.log(updatedGuest);
          this.router.navigate(['/guests']);
        },
        (error) => console.log(error)
      );
  }
}

