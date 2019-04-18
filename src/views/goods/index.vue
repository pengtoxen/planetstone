<template>
  <div class="goods-container">
    <search class="goods-search"></search>
    <div class="goods-tabs-section">
      <div class="tabs-left" @click="getDataByTab('type')">
        <span :class="{'tab-active' : curTab == 'type'}">分类</span>
      </div>
      <div class="tabs-right" @click="getDataByTab('style')">
        <span :class="{'tab-active' : curTab == 'style'}">风格</span>
      </div>
    </div>
    <div class="goods-main-section">
      <div class="main-left">
        <div
          class="goods-class"
          v-for="(item,index) in classData[curTab]['lists']"
          :key="index"
          @click="getDataByClass(item.name)"
        >
          <span :class="{'goods-class-active' : curClass == item.name }">{{item.name}}</span>
        </div>
      </div>
      <div class="main-right">
        <goodslist :list="moduleThree.list">
          <template v-slot:one="{oneData}">
            <div class="goods-info">
              <div class="goods-name">{{ oneData.title }}</div>
              <div class="goods-price">￥{{ oneData.sell_price | toFixedByNum}}</div>
            </div>
          </template>
        </goodslist>
      </div>
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
      curTab: "type",
      curClass: "厨房",
      classData: {
        type: {
          lists: [
            {
              id: 1,
              name: "厨房"
            },
            {
              id: 2,
              name: "浴室"
            },
            {
              id: 3,
              name: "阳台"
            }
          ]
        },
        style: {
          lists: [
            {
              id: 1,
              name: "北欧"
            },
            {
              id: 2,
              name: "欧式"
            },
            {
              id: 3,
              name: "美式"
            },
            {
              id: 3,
              name: "中式"
            }
          ]
        }
      },
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
  created() {
    console.log(this.classData[this.curTab]);
  },
  mounted() {},
  methods: {
    onSearch: function() {
      console.log(11);
    },
    getDataByTab: function(tab) {
      this.curTab = tab;
      this.curClass = this.curTab == "type" ? "厨房" : "北欧";
    },
    getDataByClass: function(cla) {
      this.curClass = cla;
    },
    pickBrands: function(id) {
      this.brands.some(item => {
        if (id == item.id) {
          item.pick = !item.pick;
          return true;
        }
      });
    },
    reset: function() {
      this.brands.every(item => {
        item.pick = false;
        return true;
      });
      this.selPrice("");
      this.minPrice = this.maxPrice = "";
    },
    complete: function() {
      let brandsList = [];
      this.brands.forEach(item => {
        if (item.pick == true) {
          brandsList.push(item.id);
          return true;
        }
      });
      let param = {
        brands: brandsList,
        min: this.minPrice,
        max: this.maxPrice
      };
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
  height: 100%;
  @include flexLayout(nowrap);
  .main-left {
    flex: 1 1 auto;
    width: 23%;
    font-size: 0.14rem;
    border-right: 1px solid #e7e7e7;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
    @include flexLayout(wrap, column, flex-start);
    .goods-class {
      height: 0.4rem;
      width: 100%;
      text-align: center;
      @include flexLayout(nowrap);
      span {
        width: 100%;
        height: 0.25rem;
        line-height: 0.25rem;
        text-align: center;
        border-left-width: 3px;
        border-left-style: solid;
        border-left-color: transparent;
      }
    }
  }
  .main-right {
    width: 77%;
    flex: 1 1 auto;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>