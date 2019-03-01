<template>
  <section>
    <van-list
      class="data-list"
      v-model="settingData.$loading"
      :finished="settingData.$finished"
      :finishedText="settingData.$finishedtext"
      @load="onLoad"
    >
      <div
        class="data-item"
        v-for="(item,index) in settingData.$list"
        :key="index"
        @click="doTask(settingData.$param)"
      >
        <img :src="item.img_url" alt>
        <slot name="one" :oneData="item"></slot>
      </div>
    </van-list>
  </section>
</template>

<script>
export default {
  data() {
    return {
      settingData: {
        $loading: this.loading ? this.loading : false,
        $finished: this.finished ? this.finished : false,
        $finishedtext: this.finishedtext ? this.finishedtext : "没有更多了",
        $list: this.list ? this.list : [],
        $pagi: this.pagi ? this.pagi : 1,
        $limit: this.limit ? this.limit : 10,
        $param: this.param ? this.param : {}
      }
    };
  },
  created() {},
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.settingData.$list.push(this.settingData.$list[0]);
        }
        this.settingData.$loading = false;
        if (this.settingData.$list.length >= 20) {
          this.settingData.$finished = true;
        }
      }, 500);
    },
    doTask(param) {
      this.$router.push({ name: this.target, params: param });
    }
  },
  props: [
    "list",
    "pagi",
    "limit",
    "loading",
    "finished",
    "target",
    "param",
    "finishedtext"
  ]
};
</script>

<style lang="scss" scoped>
.data-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .data-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

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

