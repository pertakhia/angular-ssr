import { EverydayService } from './../../services/everyday.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-topword',
  templateUrl: './topword.component.html',
  styleUrls: ['./topword.component.scss'],
})
export class TopwordComponent implements OnInit {
  topWordArray: any = [
    {
      word: 'Hello',
      meaning:
        'Xin chào  asd asd asdas asdad asd asd as da sd a sd asd a sd a sd as da sd as d as ssssssdsd  sdsdsasdaaaaaaaaaaaa',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      word: 'Hello',
      meaning: 'Xin chào',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
  ];

  displayedColumns: string[] = ['word', 'meaning', 'audio'];
  dataSource: any = new MatTableDataSource(this.topWordArray);

  constructor(private autoService: EverydayService) {}

  ngOnInit(): void {
    console.log(
      'topword',
      this.autoService.autoWordChange(),
      this.autoService.setTimerOneDay()
    );
  }

  public playAudio(audio: any): void {
    const audioPlayer = new Audio(audio);
    audioPlayer.play();
  }
}
