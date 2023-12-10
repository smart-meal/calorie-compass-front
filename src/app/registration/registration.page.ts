import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class RegistrationPage implements OnInit {
  password: string = '';
  passwordError: string = '';

  username: string = '';
  usernameError: string = '';
 
  validateUsername(username: string) {
    // You can reference the password directly
    if (username.length < 8) {
      this.usernameError = 'Username must be at least 8 characters long';
    } else {
      this.usernameError = '';
    }
  }
 
  validatePassword(password: string) {
    // You can reference the password directly
    const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;
    if (password.length < 8) {
      this.passwordError = 'Password must be at least 8 characters long';
    } else if (!alphanumericRegex.test(password)){
      this.passwordError = 'Password must be alphanumeric';
    } else {
      this.passwordError = '';
    }
  }

  constructor(
    private http: HttpClient,
    private navCtrl: NavController
  ) { }


  registrationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    repeat_password: new FormControl(''),
  });

  ngOnInit() {
  }

  SaveData() {
    const registrationData = this.registrationForm.value;

    this.http.post('http://127.0.0.1:5000/auth/register',registrationData)
      .subscribe(
        (response: any) => {
          this.navCtrl.navigateForward('/login');
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
  }

}
