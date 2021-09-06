import { AddWordService } from './add-word.service';
import { DictionaryService } from './dictionary.service';
import { TranstalorService } from './transtalor.service';

describe('AddWordService', () => {
  let service: AddWordService;
  let httpClientSpy: { get: jasmine.Spy };
  let dictionaryServiceSpy: jasmine.SpyObj<DictionaryService>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    let translatorService = new TranstalorService(httpClientSpy as any);
    service = new AddWordService(dictionaryServiceSpy, translatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
