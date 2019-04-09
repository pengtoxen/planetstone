<template>
  <div>
    <swiper
      :list="photoList"
      :show-dots="showDots"
      :show-desc-mask="showDescMask"
      :auto="auto"
      :loop="loop"
      :height="height"
    >
      <!-- <swiper-item v-for="(item, index) in photoList" :key="index">
        <img :src="item.img" tag="img"/>
      </swiper-item>-->
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "vux";
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  props: {
    photoList: {
      type: Array,
      default: []
    },
    showDots: {
      type: Boolean,
      default: true
    },
    showDescMask: {
      type: Boolean,
      default: true
    },
    auto: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: "200px"
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
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

