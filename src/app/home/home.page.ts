import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonImg } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonImg],
})
export class HomePage {
  constructor(private router: Router) {}
 
  redirectToLogin() {
    // Redirect to the /login page
    this.router.navigate(['/login']);
  }
 
  redirectToSignup() {
    // Redirect to the /login page
    this.router.navigate(['/registration']);
  }
}
 
