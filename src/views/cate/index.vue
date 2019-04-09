<template>
  <div class="container">
    <div id="cate-list">
      <div id="catepop0" :class="['mall-popover',isActive0 ? 'active' : '']">
        <div class="mui-scroll-wrapper mall-scroll-catepop">
          <div class="mui-scroll">
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">Item 1</li>
              <li class="mui-table-view-cell">Item 2</li>
              <li class="mui-table-view-cell">Item 3</li>
              <li class="mui-table-view-cell">Item 1</li>
              <li class="mui-table-view-cell">Item 2</li>
              <li class="mui-table-view-cell">Item 3</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="catepop1" :class="['mall-popover',isActive1 ? 'active' : '']">
        <div class="mui-scroll-wrapper mall-scroll-catepop">
          <div class="mui-scroll">
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">Item 1SD</li>
              <li class="mui-table-view-cell">Item 2SD</li>
              <li class="mui-table-view-cell">Item 3SD</li>
              <li class="mui-table-view-cell">Item 1SD</li>
              <li class="mui-table-view-cell">Item 2SD</li>
              <li class="mui-table-view-cell">Item 3SD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="tabbar mui-segmented-control mui-segmented-control-inverted">
      <div class="tabbar-left" @click="selectCate('catepop0')">
        <span href :class="['mui-control-item',isActive0 ? 'active-color' : '']">
          <span>类别</span>
          <span class="arrow"></span>
        </span>
      </div>
      <div class="tabbar-right" @click="selectCate('catepop1')">
        <span href :class="['mui-control-item',isActive1 ? 'active-color' : '']">
          <span>品牌</span>
          <span class="arrow"></span>
        </span>
      </div>
    </div>
    <div class="goods-list">
      <div class="mui-scroll-wrapper goods-list-margin">
        <div class="mui-scroll">
          <goodslist :list="goodsList.list">
            <template v-slot:one="{oneData}">
              <div class="goods-info">
                <div class="goods-name">{{ oneData.title }}</div>
                <div class="goods-price">￥{{ oneData.sell_price }}</div>
                <div class="goods-tags">
                  <div
                    class="goods-tag"
                    v-for="(item, index) in oneData.tags"
                    :key="index"
                  >{{ item}}</div>
                </div>
              </div>
            </template>
          </goodslist>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datalist from "@/components/dataList.vue";
export default {
  data() {
    return {
      isActive0: false,
      isActive1: false,
      goodsList: {
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
        title: "热销商品",
        sub_title: "精细挑选,只为独一无二的你"
      }
    };
  },
  methods: {
    selectCate(cateid) {
      if (cateid == "catepop0") {
        this.isActive0 = !this.isActive0;
        this.isActive1 = false;
      } else if (cateid == "catepop1") {
        this.isActive1 = !this.isActive1;
        this.isActive0 = false;
      }
    }
  },
  watch: {},
  created() {},
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  components: {
    goodslist: datalist
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.goods-list {
  position: relative;
  height: 100vh;
  .goods-list-margin {
    margin-top: 0.38rem;
    margin-bottom: 0.5rem;
  }
}
.goods-info {
  @include flexLayout(nowrap, column, space-around, flex-start);
  color: black;
  padding-bottom: 0.03rem;
  .goods-name {
    color: #999;
    font-size: 0.1rem;
    padding-top: 0.05rem;
  }
  .goods-price {
    font-size: 0.13rem;
    font-weight: 600;
  }
  .goods-tags {
    font-size: 0.08rem;
    height: 0.13rem;
    line-height: 0.13rem;
    @include flexLayout(nowrap, row, flex-start, center);
    .goods-tag {
      border: 2px solid #eb270d;
      border-radius: 4px;
      margin: 0 0.02rem;
      background-color: #eb270d;
      color: #fff;
    }
  }
}
.tabbar {
  @include flexLayout(nowrap);
  height: 0.44rem;
  background-color: #fff;
  z-index: 1000;
  position: fixed;
  top: 0;
}
.arrow {
  width: 0;
  height: 0;
  position: absolute;
  top: 0.18rem;
  right: auto;
  margin-left: 0.04rem;
  border-width: 0.06rem;
  border-style: solid;
  border-color: #d3d3d3 transparent transparent;
}
.arrow:after {
  position: absolute;
  top: -0.07rem;
  left: -0.05rem;
  content: "";
  width: 0;
  height: 0;
  border: 0.05rem solid;
  border-color: #fff transparent transparent transparent;
}
#cate-list {
  position: relative;
  top: 0;
  .mall-popover {
    position: absolute;
    z-index: 999;
    display: block;
    left: 0;
    top: -3rem;
    width: 100%;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;
    &:before {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 1px;
      content: "";
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
      background-color: #c8c7cc;
    }
  }
  .mall-scroll-catepop {
    height: 3rem;
    background-color: #fff;
    font-size: 0.15rem;
  }
}
.mui-table-view-cell:after {
  left: 0;
}
.active {
  top: 0.38rem !important;
}
.active-color {
  color: #f3901b !important;
  .arrow {
    top: 12px;
    border-color: transparent transparent rgb(243, 144, 27) transparent;
    &:after {
      top: -4px;
      left: -5px;
      border-color: transparent transparent #fff transparent;
    }
  }
}
</style>

