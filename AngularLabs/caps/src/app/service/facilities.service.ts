import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facility } from '../model/facilities.model';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  private baseUrl: string = "http://localhost:3000/facilities";  // Replace with your API URL

  constructor(private httpClient: HttpClient) {}

  // Get all facilities
  getFacilities(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.baseUrl);
  }

  // Get a specific facility by ID
  getFacilityById(facilityId: number): Observable<Facility> {
    return this.httpClient.get<Facility>(`${this.baseUrl}/${facilityId}`);
  }

  // Create a new facility
  createFacility(facility: Facility): Observable<Facility> {
    return this.httpClient.post<Facility>(this.baseUrl, facility);
  }

  // Update a facility by ID
  updateFacility(facilityId: number, facility: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>(`${this.baseUrl}/${facilityId}`, facility);
  }

  // Delete a facility by ID
  deleteFacility(facilityId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${facilityId}`);
  }
}
