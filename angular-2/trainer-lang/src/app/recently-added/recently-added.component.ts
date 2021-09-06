import { Component, OnInit } from '@angular/core';
import { AddWordService } from '../add-word.service';
import { DictionaryService } from '../dictionary.service';
import { GlobalSettingsService } from '../global-settings.service';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})
export class RecentlyAddedComponent implements OnInit {

  words: string[] = [];
  fromLang: string;
  toLang: string;
  searchString: string;

  constructor(private addWordService: AddWordService,
    public dictionaryService: DictionaryService,
    private settingsService: GlobalSettingsService) {
    this.fromLang = settingsService.fromLanguage;
    this.toLang = settingsService.toLanguage;
  }

  ngOnInit(): void {
  }

  add() {
    if (this.searchString != "") {
      this.addWordService.executeTranslation(this.searchString, this.fromLang, this.toLang);
      this.searchString = "";
    }
  }
}