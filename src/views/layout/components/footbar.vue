<template>
  <section>
    <van-tabbar v-model="active" fixed="fixed" active-color="color">
      <van-tabbar-item
        :icon="item.icon"
        v-for="(item,index) in tabs"
        :key="index"
        :id="item.id"
        :url="item.target"
      >{{item.name}}</van-tabbar-item>
    </van-tabbar>
  </section>
</template>

<script>
export default {
  name: "Footbar",
  data() {
    return {
      active: 0,
      fixed: true,
      color: "red",
      tabs: [
        {
          name: "首页",
          icon: "wap-home",
          target: ""
        },
        {
          name: "分类",
          icon: "cart-o",
          target: ""
        },
        {
          name: "购物车",
          icon: "cart-o",
          target: ""
        },
        {
          name: "我的",
          icon: "user-o",
          target: ""
        }
      ]
    };
  },
  methods: {},
  watch: {
    active: function(newVal, oldVal) {
      switch (newVal) {
        case 0:
          this.$router.push("/home");
          break;
        case 1:
          this.$router.push("/goodslist");
          break;
        case 2:
          this.$router.push("/goodslist");
          break;
        case 3:
          this.$router.push("/center");
          break;
      }
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.mint-tabbar {
  height: 50px;
  a {
    color: grey;
  }
  .mint-tab-item.is-selected {
    background-color: #fff;
    color: red;
  }
}
.footbar-tab-icon {
  font-size: 24px !important;
  margin-top: 0px;
}
.mint-tab-item-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto 0px;
}
</style>

