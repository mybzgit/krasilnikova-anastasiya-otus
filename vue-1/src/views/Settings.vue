<template>
  <div class="settings">
    <div class="row">
      <div class="col"><Operations /></div>
      <div class="col"><Digits /></div>
    </div>
    <div class="row">
      <div class="col"><Complexity /></div>
      <div class="col"><Time /></div>
    </div>
  </div>
</template>

<script>
import Operations from "../components/Operations.vue";
import Digits from "../components/Digits.vue";
import Complexity from "../components/Complexity.vue";
import Time from "../components/Time.vue";

export default {
  name: "Settings",
  components: { Operations, Complexity, Time, Digits },
};
</script>

<style src="../styles/settings.css"></style>