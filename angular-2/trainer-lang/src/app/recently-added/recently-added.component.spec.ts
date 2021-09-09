import { async, TestBed } from '@angular/core/testing';
import { AddWordService } from '../add-word.service';
import { DictionaryService } from '../dictionary.service';
import { GlobalSettingsService } from '../global-settings.service';

import { RecentlyAddedComponent } from './recently-added.component';

describe('RecentlyAddedComponent', () => {
  let component: RecentlyAddedComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyAddedComponent ],
      providers: [AddWordService, DictionaryService, GlobalSettingsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    let addWordServiceSpy = jasmine.createSpyObj('AddWordService', ['executeTranslation']);
    let dictionaryService = new DictionaryService();

    component = new RecentlyAddedComponent(addWordServiceSpy as AddWordService, dictionaryService , new GlobalSettingsService(dictionaryService));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
