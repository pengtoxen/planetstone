<template>
  <div class="container">
    <vueDrawerLayout
      ref="drawer"
      :drawer-width="250"
      :enable="false"
      :animatable="true"
      :z-index="0"
      :drawable-distance="Math.floor(250/3)"
      :content-drawable="true"
      :backdrop="true"
      :backdrop-opacity-range="[0,0.4]"
      @slide-start="handleSlideStart"
      @slide-move="handleSlideMove"
      @slide-end="handleSlideEnd"
      @mask-click="handleMaskClick"
    >
      <div class="drawer-content" slot="drawer">
        <div class="out-box">
          <div class="header-section">
            <svg-icon icon-class="filter"/>
            <div class="header-content">图库筛选</div>
          </div>
          <hr class="drawer-hr">
        </div>
        <div class="out-box" v-for="(item,index) in classData" :key="index
        ">
          <div class="class-section">
            <div class="class-header">{{item.className}}</div>
            <div class="class-content">
              <div
                :class="['class-item',pickClassId == v.id ? 'pick-item':'']"
                v-for="(v,k) in item.dataList"
                :key="k"
                @click="pickClass(v.id)"
              >{{v.name}}</div>
            </div>
          </div>
          <hr class="drawer-hr">
        </div>
      </div>
      <div slot="content" class="content-section">
        <div class="more-icon" @click.capture="handleToggleDrawer">
          <svg-icon v-if="arrowFlag" icon-class="right"/>
          <svg-icon v-else icon-class="back"/>
        </div>
        <div class="tabs-container">
          <div class="tabs">
            <div @click="pickTab(1)" :class="[pickTabId === 1 ? 'pick-tab' : '']">3D图</div>
            <div @click="pickTab(2)" :class="[pickTabId === 2 ? 'pick-tab' : '']">2D图</div>
          </div>
        </div>
        <cabinetlist :list="cabinetList">
          <template v-slot:one="{oneData}">
            <div class="info">
              <span class="description">{{ oneData.description }}</span>
              <p class="ext-info">
                <span class="views">
                  <svg-icon icon-class="attention"/>
                  {{ oneData.views }}
                </span>
                <span class="appreciate">
                  <svg-icon icon-class="appreciate"/>
                  {{ oneData.thumb_up }}
                </span>
              </p>
            </div>
          </template>
        </cabinetlist>
      </div>
    </vueDrawerLayout>
  </div>
</template>

