import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            selectedOperations: ["+"],
            digits: 1,
            complexityLevel: 5,
            time: 5,
            statistics: [{ expected: 5, done: 4, time: "01:14" }, { expected: 10, done: 7, time: "03:45" }, { expected: 20, done: 20, time: "00:35" }]
        }
    },
    mutations: {
        addOperation(state, operations) {
            state.selectedOperations = operations;
        },
        changeDigits(state, digits) {
            state.digits = parseInt(digits);
        },
        changeComplexity(state, level) {
            state.complexityLevel = parseInt(level);
        },
        changeTime(state, time) {
            state.time = parseInt(time);
        },
        addResultToStatistics(state, result) {
            state.statistics.push(result);
        }
    }
});

export default store;