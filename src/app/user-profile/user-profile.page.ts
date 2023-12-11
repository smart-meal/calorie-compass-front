import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UserProfilePage {
  constructor(private router: Router) {}

  redirectToDashboard() {
    // Redirect to the /login page
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }

}



