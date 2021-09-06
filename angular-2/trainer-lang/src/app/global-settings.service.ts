import { Injectable } from '@angular/core';
import { DictionaryService } from './dictionary.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalSettingsService {

  private _languages: string[] = ["ru-en", "en-ru"];
  private _currentLang: string = "ru-en";
  private _wordsCount: number[] = [];
  private _currentWordsCount: number;
  private _timeValues: number[] = [1, 2, 5];
  private _currentTime: number = 1;

  constructor(private dictionaryService: DictionaryService) {
    this.setWordsForExcercise();
  }

  get languages(): string[] {
    return this._languages;
  }
  get fromLanguage(): string {
    return this.currentLanguage.split('-')[0];
  }
  get toLanguage(): string {
    return this.currentLanguage.split('-')[1];
  }

  get currentLanguage(): string {
    return this._currentLang;
  }
  set currentLanguage(lang: string) {
    this._currentLang = lang;
  }
  
  get wordsCount(): number[] {
    return this._wordsCount;
  }
  get currentWordsCount(): number {
    return this._currentWordsCount;
  }
  set currentWordsCount(count: number) {
    this._currentWordsCount = +count;
  }

  get timeValues(): number[] {
    return this._timeValues;
  }
  get currentTime(): number {
    return this._currentTime;
  }
  set currentTime(time: number) {
    this._currentTime = +time;
  }

  private setWordsForExcercise() {
    let dictionarySize = this.dictionaryService.getWordsCount();
    if (dictionarySize > 0) {
      if (dictionarySize < 10) {
        this._wordsCount.push(5);
        this._currentWordsCount = 5;
      }
      if (dictionarySize >= 10 && dictionarySize < 70) {
        for (let i = 10; i <= dictionarySize; i = i + 10)
          this._wordsCount.push(i);
        this._currentWordsCount = 10;
      }
      if (dictionarySize >= 70) {
        for (let i = 20; i <= dictionarySize; i = i + 20)
          this._wordsCount.push(i);
        this._currentWordsCount = 20;
      }
    }
  }
}