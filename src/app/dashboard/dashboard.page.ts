import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonToolbar, IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter, Subscription } from 'rxjs';


interface Meal {
  calories: number;
  carbs: number;
  description: string;
  fat: number;
  image_url: string;
  meal_date: string;
  meal_time: string;
  proteins: number;
  title: string;
  user: string;
  user_id: string;
  weight: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DashboardPage implements OnInit, OnDestroy {
  recentMeals: Meal[] = [];
  private routerSubscription: Subscription;
  totalProteins = 0;
  totalFat = 0;
  totalCarbs = 0;
  totalCalories = 0;
  dailyGoals = {
    calories: 2000,
    proteins: 50, // in grams
    fat: 70,      // in grams
    carbs: 310    // in grams
  };
    // recentMeals = [
    //   { name: 'Breakfast', image: 'assets/icon/breakfast_food.jpg', calories: '240', time: '08:00 AM', date: '2023-01-01' },
    //   { name: 'Lunch', image: 'assets/icon/lunch_food.jpg', calories: '500', time: '12:30 PM', date: '2023-01-01' },
    //   { name: 'Dinner', image: 'assets/icon/dinner_food.jpg', calories: '400', time: '07:00 PM', date: '2023-01-01' },
      
    // ];
  
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: RouterEvent) => {
        if (event instanceof NavigationEnd && event.url === '/dashboard') {
          this.fetchMeals();
        }
      });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // addMeal(name: string, image: string, calories: string, time: string, date: string) {
  //   const newMeal = { name, image, calories, time, date };
  //   this.recentMeals.push(newMeal);
  // }

  redirectToMealHistory() {
    // Redirect to the /login page
    this.router.navigate(['/meal-history']);
  }
  redirectToAddMeal() {
    // Redirect to the /login page
    this.router.navigate(['/meal-scan']);
  }
  redirectToAiChat() {
    // Redirect to the /login page
    this.router.navigate(['/ai-chat']);
  }

  redirectToUserProfile() {
    // Redirect to the /login page
    this.router.navigate(['/user-profile']);
  }
  // You can call this method when the user inputs new meal details.
  // For instance, addMeal('Snack', 'assets/icon/snack_food.jpg', '150', '03:30 PM', '2023-01-02');

  fetchMeals() {
    this.http.get<Meal[]>('http://127.0.0.1:5000/auth/get_meals', { withCredentials: true }).subscribe((meals) => {
      console.log("hello")
      this.recentMeals = this.filterTodaysMeals(meals);
      this.calculateTotals();

    }, error => {
      console.error('Error fetching meals:', error);
    });
  }

  filterTodaysMeals(meals: Meal[]): Meal[] {
    console.log(meals)
    const today = new Date().toISOString().split('T')[0];
    return meals.filter(meal => meal.meal_date === today);
  }

  calculateTotals() {
    this.totalProteins = this.recentMeals.reduce((acc, meal) => acc + meal.proteins, 0);
    this.totalFat = this.recentMeals.reduce((acc, meal) => acc + meal.fat, 0);
    this.totalCarbs = this.recentMeals.reduce((acc, meal) => acc + meal.carbs, 0);
    this.totalCalories = this.recentMeals.reduce((acc, meal) => acc + meal.calories, 0);
  }

  openMealDetail(meal: Meal) {
    this.router.navigate(['/meal-detail'], {
      state: { meal }
    });
  }

}
