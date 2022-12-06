import { EnglishWordService } from './../../services/english-word.service';
import { Observable, pipe, shareReplay, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { englishWordArray } from 'src/assets/word-data/english-word';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public randomWordStream$: Observable<any> =
    this.engWordService.getRandomeWord();

  public englishWordStream = Subscription.EMPTY;

  randomWordList: any = [];
  randomWord: string = '';
  englishWordList: any[] = [];
  public translate: string = ``;
  public wordVoice: string = ``;
  public findAudio: any = [];
  public wordMeaning: string = ``;
  public loading: boolean = true;

  public url = '//www.w3schools.com';

  constructor(private engWordService: EnglishWordService) {}

  ngOnInit(): void {
    this.randomWordData();
    this.otherWord();
  }

  otherWord(): void {
    new Promise((resolve, reject) => {
      this.loading = true;
      this.randomWordData();
      console.log('random word');
      resolve(this.randomWord);
    }).then((res: any) => {
      console.log(res);
      this.englishWordStream = this.engWordService
        .getEnglishWord(res)
        .subscribe((data: any) => {
          console.log(data);
          this.wordMeaning = data[0].meanings[0].definitions[0].definition;
          this.englishWordList = data;
          this.findAudio = data[0].phonetics.find((item: any) => {
            item.audio !== '';
            return item.audio;
          });
          if (this.findAudio !== undefined) {
            this.wordVoice = this.findAudio.audio;
          } else {
            this.wordVoice = '';
          }
          this.translate = `https://translate.google.com/?sl=en&tl=ka&text=${this.englishWordList[0].word}&op=translate`;
          console.log('translate', this.translate);
          console.log('voice', this.wordVoice);
          this.loading = false;
        });
    });
  }

  playAudio(): void {
    const audio = new Audio();
    audio.src = this.wordVoice;
    audio.load();
    audio.play();
  }

  public randomWordData(): void {
    this.randomWord = englishWordArray[Math.floor(Math.random() * 2466)];
  }

  // public firstRandomWordPromise(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.randomWordStream$.subscribe((data) => {
  //       this.randomWordList = data;
  //       this.randomWord = this.randomWordList[0];
  //       console.log(this.randomWord);
  //       resolve(this.randomWord);
  //     });
  //   }).then((data) => {
  //     console.log(data);
  //     this.englishWordStream$ = this.engWordService
  //       .getEnglishWord(this.randomWord)
  //       .subscribe((data: any) => {
  //         console.log(data);
  //         this.englishWordList = data;
  //         this.findAudio = data[0].phonetics.find((item: any) => {
  //           item.audio !== '';
  //           return item.audio;
  //         });
  //         this.wordVoice = this.findAudio.audio;
  //         console.log('voice', this.wordVoice);
  //       });
  //   });
  // }

  ngOnDestroy(): void {
    this.englishWordStream.unsubscribe();
  }
}
