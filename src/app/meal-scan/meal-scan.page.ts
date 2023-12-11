import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AzureBlobStorageService } from '../azure-blob-storage.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-meal-scan',
  templateUrl: './meal-scan.page.html',
  styleUrls: ['./meal-scan.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class MealScanPage implements OnInit {
  textInput: string;
  selectedFile: File;
  displayImage: boolean = false;
  imageFileName: string = "no-preview.png";
  imageUrl: string = 'assets/icon/no-preview.png'; 
  imageUrlDefault: string = "https://caloriecompass.blob.core.windows.net/meals/no-preview.png";
  title: string;
  mealDate: string;
  description: string;

  sas = "sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2024-05-31T11:45:28Z&st=2023-12-08T04:45:28Z&spr=https&sig=WkEZIc3AxQsnCAhaaeOcgyrfctNu8tCVyeKbgZbGH8E%3D"

  constructor(private blobService: AzureBlobStorageService, private http: HttpClient,
    private navCtrl: NavController, private router: Router) { }

    redirectToDashboard() {
      // Redirect to the /dashboard page
      this.router.navigate(['/dashboard']);
    }

    ngOnInit() {
    }
  

  submitForm() {
    // You can perform actions with the form data here, such as sending it to a server
    this.imageFileName=this.selectedFile.name;
    console.log('Text Input:', this.textInput);
    console.log('Selected File:', this.selectedFile);
    console.log('File Name:', this.imageFileName);
    this.imageUrl = 'https://caloriecompass.blob.core.windows.net/meals/'+this.imageFileName;
    this.displayImage = true;

    const mealData = {
      title: this.title,
      image_url: this.imageUrl,
      meal_date: this.mealDate,
      description: this.description
    };
    console.log('Sending meal data:', mealData);
    this.http.post('http://127.0.0.1:5000/auth/add_meal', mealData,{ withCredentials: true })
        .subscribe(response => {
            console.log('Meal data submitted:', response);
            this.router.navigate(['/meal-detail'], { state: { meal: response } });
        }, error => {
            console.error('Error submitting meal data:', error);
        });

      }
      public imageSelected(file: File) {
        this.selectedFile = file;
    
        // Display the image
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imageUrl = e.target.result;
          this.displayImage = true;
        };
        reader.readAsDataURL(file);
    
        // Continue with uploading to Azure
        this.blobService.uploadImage(this.sas, file, file.name, () => {
          console.log(`${file.name} uploaded to azure.`);
        });
      }
    }
    
    // Simulate an asynchronous operation (e.g., API call) with a delay to give time to azure to load
    // After 5 seconds, display an image from a URL
  //   setTimeout(() => {
  //     console.log('File Name:', this.imageUrl);
  //     //myImage.src = "${this.imageUrl}";

  //   }, 2000);
  // }


//   ngOnInit() {
//   }

//   public imageSelected(file: File) {
//     this.selectedFile = file;
//     this.blobService.uploadImage(this.sas, file, file.name, () => {
//       console.log(`${file.name} uploaded to azure.`);
//     })
//   }

// }
