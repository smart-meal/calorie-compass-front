import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ChatService } from '../chat.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.page.html',
  styleUrls: ['./ai-chat.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule]
})
export class AiChatPage implements OnInit {
  messages: any[] = [];
  newMessage: string = '';

  constructor(private http: HttpClient,
    private chatService: ChatService, private navCtrl: NavController) { }

  ngOnInit() {
    this.loadChatHistory();
  }

  loadChatHistory() {
    this.chatService.getChatHistory().subscribe(data => {
      this.messages = data.reverse();
      // Process data as needed
    });
  }

  sendMessage(message: string) {
    if (!message.trim()) return; // Avoid sending empty messages

    this.chatService.sendNewMessage(message).subscribe(response => {
      // Handle response
      this.newMessage = ''; // Clear the message input field
      this.loadChatHistory(); // Optionally reload chat history
    });
  }
  

  clearChatHistory() {
    this.chatService.cleanChatHistory().subscribe(response => {
      this.messages = []; // Clear the local messages array to update the UI
      // Optionally, display a confirmation message or handle errors
    });
  }

  goToDashboard() {
    this.navCtrl.navigateRoot('/dashboard');
  }
}
