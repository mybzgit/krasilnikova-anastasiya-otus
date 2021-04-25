const { test, expect } = require("@jest/globals");
const { getCurrentElementName, getNthChild, getPath } = require("./javascript-2");

document.body.className = "my-body-class test-class";
document.body.innerHTML = `<p></p>
                           <p></p>
                           <ul id="list">
                                <li class="li-class">item1</li>
                                <li class="li-class">item2</li>
                                <li class="li-class">item3</li>
                                <li class="li-class">item4</li>
                           </ul>
                           <p></p>
                           <div id="d">
                                <p id="par">paragraph</p>
                           </div>
                           <p></p>
                           <p></p>
                           <ul id="list">
                                <li class="li-class">item1</li>
                                <li class="li-class">item2</li>
                                <li class="li-class">item3</li>
                                <li class="li-class">item4</li>
                            </ul>
                            <div id="d">
                                 <p>paragraph</p>
                            </div>`;

describe("getNthChild", () => {
    test("should return ':first-child' selector for the first <li>", () => {
        const firstLI = document.querySelector("li.li-class:first-child");
        expect(getNthChild(firstLI)).toBe(":first-child");
    });
    test("should return ':last-child' selector for the last <li>", () => {
        const firstLI = document.querySelector("li.li-class:last-child");
        expect(getNthChild(firstLI)).toBe(":last-child");
    });
    test("should return ':nth-of-type(3)' for the third <li>", () => {
        const thirdLI = document.querySelector("li.li-class:nth-of-type(3)");
        expect(getNthChild(thirdLI)).toBe(":nth-of-type(3)");
    });
    test("should return an empty string for the <p>", () => {
        const p = document.querySelector("#d #par");
        expect(getNthChild(p)).toBe("");
    });
});

describe("getCurrentElementName", () => {
    test("should return 'li.li-class' for the first <li>", () => {
        const firstLI = document.querySelector("li.li-class:first-child");
        expect(getCurrentElementName(firstLI)).toBe("li.li-class");
    });
    test("should return 'p#par' for the <p>", () => {
        const p = document.querySelector("#d #par");
        expect(getCurrentElementName(p)).toBe("p#par");
    });
});

describe("getPath", () => {
    test("should return the unique selector for the second <li>", () => {
        const secondLI = document.querySelector("ul#list:nth-of-type(2) li.li-class:nth-of-type(2)");
        const result = document.querySelectorAll(getPath(secondLI));
        expect(result.length).toBe(1);
        expect(result[0]).toStrictEqual(secondLI);
    });
    test("should return the unique selector for <p>", () => {
        const p = document.querySelector("#par");
        const result = document.querySelectorAll(getPath(p));
        expect(result.length).toBe(1);
        expect(result[0]).toStrictEqual(p);
    });
});


