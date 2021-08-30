import { Injectable } from '@angular/core';
import { IWord } from '../app/interfaces';

@Injectable({
  providedIn: 'root'
})

export class DictionaryService {

  private _words: IWord[] = [];

  constructor() {
    this.initializeDictionary();
  }

  getDictionary(): IWord[] {
    return this._words;
  }
  getWordsCount(): number {
    return this._words.length;
  }
  addWord(word: IWord) {
    this._words.push(word);
    let result: string[] = [];
    for (const word of this._words) {
      result.push(JSON.stringify(word));
    }
    localStorage.setItem("dict", result.join(';'));
  }
  exists(word: string, from: string): boolean {
    return this._words.findIndex(w => w[from] === word.toLowerCase()) > -1;
  }

  private initializeDictionary() {
    if (localStorage.getItem("dict") != null) {
      let items: string[] = localStorage.getItem("dict").split(';');
      for (const item of items) {
        this._words.push(JSON.parse(item));
      }
    }
    else {
      this._words.push({ ru: "привет", en: "hello" });
      this._words.push({ ru: "мой", en: "my" });
      this._words.push({ ru: "друг", en: "friend" });
    }
  }
}