import { EnglishWordService } from './../../services/english-word.service';
import { Observable, pipe } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public englishWordStream$: Observable<any> =
    this.engWordService.getEnglishWord();
  englishWordList: any[] = [];

  constructor(private engWordService: EnglishWordService) {}

  ngOnInit(): void {
    this.englishWordStream$.subscribe((data) => {
      console.log(data);
      this.englishWordList = data;
    });
  }

  otherWord() {
    this.englishWordStream$.subscribe((data) => {
      console.log(data);
      this.englishWordList = data;
    });
  }
}
