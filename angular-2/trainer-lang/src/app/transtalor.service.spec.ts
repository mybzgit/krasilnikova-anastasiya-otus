import { TranstalorService } from './transtalor.service';

describe('TranstalorService', () => {
  let service: TranstalorService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TranstalorService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
