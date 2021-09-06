import { Injectable } from '@angular/core';
import { DictionaryService } from './dictionary.service';
import { IWord } from './interfaces';
import { TranstalorService } from './transtalor.service';

interface ITranslateResult {
  responseData: {
    translatedText: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AddWordService {

  constructor(private dictionaryService: DictionaryService, private translatorService: TranstalorService) { }

  executeTranslation(inputString: string, from: string, to: string) {
    for (const word of [...inputString.split(' ')]) {
      if(!this.dictionaryService.exists(word, from)){
      let newWord: IWord = {} as IWord;
      this.translatorService.translate(word.toLowerCase(), from, to)
        .subscribe((result: ITranslateResult) => {
          newWord[from] = word.toLowerCase();
          newWord[to] = result.responseData.translatedText.toLowerCase();
          this.dictionaryService.addWord(newWord);
        });
      }
    }
  }
}