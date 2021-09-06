import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';
import { DictionaryService } from '../dictionary.service';
import { GlobalSettingsService } from '../global-settings.service';
import { IWord } from '../interfaces';
import { FormControl } from '@angular/forms'


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  answer = new FormControl('');

  randomWord: IWord;
  wordsCount: number = -1;
  fromLang: string;
  toLang: string;
  timeLeft: number;
  finished: boolean = false;

  constructor(private dictionaryService: DictionaryService, private settingsService: GlobalSettingsService) {
    this.fromLang = settingsService.fromLanguage;
    this.toLang = settingsService.toLanguage;
  }

  ngOnInit(): void { }

  check() {
    if (this.answer.value != '') {
      if (this.randomWord[this.toLang] === this.answer.value.toLowerCase()) {
        this.nextWord();
        this.answer.reset();
      }
      else
        this.answer.setErrors({ 'incorrect': true });
    }
  }

  nextWord() {
    if (this.wordsCount !== 1) {
      this.wordsCount = this.wordsCount - 1;
      this.randomWord = this.dictionaryService.getDictionary()[this.wordsCount - 1];
    }
    else {
      this.wordsCount = 0;
    }
  }

  start() {
    let dictionarySize = this.dictionaryService.getWordsCount();
    let settingsWordsCount = this.settingsService.currentWordsCount;
    this.wordsCount = (dictionarySize > settingsWordsCount) ? settingsWordsCount : dictionarySize;
    this.randomWord = this.dictionaryService.getDictionary()[this.wordsCount - 1];
    this.timeLeft = this.settingsService.currentTime * 60;
    this.finished = false;

    this.startTimer();
  }

  startTimer() {
    timer(1000, 1000)
      .pipe(
        takeWhile(() => (this.timeLeft > 0)),
        tap(() => {
          this.timeLeft--;
          if (this.wordsCount === 0)
            this.timeLeft = 0;
        })
      )
      .subscribe({
        complete: () => {
          if (this.wordsCount != 0)
            this.finished = true;
        }
      });
  }
}