<script>
import datalist from "@/components/dataList.vue";
import { DrawerLayout } from "vue-drawer-layout";
export default {
  data() {
    return {
      arrowFlag: true,
      pickClassId: 0,
      pickTabId: 2,
      cabinetList: [
        {
          id: 1,
          title: "",
          description: "南海九江洛浦园157平方四",
          views: "56369",
          thumb_up: "40",
          img_url:
            "http://pic.linshimuye.com/image/-1/2017-8-23-a8b1fcade6f3-4b31-a61c-6761e79dd9b4.jpg"
        }
      ],
      classData: [
        {
          className: "风格",
          dataList: [
            {
              id: 1,
              name: "不限"
            },
            {
              id: 2,
              name: "美式"
            },
            {
              id: 3,
              name: "欧式"
            },
            {
              id: 4,
              name: "田园"
            }
          ]
        },
        {
          className: "风格",
          dataList: [
            {
              id: 1,
              name: "不限"
            },
            {
              id: 2,
              name: "美式"
            },
            {
              id: 3,
              name: "欧式"
            },
            {
              id: 4,
              name: "田园"
            },
            {
              id: 2,
              name: "美式"
            },
            {
              id: 3,
              name: "欧式"
            },
            {
              id: 4,
              name: "田园"
            },
            {
              id: 2,
              name: "美式"
            },
            {
              id: 3,
              name: "欧式"
            },
            {
              id: 4,
              name: "田园"
            },
            {
              id: 2,
              name: "美式"
            },
            {
              id: 3,
              name: "欧式"
            },
            {
              id: 4,
              name: "田园"
            },
            {
              id: 2,
              name: "美式"
            },
            {
              id: 3,
              name: "欧式"
            },
            {
              id: 4,
              name: "田园"
            },
            {
              id: 2,
              name: "美式"
            },
            {
              id: 3,
              name: "欧式"
            },
            {
              id: 4,
              name: "田园"
            },
            {
              id: 2,
              name: "美式"
            },
            {
              id: 3,
              name: "欧式"
            },
            {
              id: 4,
              name: "田园"
            },
            {
              id: 2,
              name: "美式"
            },
            {
              id: 3,
              name: "欧式"
            },
            {
              id: 4,
              name: "田园"
            }
          ]
        }
      ]
    };
  },
  created() {
    let res = [];
    for (let i = 0; i < 10; i++) {
      res.push(this.cabinetList[0]);
    }
    this.cabinetList = res;
  },
  mounted() {},
  methods: {
    goDetail(id) {
      this.$router.push({ name: "goodsinfo", params: { id } });
    },
    handleSlideStart() {},
    handleSlideMove() {},
    handleSlideEnd() {},
    handleMaskClick() {
      this.arrowFlag = true;
      this.$refs.drawer.toggle(false);
    },
    handleToggleDrawer() {
      this.arrowFlag = false;
      this.$refs.drawer.toggle(true);
    },
    pickClass(id) {
      this.pickClassId = id;
    },
    pickTab(id) {
      this.pickTabId = id;
    }
  },
  components: {
    cabinetlist: datalist,
    vueDrawerLayout: DrawerLayout
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.container {
  height: calc(100vh - 0.45rem);
  /deep/ .drawer-layout {
    .drawer-mask {
      box-shadow: 0 5px lightgrey;
      background: transparent;
      border-left: 1px solid lightgrey;
    }
    .content-wrap {
      background-color: #fff;
    }
  }
}

.tabs-container {
  height: 0.45rem;
  font-size: 0.16rem;
  @include flexLayout(nowrap);
  .more-icon {
    svg {
      width: 0.2rem;
      height: 0.2rem;
    }
  }
  .tabs {
    @include flexLayout(nowrap);
    div {
      flex: 1 1 auto;
    }
  }
}
.container /deep/ .data-list {
  @include flexLayout(wrap, row, space-between);
  height: calc(100vh - 0.45rem);
  overflow-y: scroll;
  padding: 0;
  .data-item {
    width: 100%;
    box-shadow: 0 0 0.08rem #ccc;
    margin: 0.05rem 0;
    margin-top: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    min-height: 200px;
    overflow: hidden;
    img {
      width: 100%;
    }
    .title {
      font-size: 0.13rem;
    }
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.03rem;
      height: 0.3rem;
      line-height: 0.3rem;
      background-color: #eee;
      .description {
        padding-left: 0.1rem;
        font-size: 0.13rem;
      }
      .ext-info {
        display: flex;
        justify-content: flex-start;
        padding-right: 0.1rem;
        font-size: 0.13rem;
        align-items: center;
        margin-bottom: 0 !important;
        .views {
          margin-right: 0.1rem;
        }
      }
    }
  }
}
.drawer-hr {
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.06rem;
  margin-block-end: 0.06rem;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
}
.drawer-content {
  font-size: 0.13rem;
  color: rgba(0, 0, 0, 0.4);
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  font-weight: 700;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  padding-bottom: 0.45rem;
  .out-box {
    &:last-child {
      .drawer-hr {
        display: none;
      }
    }
  }
  .header-section {
    height: 0.45rem;
    padding-left: 0.1rem;
    @include flexLayout(nowrap, row, flex-start);
    svg {
      height: 0.2rem;
      width: 0.2rem;
      color: #1ab192;
    }
    .header-content {
      padding-left: 0.05rem;
    }
  }
  .class-section {
    @include flexLayout(wrap, column);
    padding-top: 0.1rem;
    padding-bottom: 0.05rem;
    .class-header {
      width: 100%;
      align-self: flex-start;
      padding-left: 0.1rem;
    }
    .class-content {
      width: 100%;
      @include flexLayout(wrap, row, space-between);
      padding: 0.03rem 0.25rem;
      padding-top: 0.1rem;
      .class-item {
        width: 45%;
        text-align: center;
        border: 1px solid gray;
        height: 0.27rem;
        line-height: 0.27rem;
        margin: 0.05rem;
        border-radius: 2px;
      }
    }
  }
}
.content-section {
  position: relative;
  .more-icon {
    svg {
      position: absolute;
      top: 0.12rem;
      left: 0.1rem;
      height: 0.2rem;
      width: 0.2rem;
      color: #1ab192;
    }
  }
  .tabs-container {
    @include flexLayout(wrap, row);
    .tabs {
      color: #333;
      @include flexLayout(wrap, row);
      div {
        flex: 1;
        width: 1.2rem;
        height: 100%;
        border: 1px solid #1ab192;
        @include flexLayout(wrap);
        &:first-child {
          border-radius: 30px 0 0 30px;
        }
        &:last-child {
          border-radius: 0 30px 30px 0;
        }
      }
    }
  }
}
.pick-item {
  border: 1px solid #1ab192 !important;
}
.pick-tab {
  background-color: #1ab192;
  color: #fff;
}
</style>
