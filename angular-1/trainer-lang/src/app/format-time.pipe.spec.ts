import { FormatTimePipe } from './format-time.pipe';

describe('FormatTimePipe', () => {
  it('create an instance', () => {
    const pipe = new FormatTimePipe();
    expect(pipe).toBeTruthy();
  });
});

describe("transform", () => {
  it("should return '2:00' for 120 seconds", () => {
    const pipe = new FormatTimePipe();
    const seconds: number = 120;
    expect(pipe.transform(seconds)).toEqual("2:00");
  });
  it("should return '1:55' for 115 seconds", () => {
    const pipe = new FormatTimePipe();
    const seconds: number = 115;
    expect(pipe.transform(seconds)).toEqual("1:55");
  });
  it("should return '00:15' for 15 seconds", () => {
    const pipe = new FormatTimePipe();
    const seconds: number = 15;
    expect(pipe.transform(seconds)).toEqual("00:15");
  });
  it("should return '00:05' for 5 seconds", () => {
    const pipe = new FormatTimePipe();
    const seconds: number = 5;
    expect(pipe.transform(seconds)).toEqual("00:05");
  });
});