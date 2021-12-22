<template>
  <h3>Operations:</h3>
  <div class="operations">
    <input type="checkbox" id="addition" value="+" v-model="checkedOperations" />
    <label for="addition">(+)</label><br />

    <input type="checkbox" id="substaction" value="-" v-model="checkedOperations" />
    <label for="substaction">(-)</label><br />

    <input type="checkbox" id="division" value="/" v-model="checkedOperations" />
    <label for="division">(/)</label><br />

    <input type="checkbox" id="multiplication" value="*" v-model="checkedOperations" />
    <label for="multiplication">(*)</label><br />
  </div>
</template>

<script>
export default {
  name: "Operations",
  components: {},
  data: function () {
    return {
      checkedOperations: this.$store.state.selectedOperations,
    };
  },
  watch: {
    checkedOperations: function (newValue) {
      this.$store.commit("addOperation", newValue);
    },
  },
};
</script>

<style>
.operations {
  display: inline-flex;
}
label {
  margin-right: 10px;
}
</style>
