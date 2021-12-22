<template>
  <h3>Time:</h3>
  <select v-model="time">
    <option value="5">5 minutes</option>
    <option value="3">3 minutes</option>
    <option value="1">1 minute</option>
  </select>
</template>

<script>
export default {
  name: "Time",
  components: {},
  data: function () {
    return {
      time: this.$store.state.time,
    };
  },
  watch: {
    time: function (newValue) {
      this.$store.commit("changeTime", newValue);
    },
  },
};
</script>
