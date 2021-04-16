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
    let products = makeArrUnique(purchaseHistory.flat());
    products.forEach((productName) => {
        let tempHistory = purchaseHistory.filter(customerHistory => customerHistory.includes(productName));
        let productHistory = makeArrUnique(tempHistory.flat());
        statistics.set(productName, productHistory);
    });

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