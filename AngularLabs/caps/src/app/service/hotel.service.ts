import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Hotel } from "../model/hotel.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HotelService {

    baseUrl: string = "http://localhost:8080/api/v2/hotel";

    constructor(private httpClient: HttpClient) {}

    // Fetch all hotels
    getHotels() {
        return this.httpClient.get<Hotel[]>(this.baseUrl);
    }
    
    // Fetch a specific hotel by ID
    getHotelById(hotelId: number) {
        return this.httpClient.get<Hotel>(`${this.baseUrl}/${hotelId}`);
    }

    // Add a new hotel
    createHotel(hotel: Hotel) {
        return this.httpClient.post(this.baseUrl, hotel);
    }

    // Update hotel details by ID
    updateHotel(hotelId: number, hotel: Hotel): Observable<Hotel> {
        return this.httpClient.put<Hotel>(`${this.baseUrl}/${hotelId}`, hotel);
      }

    // Delete a hotel by ID
    deleteHotel(hotelId: number) {
        return this.httpClient.delete(`${this.baseUrl}/${hotelId}`);
    }
}
