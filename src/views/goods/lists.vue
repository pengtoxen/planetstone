<template>
  <div class="goods-container">
    <search class="goods-search"></search>
    <div class="goods-tabs-section">
      <div class="tabs-left" @click="getDataByTab('composite')">
        <span :class="{'tab-active' : curTab == 'composite'}">综合</span>
      </div>
      <div class="tabs-right" @click="getDataByTab('sold')">
        <span :class="{'tab-active' : curTab == 'sold'}">销量</span>
      </div>
      <div class="tabs-right" @click="getDataByTab('new')">
        <span :class="{'tab-active' : curTab == 'new'}">新品</span>
      </div>
      <div class="tabs-right" @click="getDataByTab('price')">
        <span :class="{'tab-active' : curTab == 'price'}">价格</span>
      </div>
    </div>
    <div class="goods-main-section">
      <goodslist :list="moduleThree.list">
        <template v-slot:one="{oneData}">
          <div class="goods-info">
            <div class="goods-name">{{ oneData.title }}</div>
            <div class="goods-bottom">
              <div class="goods-price">￥{{ oneData.sell_price | toFixedByNum}}</div>
              <div class="goods-sold">销量20</div>
            </div>
          </div>
        </template>
      </goodslist>
    </div>
  </div>
</template>

<script>
import search from "@/components/searchBox.vue";
import datalist from "@/components/dataList.vue";
import empty from "@/components/emptySearch.vue";
export default {
  data() {
    return {
      curTab: "composite",
      searchText: this.$route.query.search,
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
        title: "热销商品",
        sub_title: "精细挑选,只为独一无二的你"
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSearch: function() {
      console.log(11);
    },
    getDataByTab: function(tab) {
      this.curTab = tab;
    }
  },
  watch: {},
  components: {
    search,
    goodslist: datalist,
    empty
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.goods-container {
  padding-top: 0.45rem;
  padding-bottom: 0.45rem;
  height: 100vh;
}
.goods-search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.45rem;
}
.goods-tabs-section {
  font-size: 0.14rem;
  @include flexLayout(nowrap);
  div {
    flex: 1 1 auto;
    text-align: center;
    line-height: 0.4rem;
    @include flexLayout(nowrap);
    height: 0.4rem;
    span {
      width: 90%;
      height: 100%;
    }
  }
}
.tab-active {
  border-bottom: 0.02rem #1ab192 solid;
}
.goods-class-active {
  color: #1ab192;
  border-left-color: #1ab192 !important;
}
.goods-main-section {
  font-size: 0.14rem;
  height: auto;
  padding-bottom: 0.45rem;
  /deep/ .data-list {
    .data-item {
      .goods-info {
        height: 0.5rem;
        padding: 0 0.05rem;
        @include flexLayout(nowrap, column, space-around, flex-start);
        & > div {
          width: 100%;
        }
        .goods-bottom {
          @include flexLayout(nowrap, row, space-between);
          .goods-price {
            color: #f84c3d;
          }
          .goods-sold {
            color: #999;
          }
        }
      }
    }
  }
}
</style>