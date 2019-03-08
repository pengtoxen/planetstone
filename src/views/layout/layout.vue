<template>
  <div class="app-wrapper">
    <headbar v-if="headTabOne" class="headbar-container"></headbar>
    <headbar v-else-if="headTabTwo"></headbar>
    <headbar v-else-if="headTabThree"></headbar>
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
      footTabThree: false,
      headTabOne: false,
      headTabTwo: false,
      headTabThree: false
    };
  },
  methods: {
    renderTabBar() {
      let footTab = this.$route.meta.footTab;
      if (footTab == "footTabOne") {
        this.footTabOne = true;
      } else if (footTab == "footTabTwo") {
        this.footTabTwo = true;
      } else if (footTab == "footTabThree") {
        this.footTabThree = true;
      } else {
        this.footTabOne = this.footTabTwo = this.footTabThree = false;
      }
      let headTab = this.$route.meta.headTab;
      if (headTab == "headTabOne") {
        this.headTabOne = true;
      } else if (headTab == "headTabTwo") {
        this.headTabTwo = true;
      } else if (headTab == "headTabThree") {
        this.headTabThree = true;
      } else {
        this.headTabOne = this.headTabTwo = this.headTabThree = false;
      }
      console.log(footTab);
    }
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
    let headTab = this.$route.meta.headTab;
    if (headTab == "headTabOne") {
      this.headTabOne = true;
    } else if (headTab == "headTabTwo") {
      this.headTabTwo = true;
    } else if (headTab == "headTabThree") {
      this.headTabThree = true;
    }
  },
  watch: {
    $route: "renderTabBar"
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
