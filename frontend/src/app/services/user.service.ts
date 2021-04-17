import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import ApiResponse from '../interfaces/api-response';
import iUser from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrlGetUser = environment.apiUrlGetUser

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get the default user used in the application.
   */
  getUser() {
    return this.http.get<ApiResponse<{ user: iUser }>>(this.apiUrlGetUser)
  }
}
