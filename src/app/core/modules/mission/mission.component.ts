import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { WordTableStage } from '../../modal/wordTableStage';
import { MatTableDataSource } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
})
export class MissionComponent implements OnInit, AfterViewInit {
  public wordTabeData: WordTableStage[] = [];

  displayedColumns: string[] = ['word', 'meaning', 'audio', 'translate'];
  dataSource: any = new MatTableDataSource(this.wordTabeData);

  constructor() {}

  ngOnInit(): void {
    console.log('mission');
  }

  ngAfterViewInit(): void {
    this.getWordToLocalStorage();
    this.dataSource = new MatTableDataSource(this.wordTabeData);
  }

  public getWordToLocalStorage(): void {
    const wordData = localStorage.getItem('wordStage');
    console.log('wordData get loca', wordData);
    if (wordData) {
      this.wordTabeData = JSON.parse(wordData);
      this.dataSource = new MatTableDataSource(this.wordTabeData);
    } else {
      this.wordTabeData = [...this.wordTabeData];
    }
  }

  public dataRowClick(row: any): void {
    console.log('row', row);
  }

  public playAudio(audio: string): void {
    console.log('audio', audio);
    const audioPlay = new Audio(audio);
    audioPlay.play();
  }
}
