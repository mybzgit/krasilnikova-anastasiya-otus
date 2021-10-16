<template>
  <h3>Numbers:</h3>
  <select v-model="digits">
    <option value="1">digit (0)</option>
    <option value="2">two-digit (00)</option>
    <option value="3">tree-digit (000)</option>
  </select>
</template>

<script>
export default {
  name: "Digits",
  components: {},
  data: function () {
    return {
      digits: this.$store.state.digits,
    };
  },
  watch: {
    digits: function (newValue) {
      this.$store.commit("changeDigits", newValue);
    },
  },
  methods: {},
};
</script>