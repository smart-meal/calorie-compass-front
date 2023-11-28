import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-meal-scan',
  templateUrl: './meal-scan.page.html',
  styleUrls: ['./meal-scan.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MealScanPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
