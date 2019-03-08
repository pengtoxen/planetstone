<template>
  <div class="container">
    <swiper :photoList="sliderList" :isFull="isFull"></swiper>
    <div class="services-list">
      <div class="services-item" v-for="(item, index) in servicesList" :key="index">
        <svg-icon icon-class="round_check"/>
        {{item.title}}
      </div>
    </div>
    <div class="division-zone"></div>
    <div class="entrance">
      <div class="entrance-item" v-for="(item, index) in entrance" :key="index">
        <svg-icon :icon-class="item.icon"/>
        <span class="entrance-title">{{item.title}}</span>
      </div>
    </div>
    <div class="division-zone"></div>
    <div class="module-one-title">
      <span class="title">{{moduleOne.title}}</span>
      <span class="sub-title">{{moduleOne.sub_title}}</span>
    </div>
    <div class="module-one">
      <goodslist
        :list="moduleOne.list"
        :finished="moduleOne.finished"
        :finishedtext="moduleOne.finishedtext"
      ></goodslist>
    </div>
    <div class="module-two-title">
      <span class="title">{{moduleTwo.title}}</span>
      <span class="sub-title">{{moduleTwo.sub_title}}</span>
    </div>
    <div class="module-two">
      <goodslist
        :list="moduleTwo.list"
        :finished="moduleTwo.finished"
        :finishedtext="moduleTwo.finishedtext"
      ></goodslist>
    </div>
    <div class="module-three-title">
      <span class="title">{{moduleThree.title}}</span>
      <span class="sub-title">{{moduleThree.sub_title}}</span>
    </div>
    <div class="module-three">
      <goodslist :list="moduleThree.list">
        <template v-slot:one="{oneData}">
          <div class="goods-info">
            <div class="goods-name">{{ oneData.title }}</div>
            <div class="goods-price">￥{{ oneData.sell_price }}</div>
            <div class="goods-tags">
              <div class="goods-tag" v-for="(item, index) in oneData.tags" :key="index">{{ item}}</div>
            </div>
          </div>
        </template>
      </goodslist>
    </div>
  </div>
</template>

<script>
import swiper from "@/components/swiper.vue";
import datalist from "@/components/dataList.vue";
export default {
  data() {
    return {
      isFull: true,
      sliderList: [
        {
          img:
            "http://pic.linshimuye.com/image/-1/2018-11-12-048762ee39b7-45ea-9548-1c843e9c01fe.jpg"
        },
        {
          img:
            "http://pic.linshimuye.com/image/-1/2018-11-12-048762ee39b7-45ea-9548-1c843e9c01fe.jpg"
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
      ],
      entrance: [
        {
          title: "新上橱柜",
          target: "",
          icon: "new"
        },
        {
          title: "热销橱柜",
          target: "",
          icon: "hot"
        },
        {
          title: "到店体验",
          target: "",
          icon: "location"
        },
        {
          title: "橱柜案例",
          target: "",
          icon: "album"
        }
      ],
      moduleOne: {
        list: [
          {
            id: 1,
            img_url:
              "http://pic.linshimuye.com/image/-1/2018-6-18-977b7782ead0-40c5-9ce3-7f7a62ffe5d3.jpg"
          },
          {
            id: 2,
            img_url:
              "http://pic.linshimuye.com/image/-1/2018-6-18-977b7782ead0-40c5-9ce3-7f7a62ffe5d3.jpg"
          }
        ],
        finished: true,
        finishedtext: " ",
        title: "Buy家清单",
        sub_title: "寻找最合适的橱柜"
      },
      moduleTwo: {
        list: [
          {
            id: 1,
            img_url:
              "http://pic.linshimuye.com/image/-1/2018-6-18-977b7782ead0-40c5-9ce3-7f7a62ffe5d3.jpg"
          },
          {
            id: 2,
            img_url:
              "http://pic.linshimuye.com/image/-1/2018-6-18-977b7782ead0-40c5-9ce3-7f7a62ffe5d3.jpg"
          }
        ],
        finished: true,
        finishedtext: " ",
        title: "壹时半刻",
        sub_title: "他的故事,是你的灵魂攻略"
      },
      moduleThree: {
        list: [
          {
            id: 1,
            title: "石英石台面实木橱柜",
            sell_price: 5190,
            tags: ["高端大气", "上档次"],
            img_url:
              "http://pic.linshimuye.com/image/-1/2018-8-20-1ef8597cbb6b-4fca-b7f6-48d86434341b.jpg"
          },
          {
            id: 2,
            title: "石英石台面实木橱柜",
            sell_price: 5190,
            tags: ["高端大气", "上档次"],
            img_url:
              "http://pic.linshimuye.com/image/-1/2018-8-20-1ef8597cbb6b-4fca-b7f6-48d86434341b.jpg"
          }
        ],
        finished: true,
        finishedtext: " ",
        title: "精选推荐",
        sub_title: "精细挑选,只为独一无二的你"
      }
    };
  },
  created() {},
  methods: {},
  components: {
    swiper,
    goodslist: datalist
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.container {
  margin-top: 3rem;
}
.services-list {
  @include flexLayout(nowrap);
  @include greenColor;
  font-size: 1rem;
  height: 3rem;
}
.division-zone {
  height: 1rem;
  @include greyBgc;
}
.entrance {
  @include flexLayout(nowrap);
  padding: 1rem 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #fff;
  color: #999;
  font-size: 2.5rem;
  .entrance-item {
    @include flexLayout(nowrap, column, space-between);
    width: 49%;
    .entrance-title {
      font-size: 1.3rem;
    }
  }
}
.module-one-title,
.module-two-title,
.module-three-title {
  padding: 0.5rem 1rem;
  background-color: #fff;
  margin-bottom: 0.1rem;
  @include flexLayout(nowrap, column);
  .title {
    font-weight: 700;
    font-size: 1.8rem;
  }
  .sub-title {
    font-size: 1rem;
    color: #999;
  }
}
.module-one /deep/ .data-list {
  @include flexLayout(wrap, row, space-between);
  background-color: #fff;
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
  padding: 0;
  .data-item {
    width: 100%;
    box-shadow: 0 0 0.8rem #ccc;
    margin: 0.5rem 0;
    margin-top: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    min-height: 160px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
.module-two /deep/ .data-list {
  @include flexLayout(wrap, row, space-between);
  background-color: #fff;
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
  padding: 0;
  .data-item {
    width: 100%;
    box-shadow: 0 0 0.8rem #ccc;
    margin: 0.5rem 0;
    margin-top: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    min-height: 160px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
.goods-info {
  @include flexLayout(nowrap, column, space-around, flex-start);
  color: black;
  padding-bottom: 0.3rem;
  .goods-name {
    color: #999;
    font-size: 1rem;
    padding-top: 0.5rem;
  }
  .goods-price {
    font-size: 1.3rem;
    font-weight: 600;
  }
  .goods-tags {
    font-size: 0.8rem;
    height: 1.3rem;
    line-height: 1.3rem;
    @include flexLayout(nowrap, row, flex-start, center);
    .goods-tag {
      border: 1px solid #999;
      border-radius: 4px;
      margin: 0 0.2rem;
    }
  }
}
</style>
