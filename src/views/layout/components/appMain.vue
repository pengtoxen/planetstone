<template>
  <section class="app-main">
    <!-- <transition mode="out-in">
      <router-view></router-view>
    </transition>-->
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: "AppMain"
};
</script>
<style lang="scss" scoped>
.app-main {
  min-height: 100%;
  // background-color: #efeff4;
  background-color: #fff;
  padding-bottom: 50px;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  // position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
</style>

