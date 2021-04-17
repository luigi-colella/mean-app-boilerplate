import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import ApiResponse from '../interfaces/api-response';
import iRide from '../interfaces/ride';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  private readonly apiUrlGetUserRides = environment.apiUrlGetUserRides
  private readonly apiUrlPostUserRides = environment.apiUrlPostUserRides

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get the rides of a given user.
   */
  getUserRides(user_id: string) {
    let apiUrlGetUserRides = this.apiUrlGetUserRides.replace(':uid', user_id)
    return this.http.get<ApiResponse<{ rides: iRide[] }>>(apiUrlGetUserRides)
  }

  /**
   * Save a new ride.
   */
  saveNewRide(ride: Omit<iRide, 'id'>) {
    let apiUrlPostUserRides = this.apiUrlPostUserRides.replace(':uid', ride.user_id)
    return this.http.post<ApiResponse<{ ride: iRide }>>(apiUrlPostUserRides, ride)
  }
}
