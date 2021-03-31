"use strict";

const maxItemAssociation = (purchaseHistory) => {
    const makeArrUnique = (arr) => {
        return [...new Set(arr)].sort();
    };
    const compareArrLex = (arr1, arr2) => {
        let str1 = arr1.join('');
        let str2 = arr2.join('');
        return str1 < str2;
    };

    let statistics = new Map();
    for (let customerHistory of purchaseHistory) {
        for (let productName of customerHistory) {

            let existedProduct = statistics.get(productName);
            if (existedProduct === undefined) 
                statistics.set(productName, customerHistory);
            else {
                let productHistory = makeArrUnique([...existedProduct, ...customerHistory]);
                statistics.set(productName, productHistory);
            }
        }
    }

    let maxHistory = [];
    for (let history of statistics.values()) {
        if (history.length > maxHistory.length)
            maxHistory = history;
        if (history.length == maxHistory.length) {
            if (compareArrLex(history, maxHistory))
                maxHistory = history;
        }
    }
    return maxHistory;
};

const testResult = (history) => {
    console.log("Input array:");
    console.log(history);
    console.log("Result:");
    console.log(maxItemAssociation(history));
};

let history1 = [["a", "b"], ["a", "c"], ["d", "e"]];
let history2 = [["a", "b"], ["a", "c"], ["d", "e"], ["d", "c"]];
let history3 = [["d", "e"], ["d", "c"], ["a", "b"], ["a", "c"]];

testResult(history1);
testResult(history2);
testResult(history3);
