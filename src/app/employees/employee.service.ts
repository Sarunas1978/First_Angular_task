import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient : HttpClient) {}

  getEmployees(): Observable<any> {
    return this.httpClient.get('https://reqres.in/api/users'); // TODO: Load data from backend service
  }
}
