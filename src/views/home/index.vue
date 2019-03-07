<template>
  <div>
    <search></search>
    <swiper :photoList="sliderList" :isFull="isFull"></swiper>
    <div class="entrance">
      <div class="entrance-item" v-for="(item, index) in entrance" :key="index">
        <img :src="item.img" alt class="entrance-icon">
        <span class="entrance-title">{{item.title}}</span>
      </div>
    </div>
    <div class="module-one-title">
      <span>{{moduleOne.title}}</span>
    </div>
    <div class="module-one">
      <goodslist
        :list="moduleOne.list"
        :finished="moduleOne.finished"
        :finishedtext="moduleOne.finishedtext"
      >
        <template v-slot:one="{oneData}">
          <h1 class="title">{{ oneData.title }}</h1>
          <div class="info">
            <p class="price">
              <span class="now">￥{{ oneData.sell_price }}</span>
              <span class="old">￥{{ oneData.market_price }}</span>
            </p>
            <p class="sell">
              <span>热卖中</span>
              <span>剩{{ oneData.stock_quantity }}件</span>
            </p>
          </div>
        </template>
      </goodslist>
    </div>
    <div class="module-two">
      <span class="module-two-title">{{moduleTwo.title}}</span>
      <goodslist :list="moduleTwo.list">
        <template v-slot:one="{oneData}">
          <h1 class="title">{{ oneData.title }}</h1>
          <div class="info">
            <p class="price">
              <span class="now">￥{{ oneData.sell_price }}</span>
              <span class="old">￥{{ oneData.market_price }}</span>
            </p>
            <p class="sell">
              <span>热卖中</span>
              <span>剩{{ oneData.stock_quantity }}件</span>
            </p>
          </div>
        </template>
      </goodslist>
    </div>
  </div>
</template>

<script>
import swiper from "@/components/swiper.vue";
import search from "@/components/search.vue";
import datalist from "@/components/dataList.vue";
export default {
  data() {
    return {
      isFull: true,
      sliderList: [
        {
          img:
            "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1222770689,3169125003&fm=173&app=25&f=JPEG?w=639&h=297&s=753317D5C222790344AC7C640300E030"
        },
        {
          img:
            "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1222770689,3169125003&fm=173&app=25&f=JPEG?w=639&h=297&s=753317D5C222790344AC7C640300E030"
        },
        {
          img:
            "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1222770689,3169125003&fm=173&app=25&f=JPEG?w=639&h=297&s=753317D5C222790344AC7C640300E030"
        }
      ],
      entrance: [
        {
          title: "签到",
          target: "",
          img:
            "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1222770689,3169125003&fm=173&app=25&f=JPEG?w=639&h=297&s=753317D5C222790344AC7C640300E030"
        },
        {
          title: "签到",
          target: "",
          img:
            "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1222770689,3169125003&fm=173&app=25&f=JPEG?w=639&h=297&s=753317D5C222790344AC7C640300E030"
        },
        {
          title: "签到",
          target: "",
          img:
            "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1222770689,3169125003&fm=173&app=25&f=JPEG?w=639&h=297&s=753317D5C222790344AC7C640300E030"
        },
        {
          title: "签到",
          target: "",
          img:
            "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1222770689,3169125003&fm=173&app=25&f=JPEG?w=639&h=297&s=753317D5C222790344AC7C640300E030"
        }
      ],
      moduleOne: {
        list: [
          {
            id: 1,
            title: "iphone",
            sell_price: "199",
            market_price: "299",
            tag: "热卖",
            stock_quantity: 60,
            img_src:
              "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1222770689,3169125003&fm=173&app=25&f=JPEG?w=639&h=297&s=753317D5C222790344AC7C640300E030"
          },
          {
            id: 1,
            title: "iphone",
            sell_price: "199",
            market_price: "299",
            tag: "热卖",
            stock_quantity: 60,
            img_src:
              "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1222770689,3169125003&fm=173&app=25&f=JPEG?w=639&h=297&s=753317D5C222790344AC7C640300E030"
          }
        ],
        finished: true,
        finishedtext: " ",
        title: "推荐商品"
      },
      moduleTwo: {
        list: [
          {
            id: 1,
            title: "iphone",
            sell_price: "199",
            market_price: "299",
            tag: "热卖",
            stock_quantity: 60,
            img_src:
              "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1222770689,3169125003&fm=173&app=25&f=JPEG?w=639&h=297&s=753317D5C222790344AC7C640300E030"
          },
          {
            id: 1,
            title: "iphone",
            sell_price: "199",
            market_price: "299",
            tag: "热卖",
            stock_quantity: 60,
            img_src:
              "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1222770689,3169125003&fm=173&app=25&f=JPEG?w=639&h=297&s=753317D5C222790344AC7C640300E030"
          }
        ],
        finished: true,
        title: "热销商品"
      }
    };
  },
  created() {},
  methods: {},
  components: {
    swiper,
    search,
    goodslist: datalist
  }
};
</script>

<style lang="scss" scoped>
.entrance {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 10px 5px;
  padding-bottom: 5px;
  margin: 5px 0;
  background-color: #fff;
  .entrance-item {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 49%;
    img {
      width: 45px;
      height: 45px;
      display: block;
      border-radius: 50%;
    }
    .entrance-title {
      font-size: 13px;
      line-height: 20px;
      align-content: center;
    }
  }
}
.module-one-title {
  padding: 5px 10px;
  background-color: #fff;
  margin-bottom: 1px;
  span {
    font-size: 15px !important;
    line-height: 16px;
    border-left: 3px solid cornflowerblue;
  }
}
.module-one {
  background-color: #fff;
  margin-bottom: 5px;
}
.module-two {
  background-color: #fff;
  .module-two-title {
    display: block;
    color: #de2727;
    font-size: 16px !important;
    position: relative;
    text-align: center;
    padding: 10px 0;
  }
  .module-two-title:before,
  .module-two-title:after {
    content: "";
    position: absolute;
    width: 19px;
    height: 1px;
    background-color: #de2727;
    top: 50%;
  }
  .module-two-title:before {
    left: 35%;
  }
  .hot-sell {

  }
}
.data-list {
  .data-item {
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
