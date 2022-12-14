import { WordTableStage } from './../../modal/wordTableStage';
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
  randomWord: any = '';
  englishWordList: any[] = [];
  wordStageArray: WordTableStage[] = [];
  public translate: string = ``;
  public wordVoice: string = ``;
  public findAudio: any = [];
  public wordMeaning: string = ``;
  public loading: boolean = true;

  public url = '//www.w3schools.com';
  public addStar: string = 'white';

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

          //check word stage array
          this.wordStageArray = JSON.parse(
            localStorage.getItem('wordStage') || '[]'
          );

          this.wordStageArray.forEach((item: WordTableStage) => {
            if (item.word === this.englishWordList[0].word) {
              this.addStar = 'yellow';
            } else {
              this.addStar = 'white';
            }
          });

          console.log('word stage  new word', this.wordStageArray);

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
    this.randomWord = this.engWordService.randomWord(englishWordArray);
  }

  public addWordStar(): void {
    let wordStageObj = {
      word: this.englishWordList[0].word,
      meaning: this.wordMeaning,
      audio: this.wordVoice,
      translate: this.translate,
    };
    if (this.addStar === 'white') {
      this.wordStageArray.push(wordStageObj);
      localStorage.setItem('wordStage', JSON.stringify(this.wordStageArray));
      this.addStar = 'yellow';
    } else {
      this.wordStageArray = this.wordStageArray.filter(
        (item: WordTableStage) => item.word !== this.englishWordList[0].word
      );
      console.log('add star white');
      console.log('word stage', this.wordStageArray);
      this.addStar = 'white';
    }
    console.log('word stage', this.wordStageArray);
  }

  ngOnDestroy(): void {
    this.englishWordStream.unsubscribe();
  }
}
