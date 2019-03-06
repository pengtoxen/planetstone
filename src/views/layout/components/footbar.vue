<template>
  <section>
    <van-tabbar v-model="active" fixed="fixed" :active-color="color">
      <!-- <van-tabbar-item
        :icon="item.icon"
        v-for="(item,index) in tabs"
        :key="index"
        :id="item.id"
        :url="item.target"
      >{{item.name}}<svg-icon icon-class="pay"/></van-tabbar-item>-->
      <van-tabbar-item
        v-for="(item,index) in tabs"
        :key="index"
        :id="item.id"
        :url="item.target"
        class="tab-icon-list"
      >
        <div class="tab-icon-item">
          <div class="tab-icon">
            <svg-icon :icon-class="item.icon"/>
          </div>
          <span class="tab-icon-name">{{item.name}}</span>
        </div>
      </van-tabbar-item>
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
      color: "#01CEAD",
      tabs: [
        {
          name: "首页",
          icon: "home",
          target: ""
        },
        {
          name: "商品",
          icon: "goods",
          target: ""
        },
        {
          name: "发现",
          icon: "explore",
          target: ""
        },
        {
          name: "购物车",
          icon: "cart",
          target: ""
        },
        {
          name: "我的",
          icon: "profile",
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
          this.$router.push("/icons");
          break;
        case 3:
          this.$router.push("/center");
          break;
        case 4:
          this.$router.push("/center");
          break;
      }
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.tab-icon-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #5f5f5f;
  margin-bottom: 0.6rem;
  .tab-icon-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .tab-icon {
      font-size: 2.2rem;
    }
    .tab-icon-name {
      font-size: 1.17rem;
    }
  }
}
.van-tabbar-item--active {
  color: rgb(1, 206, 173) !important;
}
</style>

