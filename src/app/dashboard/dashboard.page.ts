import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  constructor() {}

  ngOnInit() {
  }

}
