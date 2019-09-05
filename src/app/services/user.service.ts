import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {


  SERVER_URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  public getUsers() {
    return this.httpClient.get(this.SERVER_URL + 'users');
  }

  public getUser(userId: number) {
    return this.httpClient.get(`${this.SERVER_URL}users/${userId}`);
  }

  public createUser(user: {id: number, username: string, email: string, password: string}) {
    return this.httpClient.post(`${this.SERVER_URL}users`, user);
  }

  public deleteUser(email: string) {
    return this.httpClient.delete(`${this.SERVER_URL}users/${email}`);
  }

  public updateUser(user: {id: number, username: string, email: string, password: string}) {
    return this.httpClient.put(`${this.SERVER_URL}users/${user.id}`, user);
  }
}
