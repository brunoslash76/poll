import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  SERVER_URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  public getRestaurants() {
    return this.httpClient.get(this.SERVER_URL + 'restaurants');
  }

  public getRestaurant(restaurantId: number) {
    return this.httpClient.get(`${this.SERVER_URL}restaurants/${restaurantId}`);
  }

  public createRestaurant(restaurant: {id: number, name: string, ratting: number}) {
    return this.httpClient.post(`${this.SERVER_URL}restaurants`, restaurant);
  }

  public deleteRestaurant(restaurantId: string) {
    return this.httpClient.delete(`${this.SERVER_URL}restaurants/${restaurantId}`);
  }

  public updateRestaurant(restaurant: {id: number, name: string, ratting: number}) {
    return this.httpClient.put(`${this.SERVER_URL}restaurants/${restaurant.id}`, restaurant);
  }
}
