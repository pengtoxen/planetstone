<template>
  <div class="container">
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
</template>

<script>
import datalist from "@/components/dataList.vue";
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
  methods: {
    goDetail(id) {
      this.$router.push({ name: "goodsinfo", params: { id } });
    }
  },
  components: {
    cabinetlist: datalist
  }
};
</script>
<style lang="scss" scoped>
.container /deep/ .data-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;
  .data-item {
    width: 100%;
    box-shadow: 0 0 0.8rem #ccc;
    margin: 0.5rem 0;
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
      font-size: 1.4rem;
    }
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.3rem;
      height: 3rem;
      line-height: 3rem;
      background-color: #eee;
      .description {
        padding-left: 1rem;
      }
      .ext-info {
        display: flex;
        justify-content: flex-start;
        padding-right: 1rem;
        font-size: 1.15rem;
        .views {
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
