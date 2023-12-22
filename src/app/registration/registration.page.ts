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
    console.log('Registration page initialized.');
  }

  SaveData() {
    const registrationData = this.registrationForm.value;

    this.http.post('http://127.0.0.1:5000/auth/register',registrationData)
      .subscribe(
        (response: any) => {
          console.log('Registration Successfull', response);
          this.navCtrl.navigateForward('/login');
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
  }

}
