<template>
  <div>
    <!-- <transition mode="out-in">
      <router-view></router-view>
    </transition>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AppMain"
};
</script>
<style lang="scss" scoped>
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

