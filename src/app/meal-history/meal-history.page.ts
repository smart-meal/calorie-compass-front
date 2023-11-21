import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
 
@Component({
  selector: 'app-meal-history',
  templateUrl: './meal-history.page.html',
  styleUrls: ['./meal-history.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MealHistoryPage implements OnInit {
 
  mealDays = [
    {
      date: 'Today',
      meals: [
        { name: 'Breakfast', image: 'assets/icon/breakfast_food.jpg', calories: '240', time: '08:00 AM', date: '2023-01-01' },
        { name: 'Lunch', image: 'assets/icon/lunch_food.jpg', calories: '500', time: '12:30 PM', date: '2023-01-01' },
        { name: 'Dinner', image: 'assets/icon/dinner_food.jpg', calories: '400', time: '07:00 PM', date: '2023-01-01' },
      ],
    },
    {
      date: 'Yesterday',
      meals: [
        { name: 'Breakfast', image: 'assets/icon/breakfast_food.jpg', calories: '300', time: '08:30 AM', date: '2023-01-02' },
        { name: 'Lunch', image: 'assets/icon/lunch_food.jpg', calories: '600', time: '01:00 PM', date: '2023-01-02' },
        { name: 'Dinner', image: 'assets/icon/dinner_food.jpg', calories: '450', time: '08:00 PM', date: '2023-01-02' },
      ],
    },
    // Add more days as needed
  ];
 
  constructor() {}
 
  ngOnInit() {
  }
 
}
 
 
 