import { TestBed } from '@angular/core/testing';
import { DictionaryService } from './dictionary.service';

import { GlobalSettingsService } from './global-settings.service';

describe('GlobalSettingsService', () => {
  let service: GlobalSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('setWordsForExcercise', () => {
  let settingsService: GlobalSettingsService;

  it('should return currentWordsCount=5 if dictionary has less than 10 words', () => {
    settingsService = new GlobalSettingsService(new DictionaryService());
    expect(settingsService.currentWordsCount).toBe(5);
  });
  it('should return currentWordsCount=10 if dictionary has more than 10 words and less than 70', () => {
    const fakeDictionarySize = { getWordsCount: () => 25 };
    settingsService = new GlobalSettingsService(fakeDictionarySize as DictionaryService);
    expect(settingsService.currentWordsCount).toBe(10);
  });
  it('should return currentWordsCount=20 if dictionary has more than 70', () => {
    const fakeDictionarySize = { getWordsCount: () => 85 };
    settingsService = new GlobalSettingsService(fakeDictionarySize as DictionaryService);
    expect(settingsService.currentWordsCount).toBe(20);
  });
});