import { getButtonText } from "../components/add-remove-city";
import { getSelectedStyle } from "../components/city-list-item";
import { cityInList } from "../Home";

describe("getButtonText", () => {
    test("should return 'Remove' for 'yes'", () => {
        const inList: string = "yes";
        expect(getButtonText(inList)).toEqual("Remove");
    });
    test("should return 'Add' for 'no'", () => {
        const inList: string = "no";
        expect(getButtonText(inList)).toEqual("Add");
    });
    test("should return an empty string for empty string", () => {
        const inList: string = "";
        expect(getButtonText(inList)).toEqual("");
    });
});

describe("getSelectedStyle", () => {
    test("should return 'bg-success text-white' for 'true'", () => {
        const selected: boolean = true;
        expect(getSelectedStyle(selected)).toEqual("bg-success text-white");
    });
    test("should return 'bg-light' for 'false'", () => {
        const selected: boolean = false;
        expect(getSelectedStyle(selected)).toEqual("bg-light");
    });
});

describe("cityInList", () => {
    const list: string[] = ["a","b","c"];
    test("should return an empty string for empty city name", () => {
        const cityName: string = "";      
        expect(cityInList(cityName, list)).toEqual("");
    });
    test("should return 'yes' for existed city", () => {
        const cityName: string = "A"; 
        expect(cityInList(cityName, list)).toEqual("yes");
    });
    test("should return 'no' for non-existed city", () => {
        const cityName: string = "D"; 
        expect(cityInList(cityName, list)).toEqual("no");
    });
});

