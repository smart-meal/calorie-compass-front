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

    this.http.post('http://127.0.0.1:5000/auth/login', loginData)
      .subscribe(
        (response: any) => {
          console.log('Login successful:', response);
          this.navCtrl.navigateForward('/home');
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
  }
}
