<template>
  <div class="statistics">
    <div class="title">Statistics:</div>
    <div class="table">
      <div class="header row">
        <div class="col">Expected:</div>
        <div class="col">Done:</div>
        <div class="col">Time:</div>
      </div>
      <div class="list">
        <div class="row" v-for="(item, index) in statistics" v-bind:key="index">
          <div class="col">{{ item.expected }}</div>
          <div class="col">{{ item.done }}</div>
          <div class="col">{{ item.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statistics",
  components: {},
  data: function () {
    return {
      statistics: this.$store.state.statistics,
    };
  },
};
</script>

<style src="../styles/statistics.css"></style>
