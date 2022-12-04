import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnglishWordService {
  constructor(private http: HttpClient) {}

  getEnglishWord() {
    return this.http.get('https://random-words-api.vercel.app/word');
  }
}
