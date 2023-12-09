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
      date: '2023-01-01',
      meals: [
        { name: 'Breakfast', image: 'assets/icon/breakfast_food.jpg', calories: '240', time: '08:00 AM', date: '2023-01-01' },
        { name: 'Lunch', image: 'assets/icon/lunch_food.jpg', calories: '500', time: '12:30 PM', date: '2023-01-01' },
        { name: 'Dinner', image: 'assets/icon/dinner_food.jpg', calories: '400', time: '07:00 PM', date: '2023-01-01' },
      ],
    },
    {
      date: '2023-01-02',
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
    this.updateMealDaysFromJson();
    console.log('TEST TEST');
  }


  //Edit this function to recieve the json from backend, make sure you send it
  //oldest first if you care about date ordering
  updateMealDaysFromJson() {
    const jsonData = [
      {
        "calories": 650.0,
        "carbs": 90.0,
        "description": "A nutritious meal",
        "fat": 20.0,
        "image_url": "https://www.watscooking.com/images/dish/large/DSC_1009.JPG",
        "meal_date": "2023-10-18",
        "proteins": 30.0,
        "title": "Healthy Meal 4",
        "user": "6572506af58fc94efe72639e",
        "user_id": "6572506af58fc94efe72639e",
        "weight": 500.0
      },
      {
        "calories": 650.0,
        "carbs": 90.0,
        "description": "A nutritious meal",
        "fat": 20.0,
        "image_url": "https://www.watscooking.com/images/dish/large/DSC_1009.JPG",
        "meal_date": "2023-12-18",
        "proteins": 30.0,
        "title": "Healthy Meal 3",
        "user": "6572506af58fc94efe72639e",
        "user_id": "6572506af58fc94efe72639e",
        "weight": 500.0
      },
      {
        "calories": 1300.0,
        "carbs": 150.0,
        "description": "A nutritious meal",
        "fat": 40.0,
        "image_url": "https://www.watscooking.com/images/dish/large/DSC_1009.JPG",
        "meal_date": "2023-11-18",
        "proteins": 60.0,
        "title": "Healthy Meal 5",
        "user": "6572506af58fc94efe72639e",
        "user_id": "6572506af58fc94efe72639e",
        "weight": 1000.0
      }
    ];

    jsonData.forEach((jsonMeal) => {
      const matchingDate = this.mealDays.find((mealDay) => mealDay.date === jsonMeal.meal_date);

      if (matchingDate) {
        // Add the meal information to the existing meals array for the matched date
        matchingDate.meals.unshift({
          name: jsonMeal.title,
          image: jsonMeal.image_url,
          calories: jsonMeal.calories.toString(),
          time: 'Custom Time', // You can customize the time as needed
          date: jsonMeal.meal_date
        });
      } else {
        // If the date is not found, create a new entry in mealDays array
        this.mealDays.unshift({
          date: jsonMeal.meal_date,
          meals: [{
            name: jsonMeal.title,
            image: jsonMeal.image_url,
            calories: jsonMeal.calories.toString(),
            time: 'Custom Time', // You can customize the time as needed
            date: jsonMeal.meal_date
          }]
        });
      }
    });
  }
 
}
 
 
 