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

  constructor(public settingsService: GlobalSettingsService) {
  }

  ngOnInit(): void {
  }

  onLangChange(e) {
    this.settingsService.setCurrentLanguage(e.target.value);
  }
  onWordsCountChange(e) {
    this.settingsService.setCurrentWordCount(e.target.value);
  }
  onTimeChange(e) {
    this.settingsService.setCurrentTime(e.target.value);
  }
}