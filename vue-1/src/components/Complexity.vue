<template>
  <h3>Complexity Level:</h3>
  <select v-model="complexityLevel">
    <option value="5">5 tasks</option>
    <option value="10">10 tasks</option>
    <option value="20">20 tasks</option>
  </select>
</template>

<script>
export default {
  name: "Complexity",
  components: {},
  data: function () {
    return {
      complexityLevel: this.$store.state.complexityLevel,
    };
  },
  watch: {
    complexityLevel: function (newValue) {
      this.$store.commit("changeComplexity", newValue);
    },
  }
};
</script>