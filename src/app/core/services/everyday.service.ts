import { Injectable } from '@angular/core';
import { EnglishWordService } from './english-word.service';
import { englishWordArray } from 'src/assets/word-data/english-word';

@Injectable({
  providedIn: 'root',
})
export class EverydayService {
  constructor(private wordService: EnglishWordService) {}

  public autoWordChange() {
    let wordDay: any = this.wordService.randomWord(englishWordArray);
    console.log(wordDay);
    this.wordService.getEnglishWord(wordDay);
  }

  setTimerOneDay() {
    let currentTime: any = new Date();
    console.log('currentTime', currentTime.getHours());
    let month: any = currentTime.getMonth() + 1;
    let day: any = currentTime.getDate();
    let year: any = currentTime.getFullYear();
    let hour: any = currentTime.getHours();
    let minute: any = currentTime.getMinutes();
    let second: any = currentTime.getSeconds();
    let totalSecond: any = hour * 60 * 60 + minute * 60 + second;
    let totalSecondToNextDay: any = 24 * 60 * 60 - totalSecond;
    totalSecondToNextDay = totalSecondToNextDay / 3600;
    console.log('nextDay', totalSecondToNextDay);

    // setTimeout(() => {
    //   this.autoWordChange();
    //   this.setTimerOneDay();
    // }, timeToNextDay);
  }
}
