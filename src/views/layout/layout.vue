<template>
  <div class="app-wrapper">
    <headbar class="headbar-container"></headbar>
    <div class="main-container">
      <app-main></app-main>
    </div>
    <footbar v-if="footTabOne" class="footbar-container"></footbar>
    <footbar v-else-if="footTabTwo"></footbar>
    <footbar v-else-if="footTabThree"></footbar>
  </div>
</template>

<script>
import { Headbar, AppMain, Footbar } from "./components/index";

export default {
  name: "Layout",
  data() {
    return {
      footTabOne: false,
      footTabTwo: false,
      footTabThree: false
    };
  },
  created() {
    let footTab = this.$route.meta.footTab;
    if (footTab == "footTabOne") {
      this.footTabOne = true;
    } else if (footTab == "footTabTwo") {
      this.footTabTwo = true;
    } else if (footTab == "footTabThree") {
      this.footTabThree = true;
    }
  },
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
