<template>
  <div class="container">
    <vueDrawerLayout
      ref="drawer"
      :drawer-width="250"
      :enable="true"
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
            <svg-icon icon-class="attention"/>
            <div class="header-content">图库筛选</div>
          </div>
          <hr class="drawer-hr">
        </div>
        <div class="out-box" v-for="(item,index) in classData" :key="index
        ">
          <div class="class-section">
            <div class="class-header">{{item.className}}</div>
            <div class="class-content">
              <div class="class-item" v-for="(v,k) in item.dataList" :key="k">{{v.name}}</div>
            </div>
          </div>
          <hr class="drawer-hr">
        </div>
      </div>
      <div slot="content" class="content-section">
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
      pageindex: 1, // 分页的页数
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
    handleMaskClick() {}
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
  font-size: 12px;
}
</style>
