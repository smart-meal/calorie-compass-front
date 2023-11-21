import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class LoginPage implements OnInit {
  constructor(

  ) { }

  loginForm = new FormGroup({
    emailid: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
    
  }
  SaveData(){
    console.log(this.loginForm.value)
  }

}
