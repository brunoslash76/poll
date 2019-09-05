import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const users = [
      { id: 1, username: 'bruno', email: 'bdmrusso@gmail.com', password: '12345678' }
    ];
    const restaurants = [
      { id: 1, name: 'Sabor do Líbano', ratting: 0, rattingCount: 0 },
      { id: 2, name: 'McDonalds', ratting: 0, rattingCount: 0 },
      { id: 3, name: 'Borgo', ratting: 0, rattingCount: 0 },
      { id: 4, name: 'Pizzaria do Rei', ratting: 0, rattingCount: 0 },
    ];
    return { users, restaurants };
  }
}
