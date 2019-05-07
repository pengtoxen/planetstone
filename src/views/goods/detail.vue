<template>
  <div class="container">
    <swiper :photoList="sliderList" :height="'auto'"></swiper>
    <div class="content">
      <div class="goods-title-section">
        <div class="goods-title">星球石业高端橱柜</div>
        <div class="goods-real-price">¥ 2072.00</div>
        <div class="goods-sell-price">
          价格
          <span>¥ 3596.00</span>
        </div>
      </div>
      <div class="services-list">
        <div class="services-item" v-for="(item, index) in servicesList" :key="index">
          <svg-icon icon-class="round_check"/>
          {{item.title}}
        </div>
        <div class="services-item" @click="gotoService()">
          <svg-icon icon-class="right"/>
        </div>
      </div>
      <div class="goods-spec-section">
        <div class="goods-spec">
          <div class="goods-spec-name">
            <span class="spec">规格</span>
            <span class="spec-desc">餐边柜 [蓝色+可储物] </span>
          </div>
          <div class="goods-spec-arrow" @click="pickAttr()">
            <svg-icon icon-class="right"/>
          </div>
        </div>
      </div>
      <div class="goods-detail-section">
        <div class="goods-tab">
          <div class="goods-detail-tab">
            <div class="goods-detail-tab-1">图文详情</div>
            <div class="goods-detail-tab-2">产品参数</div>
          </div>
        </div>
        <div class="goods-detail">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206239582&di=1744a9ca5949f69662ca8b70b3007550&imgtype=0&src=http%3A%2F%2Fimg1n.soufunimg.com%2Fviewimage%2Fjiancai%2Fbusiness%2Fto8to%2F201508%2F21%2F88%2F66514629709c4a2cf74817fde6d9f663%2F432x324c.jpg"
            alt
          >
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206239582&di=1744a9ca5949f69662ca8b70b3007550&imgtype=0&src=http%3A%2F%2Fimg1n.soufunimg.com%2Fviewimage%2Fjiancai%2Fbusiness%2Fto8to%2F201508%2F21%2F88%2F66514629709c4a2cf74817fde6d9f663%2F432x324c.jpg"
            alt
          >
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206239582&di=1744a9ca5949f69662ca8b70b3007550&imgtype=0&src=http%3A%2F%2Fimg1n.soufunimg.com%2Fviewimage%2Fjiancai%2Fbusiness%2Fto8to%2F201508%2F21%2F88%2F66514629709c4a2cf74817fde6d9f663%2F432x324c.jpg"
            alt
          >
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206239582&di=1744a9ca5949f69662ca8b70b3007550&imgtype=0&src=http%3A%2F%2Fimg1n.soufunimg.com%2Fviewimage%2Fjiancai%2Fbusiness%2Fto8to%2F201508%2F21%2F88%2F66514629709c4a2cf74817fde6d9f663%2F432x324c.jpg"
            alt
          >
        </div>
      </div>
    </div>
    <div class="foot-tab">
      <div class="tab-section" @click="gotoHome()">
        <div class="section-item">
          <svg-icon icon-class="home"/>
          <span class="name">首页</span>
        </div>
      </div>
      <div class="tab-section" @click="gotoLists()">
        <div class="section-item">
          <svg-icon icon-class="goods"/>
          <span class="name">商品</span>
        </div>
      </div>
      <div class="tab-section" @click="gotoCollect()">
        <div class="section-item">
          <svg-icon icon-class="favor"/>
          <span class="name">收藏</span>
        </div>
      </div>
      <div class="tab-section" @click="phoneCall('13058898058')">
        <div class="contact">立即联系</div>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "@/components/swiper.vue";
