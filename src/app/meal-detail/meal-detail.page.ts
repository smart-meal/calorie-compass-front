import { Component, OnInit } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { routes } from '../app.routes';


interface Meal {
  calories: number;
  carbs: number;
  description: string;
  fat: number;
  image_url: string;
  meal_date: string;
  proteins: number;
  title: string;
  user: string;
  user_id: string;
  weight: number;
}


@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.page.html',
  styleUrls: ['./meal-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})

export class MealDetailPage {

  meal: Meal;

  // meal: {
  //   pictureUrl: string;
  //   name: string;
  //   fats: number;
  //   proteins: number;
  //   calories: number;
  //   carbs: number;
  // };

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient,
    private navCtrl: NavController) {}

    redirectToMealScan() {
      // Redirect to the /dashboard page
      this.router.navigate(['/meal-scan']);
    }

    // Dummy data for demonstration
    // this.meal = {
    //   pictureUrl: 'assets/icon/breakfast_food.jpg',
    //   name: "Lunch",
    //   fats: 10,
    //   proteins: 20,
    //   calories: 300,
    //   carbs: 30,
    // };

    ngOnInit() {
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras?.state?.['meal']) {
        this.meal = navigation.extras.state['meal'] as Meal;
      }
    }

    goToDashboard() {
      this.navCtrl.navigateRoot('/dashboard');
    }
  
}
