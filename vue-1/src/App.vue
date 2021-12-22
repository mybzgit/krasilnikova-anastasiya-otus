<template>
  <div class="navigation">
    <router-link active-class="active-link" to="/">Main</router-link>
    <router-link active-class="active-link" to="/settings">Settings</router-link>
    <router-link active-class="active-link" to="/play">Let's play</router-link>
  </div>
  <div class="main-view">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style src="../src/styles/app.css"></style>