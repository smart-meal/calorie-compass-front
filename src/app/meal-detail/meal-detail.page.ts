import { Component, OnInit } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.page.html',
  styleUrls: ['./meal-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MealDetailPage {

  meal: {
    pictureUrl: string;
    DateTime: Date;
    name: string;
    fats: number;
    proteins: number;
    calories: number;
    carbs: number;
  };

  constructor(private route: ActivatedRoute) {
    // Dummy data for demonstration
    this.meal = {
      pictureUrl: 'assets/icon/breakfast_food.jpg',
      DateTime: new Date(2023, 0, 1, 12, 0, 0),
      name: "Lunch",
      fats: 10,
      proteins: 20,
      calories: 300,
      carbs: 30,
    };
  }
}
