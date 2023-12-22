import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class LoginPage implements OnInit {
  constructor(
    private http: HttpClient,
    private navCtrl: NavController
  ) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {}

  SaveData() {
    const loginData = this.loginForm.value;

    this.http.post('http://127.0.0.1:5000/auth/login', loginData, { withCredentials: true })
      .subscribe(
        (response: any) => {
          if (response && response.user_profile && Object.keys(response.user_profile).length > 0) {
            // User profile has contents, navigate to dashboard
            this.navCtrl.navigateForward('/dashboard');
          } else {
            // User profile is empty, navigate to user-profile
            this.navCtrl.navigateForward('/user-profile');
          }
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
  }
}
