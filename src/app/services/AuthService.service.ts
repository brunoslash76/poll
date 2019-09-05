import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  isAuthenticated(): boolean {
    return localStorage.getItem('userAuthorized') === 'true';
  }

}
