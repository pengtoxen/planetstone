<template>
  <div class="app-wrapper">
    <headbar class="headbar-container"></headbar>
    <div class="main-container">
      <app-main></app-main>
    </div>
    <footbar class="footbar-container"></footbar>
  </div>
</template>

<script>
import { Headbar, AppMain, Footbar } from "./components/index";

export default {
  name: "Layout",
  components: {
    Headbar,
    AppMain,
    Footbar
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
