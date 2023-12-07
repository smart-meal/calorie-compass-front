//Defines the logic for the application's root component, named AppComponent. 
//The view associated with this root component becomes the root of the view hierarchy 
//as you add components and services to your application.
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
