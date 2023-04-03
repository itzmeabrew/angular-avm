import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService
{

  API_ENDPOINT = 'https://637ae5e510a6f23f7f9aacbc.mockapi.io/dashboard';


  constructor(private http: HttpClient) { }

  public geData(): Observable<any>
  {
    return this.http.get(this.API_ENDPOINT);
  }
}
