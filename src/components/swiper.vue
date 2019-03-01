<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in settingData.$photoList" :key="index">
        <router-link
          :v-lazy="item.img"
          :src="item.img"
          :class="{'full':settingData.$isFull}"
          tag="img"
          to="item.target"
        ></router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settingData: {
        $photoList: this.photoList ? this.photoList : [],
        $isFull: this.isFull ? this.isFull : true
      }
    };
  },
  created() {},
  methods: {},
  props: ["photoList", "isFull"]
};
</script>

<style lang="scss" scoped>
.van-swipe {
  text-align: center;
  height: 200px;
  .van-swipe-item {
    &:nth-child(1) {
      background-color: transparent;
    }
    &:nth-child(2) {
      background-color: transparent;
    }
    &:nth-child(3) {
      background-color: transparent;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.full {
  width: 100%;
}
</style>

