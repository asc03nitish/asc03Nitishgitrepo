import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Guest } from "../model/guest.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  baseUrl: string = "http://localhost:8080/api/v3/guest";

  constructor(private httpClient: HttpClient) {}

  getGuests() {
        return this.httpClient.get<Guest[]>(this.baseUrl);
    }
    
    // Fetch a specific guest by ID
    getGuestById(guestId: number) {
        return this.httpClient.get<Guest>(`${this.baseUrl}/${guestId}`);
    }

    // Add a new guest
    createGuest(guest: Guest) {
        return this.httpClient.post(this.baseUrl, guest);
    }
  // Update guest details by ID
  updateGuest(guestId: number, guest: Guest): Observable<Guest> {
    return this.httpClient.put<Guest>(`${this.baseUrl}/${guestId}`, guest);
  }

  // Delete a guest by ID
  deleteGuest(guestId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${guestId}`);
}
}
