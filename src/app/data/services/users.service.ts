import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  http = inject(HttpClient);
  param1 = 'value1';
  param2 = 'value2';
  baseApiUrl = 'http://localhost:4200/api/';
  constructor() {}
  getTestData() {
    return this.http.get(
      `${this.baseApiUrl}test?param1=${this.param1}&param2=${this.param2}`
    );
  }
}
