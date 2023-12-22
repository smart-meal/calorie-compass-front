import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
 
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
interface MealDay {
  date: string;
  meals: Meal[];
}

@Component({
  selector: 'app-meal-history',
  templateUrl: './meal-history.page.html',
  styleUrls: ['./meal-history.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})


export class MealHistoryPage implements OnInit {
  meal: Meal;
  mealDays: MealDay[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.fetchMeals();
  }

  fetchMeals() {
    this.http.get<Meal[]>('http://127.0.0.1:5000/auth/get_meals',{ withCredentials: true }).subscribe((meals) => {
      this.processMeals(meals);
    }, error => {
      console.error('Error fetching meals:', error);
    });
  }


  processMeals(meals: Meal[]) {
    meals.forEach(meal => {
      const existingDay = this.mealDays.find(day => day.date === meal.meal_date);

      if (existingDay) {
        existingDay.meals.push(meal);
      } else {
        this.mealDays.push({
          date: meal.meal_date,
          meals: [meal]
        });
      }
    });
  }

  openMealDetail(meal: Meal) {
    this.router.navigate(['/meal-detail'], {
      state: { meal }
    });
  }

  redirectToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}

