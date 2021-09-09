import { Component, OnInit } from '@angular/core';
import { GlobalSettingsService } from '../global-settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  wordsCount: number[] = [];
  languages: string[] = [];

  constructor(public settingsService: GlobalSettingsService) {}

  ngOnInit(): void {}

  onLangChange(e) {
    this.settingsService.currentLanguage = e.target.value;
  }
  onWordsCountChange(e) {
    this.settingsService.currentWordsCount = e.target.value;
  }
  onTimeChange(e) {
    this.settingsService.currentTime = e.target.value;
  }
}