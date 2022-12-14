import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnglishWordService {
  constructor(private http: HttpClient) {}

  getEnglishWord(word: string): any {
    return this.http.get<any>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
  }

  getRandomeWord(): any {
    return this.http.get<any>('https://random-word-api.herokuapp.com/word');
  }

  randomWord(array: any): void {
    return array[Math.floor(Math.random() * 2466)];
  }
}
