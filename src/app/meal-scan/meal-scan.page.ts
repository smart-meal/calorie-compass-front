import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AzureBlobStorageService } from '../azure-blob-storage.service';

@Component({
  selector: 'app-meal-scan',
  templateUrl: './meal-scan.page.html',
  styleUrls: ['./meal-scan.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MealScanPage implements OnInit {

  sas = "sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2024-05-31T11:45:28Z&st=2023-12-08T04:45:28Z&spr=https&sig=WkEZIc3AxQsnCAhaaeOcgyrfctNu8tCVyeKbgZbGH8E%3D"

  constructor(private blobService: AzureBlobStorageService) { }

  ngOnInit() {
  }

  public imageSelected(file: File) {
    this.blobService.uploadImage(this.sas, file, file.name, () => {
      console.log(`${file.name} uploaded to azure.`);
    })
  }

}