export default {
  data() {
    return {
      sliderList: [
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206239582&di=1744a9ca5949f69662ca8b70b3007550&imgtype=0&src=http%3A%2F%2Fimg1n.soufunimg.com%2Fviewimage%2Fjiancai%2Fbusiness%2Fto8to%2F201508%2F21%2F88%2F66514629709c4a2cf74817fde6d9f663%2F432x324c.jpg"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557206239582&di=1744a9ca5949f69662ca8b70b3007550&imgtype=0&src=http%3A%2F%2Fimg1n.soufunimg.com%2Fviewimage%2Fjiancai%2Fbusiness%2Fto8to%2F201508%2F21%2F88%2F66514629709c4a2cf74817fde6d9f663%2F432x324c.jpg"
        }
      ],
      servicesList: [
        {
          title: "上门测量"
        },
        {
          title: "送货安装"
        },
        {
          title: "三年质保"
        },
        {
          title: "保价承诺"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    gotoService() {},
    pickAttr() {},
    gotoHome() {
      this.$router.push("/home");
    },
    gotoLists() {
      this.$router.push("/goods");
    },
    gotoCollect() {
      this.$router.push("/home");
    },
    phoneCall(phone) {
      window.location.href = "tel://" + phone;
    }
  },
  watch: {},
  components: {
    swiper
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.container {
  background-color: #eee;
  padding-bottom: 0.44rem;
}
.content {
  padding: 0;
  font-size: 0.13rem;
  color: #333333;
}
.foot-tab {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.45rem;
  font-size: 0.12rem;
  color: #666;
  border-top: 1px solid #eee;
  background-color: #fff;
  @include flexLayout();
  .tab-section {
    flex: 1;
    border-left: 1px solid #eee;
    height: 100%;
    @include flexLayout();
    .section-item {
      @include flexLayout(nowrap, column);
      svg {
        height: 0.22rem;
        width: 0.22rem;
      }
    }
    .contact {
      height: 100%;
      width: 100%;
      text-align: center;
      line-height: 0.45rem;
      color: #fff;
      background-color: #1ab192;
    }
    &:first-child {
      border-left: none;
    }
    &:last-child {
      flex: 2 1 auto;
    }
  }
}
.goods-title-section {
  background-color: #fff;
  padding: 0 0.15rem;
  padding-top: 0.06rem;
  @include flexLayout(nowrap, column, flex-start, flex-start);
  .goods-title {
    font-size: 0.16rem;
    font-weight: 600;
  }
  .goods-real-price {
    font-size: 0.23rem;
    color: #f84c3d;
    font-weight: bold;
  }
  .goods-sell-price {
    font-size: 0.13rem;
    color: #999999;
    span {
      text-decoration: line-through;
    }
    padding-bottom: 0.1rem;
  }
  & > div {
    padding: 0.05rem 0;
  }
}
.services-list {
  background-color: #fff;
  @include flexLayout(nowrap);
  @include greenColor;
  font-size: 0.14rem;
  height: 0.3rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  height: 0.45rem;
  padding: 0.1rem 0.15rem;
  .services-item {
    flex: 1;
    &:last-child {
      flex: 0 2 auto;
      color: #999;
    }
  }
}
.goods-spec-section {
  margin-top: 0.12rem;
  & > div {
    height: 0.45rem;
    background-color: #fff;
    padding: 0 0.15rem;
  }
  .goods-spec {
    @include flexLayout(nowrap, row, space-between);
    .goods-spec-name {
      @include flexLayout(nowrap, row, flex-start);
      .spec {
        color: #999999;
      }
      .spec-desc {
        padding-left: 0.1rem;
      }
    }
    .goods-spec-arrow {
      color: #999;
    }
  }
}
.goods-detail-section {
  margin-top: 0.12rem;
  background-color: #fff;
  .goods-tab {
    height: 0.48rem;
    border-bottom: 1px solid #eee;
    @include flexLayout();
    .goods-detail-tab {
      height: 100%;
      width: 45%;
      @include flexLayout();
      & > div {
        flex: 1;
        font-size: 0.15rem;
        border-bottom: 2px solid #1ab192;
        line-height: 0.48rem;
        height: 0.48rem;
        text-align: center;
      }
    }
  }
  .goods-detail {
    & > img {
      width: 100%;
      vertical-align: bottom;
    }
  }
}
</style>