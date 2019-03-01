<template>
  <div>
    <div class="padding"></div>
    <section class="mine-border">
      <div class="mine-border-top">
        <div class="min-border-top-left">
          <div class="mine-border-logo"></div>
          <span class="mine-border-btn">点击登录</span>
        </div>
        <div class="mine-border-invite">
          <span>邀请好友</span>
        </div>
      </div>
      <div class="mine-border-bottom">
        <div class="mine-border-gift">
          <span class="mine-border-bottom-num">0</span>
          <span class="mine-border-bottom-title">我的礼包</span>
        </div>
        <div class="mine-border-collect">
          <span class="mine-border-bottom-num">0</span>
          <span class="mine-border-bottom-title">我的礼包</span>
        </div>
        <div class="mine-border-track">
          <span class="mine-border-bottom-num">0</span>
          <span class="mine-border-bottom-title">我的礼包</span>
        </div>
      </div>
    </section>
    <div class="mine-middle">
      <div class="mine-point">0</div>
      <div class="mine-sign">
        <div class="mine-sign-des">
          <span class="mine-sign-des-one">连续签到7天</span>
          <span class="mine-sign-des-two">赢取积分大礼包</span>
        </div>
        <div class="mine-sign-btn">去签到</div>
      </div>
    </div>
    <div class="mine-order">
      <div class="mine-order-header">
        <span class="mine-order-header-one">我的订单</span>
        <span class="mine-order-header-two">全部</span>
      </div>
      <div class="mine-order-line"></div>
      <div class="mine-order-item"></div>
    </div>
    <div class="mine-menu">
      <div class="mine-menu-item"></div>
    </div>
    <section class="mine-body"></section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {}
};
</script>

<style lang="scss">
.app-main {
  padding: 0 0.7rem;
  padding-bottom: 0 !important;
  background-color: #fff !important;
}
.padding {
  height: 0.7rem;
}
.mine-border {
  height: 15rem;
  border-radius: 0.4rem;
  background-color: #01cead;
  box-shadow: 0.6rem 0.6rem 0.6rem #ddd;
  .mine-border-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    .min-border-top-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .mine-border-logo {
        width: 6.5rem;
        height: 6.5rem;
        border-radius: 50%;
        background-color: #fff;
        margin-left: 1rem;
      }
      .mine-border-btn {
        font-size: 1.3rem;
        margin-left: 1rem;
      }
    }
    .mine-border-invite {
      font-size: 1.2rem;
      line-height: 1.2rem;
      background-color: #fff;
      border-radius: 1rem 0 0 1rem;
      height: 2.5rem;
      width: 6rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
  .mine-border-bottom {
    padding-top: 2rem;
    display: flex;
    justify-content: space-around;
    font-size: 1.3rem;
    .mine-border-gift,
    .mine-border-collect,
    .mine-border-track {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      width: 100%;
      border-right: 0.1px solid gray;
      .mine-border-bottom-num {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
    .mine-border-track {
      border-right: none;
    }
  }
}
.mine-middle {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4rem;
  margin: 1rem 0;
  .mine-point {
    width: 33%;
  }
  .mine-sign {
    width: 66%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .mine-sign-des {
      font-size: 1.05rem;
      color: #b4b4b4;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;
      margin-right: 0.5rem;
    }
    .mine-sign-btn {
      width: 10rem;
      height: 2.8rem;
      border-radius: 0.5rem;
      background-color: #00af8d;
      color: #fff;
      font-size: 1.2rem;
      line-height: 2.8rem;
      text-align: center;
      vertical-align: center;
    }
  }
  .mine-point {
    color: #00af8d;
    font-size: 2rem;
    border-right: 0.5px solid #b4b4b4;
    text-align: center;
  }
}
.mine-order {
  background-color: #fff;
  .mine-order-header {
    font-size: 1.2rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .mine-order-header-two {
      color: #b4b4b4;
    }
    &::after{
        height: 1px;
        background-color: #e9e9e9;
    }
  }
}
</style>
