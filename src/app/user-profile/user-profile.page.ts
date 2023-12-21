import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AzureBlobStorageService } from '../azure-blob-storage.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
  // Note: Since Ionic 4, 'standalone: true' is not typically used, and modules are declared in @NgModule
})
export class UserProfilePage implements OnInit {
  userProfile = {
    first_name: '',
    last_name: '',
    age: 0,
    height: 0,
    weight: 0,
    goal: '',
    lifestyle: '',
    allergies: ''
  };
  bmi: number;

  editMode = false;

  constructor(private http: HttpClient,
    private alertController: AlertController,
    private navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    this.http.get('http://127.0.0.1:5000/auth/profile',{ withCredentials: true }).subscribe((data: any) => {
      this.userProfile = data;
      this.bmi = data.bmi;
    }, error => {
      console.error('Error fetching profile:', error);
    });
  }

  editProfile() {
    this.editMode = true;
    // If you use a separate page or modal to edit, you'd navigate or open the modal here
  }

  saveProfile() {
    if (this.editMode) {
      this.http.post('http://127.0.0.1:5000/auth/profile', this.userProfile, { withCredentials: true }).subscribe(
        (response: any) => {
          console.log('Profile updated successfully.', response);
          this.editMode = false;
          this.bmi = response.bmi;  // Update the BMI value here
          this.presentAlert('Success', 'Your profile has been updated successfully.');
        },
        error => {
          console.error('Error updating profile:', error);
          this.presentAlert('Error', 'There was a problem updating your profile.');
        }
      );
    }
  }

  cancelEdit() {
    // Logic to cancel the edit operation
    this.editMode = false;
    // Optionally refresh data from the backend if changes were made
    this.getUserProfile();
  }

  goToDashboard() {
    this.navCtrl.navigateRoot('/dashboard');
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  
}
