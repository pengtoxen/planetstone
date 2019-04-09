<template>
  <div>
    <!--侧滑菜单容器-->
    <div id="offCanvasWrapper" class="mui-off-canvas-wrap mui-draggable mui-slide-in">
      <!--菜单部分-->
      <aside id="offCanvasSide" class="mui-off-canvas-right">
        <div id="offCanvasSideScroll" class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <div class="content">
              <div class="price-zone-container">
                <span class="title">价格区间</span>
                <div class="price-zone">
                  <div
                    class="low-price mui-input-row"
                    :class="{selActive : curSel == 'min'}"
                    @tap="selPrice('min')"
                  >
                    <input
                      class="mui-input-clear"
                      type="number"
                      v-model="minPrice"
                      placeholder="最低价格"
                      pattern="[0-9]*"
                      clearable
                    >
                  </div>
                  <div class="price-sep">-</div>
                  <div
                    class="high-price mui-input-row"
                    :class="{selActive : curSel == 'max'}"
                    @tap="selPrice('max')"
                  >
                    <input
                      class="mui-input-clear"
                      type="number"
                      v-model="maxPrice"
                      placeholder="最高价格"
                      pattern="\[0-9]*"
                      clearable
                    >
                  </div>
                </div>
              </div>
              <div class="brand-zone-container">
                <span class="title">品牌</span>
                <div class="brand-list">
                  <div
                    :class="['brand-item',item.pick?'selActive':'']"
                    v-for="(item,index) in brands"
                    :key="index"
                    @tap="pickBrands(item.id)"
                  >{{item.name}}</div>
                </div>
              </div>
              <div class="btn-container">
                <button class="mui-btn" type="button" @tap="reset">重置</button>
                <button class="mui-btn mui-btn-red" type="button" @tap="complete">完成</button>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div class="mui-inner-wrap">
        <div class="mall-search-container" id="mall-search-container">
          <!-- <search
            class="mall-search-box"
            :auto-fixed="false"
            :position="'none'"
            :autoScrollToTop="true"
            @onSubmit.capture="onSearch"
          ></search>-->
          <search class="mall-search-box" @func="onSearch"></search>
          <div class="search-tabs">
            <div
              :class="{tabActive : curTab == 'comprehensive'}"
              @tap="getDataByTab('comprehensive')"
            >综合</div>
            <div :class="{tabActive : curTab == 'sold'}" @tap="getDataByTab('sold')">销量</div>
            <div :class="{tabActive : curTab == 'price'}" @tap="getDataByTab('price')">
              价格
              <i
                :class="{'arrow-up':arrowUp,'arrow-down':!arrowUp,'arrow-up-active':arrowUp && curTab == 'price','arrow-down-active':!arrowUp && curTab == 'price' }"
              ></i>
            </div>
            <div
              :class="{tabActive : curTab == 'filter'}"
              id="offCanvasShow"
              @tap="getDataByTab('filter')"
            >筛选</div>
          </div>
        </div>
        <div id="offCanvasContentScroll" class="mui-content mui-scroll-wrapper">
          <div v-if="moduleThree.list.length>0" class="mui-scroll">
            <goodslist :list="moduleThree.list">
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
          <empty v-else></empty>
        </div>
        <!-- off-canvas backdrop -->
        <div class="mui-off-canvas-backdrop"></div>
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
      arrowUp: false,
      curTab: "comprehensive",
      curSel: "",
      minPrice: "",
      maxPrice: "",
      brands: [
        {
          id: "b0001",
          name: "豪雅",
          pick: false
        },
        {
          id: "b0002",
          name: "豪雅",
          pick: false
        },
        {
          id: "b0003",
          name: "豪雅",
          pick: false
        },
        {
          id: "b0004",
          name: "豪雅",
          pick: false
        }
      ],
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
  mounted() {
    mui.init({
      swipeBack: true
    });
    //移动效果是否为整体移动
    var moveTogether = false;
    //主界面和侧滑菜单界面均支持区域滚动；
    mui("#offCanvasSideScroll").scroll();
    mui("#offCanvasContentScroll").scroll();
    //取消手势操作
    var offCanvasWrapper = document.getElementById("offCanvasWrapper");
    var offCanvasInner = offCanvasWrapper.querySelector(".mui-inner-wrap");
    offCanvasInner.addEventListener("drag", function(event) {
      event.stopPropagation();
    });
    //解决不展示清楚按钮的的问题
    mui(".mui-input-row input").input();
  },
  methods: {
    onSearch: function() {
      console.log(11);
    },
    filter: function() {},
    getDataByTab: function(tab) {
      document
        .getElementById("mall-search-container")
        .querySelector("input")
        .blur();
      this.curTab = tab;
      if (tab == "filter") {
        var offCanvasWrapper = mui("#offCanvasWrapper");
        offCanvasWrapper.offCanvas("show");
      }
      if (tab == "price") {
        this.arrowUp = !this.arrowUp;
      }
    },
    selPrice: function(sel) {
      this.curSel = sel;
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
.mui-content {
  height: 100vh;
}
.search-tabs {
  background-color: #fff;
  height: 0.44rem;
  font-size: 0.15rem;
  @include flexLayout(nowrap, row);
  div {
    flex: 1 1 auto;
    height: 0.44rem;
    text-align: center;
    line-height: 0.44rem;
    position: relative;
  }
}
.mui-off-canvas-right {
  color: #fff;
}
#offCanvasWrapper {
  height: 100vh;
}
#offCanvasSide {
  width: 85%;
}
#offCanvasSideScroll {
  .mui-scroll {
    .content {
      color: black !important;
      background-color: #fff;
      height: 100vh;
      .title {
        font-size: 0.15rem;
      }
      .price-zone-container {
        padding: 0.1rem;
        .price-zone {
          @include flexLayout(nowrap, row);
          padding: 0.1rem 0;
          div {
            flex: 1 1 auto;
            border-radius: 0.05rem;
            border: 1px solid transparent;
            input {
              height: 0.35rem;
              border: 0;
              padding: 0 0.04rem;
              margin: 0;
              font-size: 0.14rem;
              background-color: #f0f0f0;
              text-align: center;
            }
          }
          .price-sep {
            margin: 0 0.1rem;
          }
        }
      }
      .brand-zone-container {
        .title {
          padding-left: 0.1rem;
        }
        .brand-list {
          @include flexLayout(wrap, row, space-between);
          padding: 0.1rem;
          .brand-item {
            flex: 0 0 32%;
            font-size: 0.14rem;
            background-color: #f0f0f0;
            height: 0.35rem;
            border: 0;
            text-align: center;
            line-height: 0.35rem;
            border-radius: 0.05rem;
            margin-bottom: 0.05rem;
          }
        }
      }
      .btn-container {
        @include flexLayout(nowrap, row);
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 0.44rem;
        button {
          //box-sizing: border-box;
          position: relative;
          width: 50%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
}
#offCanvasContentScroll {
  padding-top: 0.88rem;
}
.mall-search-container {
  position: absolute;
  z-index: 100;
  top: 0;
  width: 100%;
  background-color: #efeff4;
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
.tabActive {
  color: rgb(243, 144, 27);
}
.selActive {
  border: 1px solid rgb(235, 39, 13) !important;
}
.arrow-up {
  position: absolute;
  top: 0.2rem;
  right: 0.15rem;
  width: 0;
  height: 0;
  border-left: 0.05rem solid transparent;
  border-right: 0.05rem solid transparent;
  border-bottom: 0.05rem solid #000;
  font-size: 0;
}
.arrow-down {
  position: absolute;
  top: 0.2rem;
  right: 0.15rem;
  width: 0;
  height: 0;
  border-left: 0.05rem solid transparent;
  border-right: 0.05rem solid transparent;
  border-top: 0.05rem solid #000;
  font-size: 0;
}
.arrow-up-active {
  border-bottom: 0.05rem solid rgb(243, 144, 27);
}
.arrow-down-active {
  border-top: 0.05rem solid rgb(243, 144, 27);
}
* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
}
textarea {
  -webkit-user-select: auto !important;
}
</style>