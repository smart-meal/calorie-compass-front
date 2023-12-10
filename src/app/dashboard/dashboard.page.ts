import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonToolbar, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DashboardPage implements OnInit {

  
    recentMeals = [
      { name: 'Breakfast', image: 'assets/icon/breakfast_food.jpg', calories: '240', time: '08:00 AM', date: '2023-01-01' },
      { name: 'Lunch', image: 'assets/icon/lunch_food.jpg', calories: '500', time: '12:30 PM', date: '2023-01-01' },
      { name: 'Dinner', image: 'assets/icon/dinner_food.jpg', calories: '400', time: '07:00 PM', date: '2023-01-01' },
      
    ];
  
  constructor(private router: Router) {}

  ngOnInit() {}

  addMeal(name: string, image: string, calories: string, time: string, date: string) {
    const newMeal = { name, image, calories, time, date };
    this.recentMeals.push(newMeal);
  }

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
  // You can call this method when the user inputs new meal details.
  // For instance, addMeal('Snack', 'assets/icon/snack_food.jpg', '150', '03:30 PM', '2023-01-02');

}
