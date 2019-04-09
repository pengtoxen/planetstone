<template>
  <div class="sign-container">
    <div class="sign-banner-section">
      <img src="~@/assets/images/center/sign-header.png" alt>
      <span class="sign-num">
        我的积分:
        <em>10</em>
      </span>
    </div>
    <div class="sign-info-section">
      <div class="sign-info-text">
        <div>
          <div class="curno">{{infData.conCnt}}</div>
          <div class="totno">/{{infData.totCnt}}</div>
        </div>
      </div>
      <div class="sign-info-subject">
        已经连续签到
        <span class="curno">{{infData.conCnt}}</span>
        天
      </div>
    </div>
    <div class="sign-stars-section">
      <ul class="sign-stars">
        <li v-for="(item,index) in stars" :key="index">
          <img v-if="item.sign" src="~@/assets/images/center/sign-star.png" alt>
          <img v-else src="~@/assets/images/center/no-sign-star.png" alt>
          <div class="sign-stars-text">{{item.date}}</div>
        </li>
      </ul>
    </div>
    <div class="sign-btn-section">
      <div class="sign-btn-line"></div>
      <img
        src="~@/assets/images/center/btn-sign.png"
        alt
        :class="{ 'to-grey': infData.isSign }"
      >
    </div>
    <div class="sign-des-section">
      <div class="sign-des-title">签到规则</div>
      <div class="sign-des-detail">{{infData.des | nToBr}}</div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      infData: {
        conCnt: 3,
        curtime: 1554710894,
        des: "1、签到送5积分 2、连续签到每次加1积分",
        isSign: 0,
        totCnt: 7
      },
      stars: []
    };
  },
  created() {
    this.initStars();
  },
  mounted() {},
  methods: {
    initStars() {
      let curdate = new Date(this.infData.curtime * 1000);
      let bn = this.infData.conCnt;
      if (this.infData.isSign === 1) {
        bn--;
      }
      let iterdate = new Date((this.infData.curtime - bn * 86400) * 1000);
      let isSign = true;
      for (let i = 0; i < this.infData.totCnt; i++) {
        if (i > 0) {
          iterdate.setDate(iterdate.getDate() + 1);
        }
        if (i >= this.infData.conCnt) {
          isSign = false;
        }
        this.stars.push({
          sign: isSign,
          date: iterdate.getDate()
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.sign-container {
  height: 100vh;
  background: linear-gradient(rgb(238, 47, 75), rgb(238, 54, 40));
  .sign-banner-section {
    img {
      width: 100%;
    }
    .sign-num {
      padding: 0.08rem 0.12rem;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      position: absolute;
      left: 0.12rem;
      top: 0.15rem;
      border-radius: 30px;
      em {
        font-style: normal;
      }
    }
  }
  .sign-info-section {
    position: relative;
    width: 100%;
    height: 0.5rem;
    background-position: left top;
    background-image: url("~@/assets/images/center/sign-line1.png");
    background-repeat: no-repeat;
    .sign-info-text {
      position: absolute;
      width: 0.44rem;
      height: 0.44rem;
      top: 0.03rem;
      left: 0.19rem;
      @include flexLayout();
      word-break: break-all;
      overflow: hidden;
      div {
        display: inline-block;
        font-size: 0.15rem;
        color: #fff;
        .curno {
          color: rgb(233, 161, 26);
          font-size: 0.15rem;
        }
        .divider-line1-text .totno {
          color: #ffffff;
          font-size: 0.12rem;
        }
      }
    }
    .sign-info-subject {
      text-align: center;
      position: relative;
      top: 0.4rem;
      color: #fff;
      font-size: 0.16rem;
    }
  }
  .sign-stars-section {
    height: 1.16rem;
    padding-top: 0.2rem;
    .sign-stars {
      overflow-y: hidden;
      overflow-x: scroll;
      display: inline-block;
      word-wrap: keep-all;
      white-space: nowrap;
      margin: 0;
      padding: 0 0 0 0.04rem;
      font-size: 0;
      li {
        position: relative;
        display: inline-block;
        padding: 0 0.04rem;
        font-size: 0.14rem;
        .sign-stars-text {
          position: absolute;
          width: 0.35rem;
          height: 0.35rem;
          top: 0.09rem;
          left: 0.21rem;
          font-size: 0.09rem;
          @include flexLayout();
        }
      }
    }
  }
  .sign-btn-section {
    position: relative;
    width: 100%;
    text-align: center;
    padding: 0.3rem 0;
    .sign-btn-line {
      position: absolute;
      top: 0.21rem;
      width: 100%;
      height: 0.05rem;
      background: url("~@/assets/images/center/sign-line2.png") repeat-x;
      z-index: 1;
    }
  }
  .sign-des-section {
    font-size: 0.15rem;
    color: #fff;
    padding: 0 0.12rem 0.2rem 0.12rem;
  }
}
</style>
