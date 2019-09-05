import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-poll',
  templateUrl: './Poll.component.html',
  styleUrls: ['./Poll.component.css']
})
export class PollComponent implements OnInit {

  private restaurantId: number;
  restaurant: any = {};
  model: any = {};

  constructor(
    private activeRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.restaurantId = this.activeRoute.snapshot.params.id;
    this.restaurantService.getRestaurant(this.restaurantId)
      .subscribe((restaurant: any) => {
        this.restaurant = restaurant;
      }, (error: any) => {
        console.error('Oops houve um erro', error);
      });
  }

  rateRestaurant() {
    if (!this.model.ratting) {
      console.log('ratting não setado');
      return;
    }
    this.restaurant.ratting += this.model.ratting;
    this.restaurant.rattingCount++;
    this.restaurantService.updateRestaurant(this.restaurant)
      .subscribe(() => {
        const now = new Date();
        localStorage.setItem('pollRestaurant', this.restaurant.id);
        localStorage.setItem(`pollTime${this.restaurant.id}`, `${now.getTime()}`);
        this.router.navigate(['dashboard'], { state: { successMsg: 'Obrigado por sua avalição' } });
      });
  }

  getRatting(): number {
    if (this.restaurant.rattingCount === 0) {
      return 0;
    } else {
      return parseFloat((this.restaurant.ratting / this.restaurant.rattingCount).toFixed(2));
    }
  }
}
