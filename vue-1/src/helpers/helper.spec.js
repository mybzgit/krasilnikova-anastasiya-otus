import { formatTime, checkResult } from '../helpers/helper'

describe("formatTime", () => {
    test("should return '00:20' for 20s", () => {
        expect(formatTime(20)).toBe("00:20");
    });
    test("should return '01:05' for 65s", () => {
        expect(formatTime(65)).toBe("01:05");
    });
    test("should return '11:37' for 697s", () => {
        expect(formatTime(697)).toBe("11:37");
    });
    test("should return '00:00' for 0s", () => {
        expect(formatTime(0)).toBe("00:00");
    });
});

describe("checkResult", () => {
    test("should return 'true' for '5+5=10'", () => {
        let expression = "5+5";
        let answer = "10";
        expect(checkResult(expression, answer)).toBeTruthy();
    });
    test("should return 'false' for '5+5=15'", () => {
        let expression = "5+5";
        let answer = "15";
        expect(checkResult(expression, answer)).toBeFalsy();
    });
    test("should return 'true' for '5/3=1.6'", () => {
        let expression = "5/3";
        let answer = "1.7";
        expect(checkResult(expression, answer)).toBeTruthy();
    });
    test("should return 'false' for '10*0=1'", () => {
        let expression = "10*0";
        let answer = "1";
        expect(checkResult(expression, answer)).toBeFalsy();
    });
});