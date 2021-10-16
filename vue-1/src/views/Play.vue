<template>
  <button v-if="!show" type="button" v-on:click="start" class="start-button">Start</button>
  <div v-if="show">
    <p class="expression">{{ expression }}</p>
    <input type="text" placeholder="Type answer..." v-model="answer" ref="answer_input" />
    <button type="button" v-on:click="nextStep">Next</button>
    <br />
  </div>
  <p class="time">{{ formattedTime }}</p>
</template>

<script>
import { formatTime, generateExpression, checkResult } from "../helpers/helper";

export default {
  name: "Play",
  components: {},
  data: function () {
    return {
      expression: "",
      answer: "",
      show: false,
      timeLeft: 0,
      timer: null,
      doneTasks: 0,
      expected: 0,
    };
  },
  computed: {
    formattedTime() {
      return formatTime(this.timeLeft);
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.timer !== null) {
      if (confirm("Are you sure to leave this page? Your progress will be lost.")) {
        clearInterval(this.timer);
        next();
      }
    } else next();
  },
  methods: {
    start() {
      this.expression = generateExpression(
        this.$store.state.selectedOperations,
        this.$store.state.digits
      );
      this.timeLeft = this.$store.state.time * 60;
      this.doneTasks = 0;
      this.expected = this.$store.state.complexityLevel;
      this.show = true;
      this.startTimer();
    },
    nextStep() {
      if (checkResult(this.expression, this.answer)) {
        this.expression = generateExpression(
          this.$store.state.selectedOperations,
          this.$store.state.digits
        );
        this.answer = "";
        this.$refs.answer_input.focus();
        this.doneTasks++;
      } else {
        alert("Try one more time!");
        this.answer = "";
        this.$refs.answer_input.focus();
      }
    },
    startTimer: function () {
      let that = this;
      that.timer = setInterval(function () {
        if (that.timeLeft === 0 || that.doneTasks === that.expected) {
          clearInterval(that.timer);
          that.$store.commit("addResultToStatistics", {
            expected: that.expected,
            done: that.doneTasks,
            time: formatTime(that.$store.state.time * 60 - that.timeLeft),
          });
          that.show = false;
          alert("Times up!");
        } else that.timeLeft--;
      }, 1000);
    },
  },
};
</script>

<style src="../styles/play.css"></style>
