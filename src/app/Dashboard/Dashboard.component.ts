import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  restaurants: any[] = [];
  successMessage: string = null;

  constructor(
    private restaurantService: RestaurantService,
    private router: Router
    ) { }

  ngOnInit() {

    if (!!history.state.successMsg) {
      this.successMessage = history.state.successMsg;
    }
    this.restaurantService.getRestaurants()
      .subscribe((restaurants: any) => {
        this.restaurants = restaurants;
        console.log(this.restaurants);
      });
  }

  rate(restaurantId: number): void {
    this.router.navigate([`poll/${restaurantId}`]);
  }

}
