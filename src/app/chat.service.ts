// chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://127.0.0.1:5000/chat'; // Your Flask API URL

  constructor(private http: HttpClient) { }

  getChatHistory(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/history`, {}, { withCredentials: true });
  }

  sendNewMessage(message: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/new`, { message }, { withCredentials: true });
  }

  cleanChatHistory(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/clean`,{ withCredentials: true });
  }
}
