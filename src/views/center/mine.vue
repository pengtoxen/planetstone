<template>
  <div class="mine-container">
    <div class="padding"></div>
    <div class="mine-border">
      <div class="mine-border-top">
        <div class="min-border-top-left">
          <div class="mine-border-logo"></div>
          <span class="mine-border-btn">点击登录</span>
        </div>
        <div class="mine-border-invite">
          <span class="mine-border-invite-title">邀请好友</span>
          <span class="mine-border-invite-icon">
            <svg-icon icon-class="right"/>
          </span>
        </div>
      </div>
      <div class="mine-border-bottom">
        <div class="mine-border-gift">
          <span class="mine-border-bottom-num">0</span>
          <span class="mine-border-bottom-title">我的礼包</span>
        </div>
        <div class="mine-border-collect">
          <span class="mine-border-bottom-num">0</span>
          <span class="mine-border-bottom-title">我的收藏</span>
        </div>
        <div class="mine-border-track">
          <span class="mine-border-bottom-num">0</span>
          <span class="mine-border-bottom-title">我的足迹</span>
        </div>
      </div>
    </div>
    <div class="mine-middle">
      <div class="mine-point">
        <span class="mine-point-amount">0</span>
        <span class="mine-point-icon">
          <svg-icon icon-class="point"/>
        </span>
      </div>
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
        <span class="mine-order-header-two">
          <span class="mine-order-header-two-title">全部</span>
          <span class="mine-order-header-two-icon">
            <svg-icon icon-class="right"/>
          </span>
        </span>
      </div>
      <div class="mine-order-line"></div>
      <div class="mine-order-list">
        <div class="mine-order-item">
          <svg-icon icon-class="pay"/>
          <span class="mine-order-item-title">待付款</span>
        </div>
        <div class="mine-order-item">
          <svg-icon icon-class="send"/>
          <span class="mine-order-item-title">待发货</span>
        </div>
        <div class="mine-order-item">
          <svg-icon icon-class="deliver"/>
          <span class="mine-order-item-title">待收货</span>
        </div>
        <div class="mine-order-item">
          <svg-icon icon-class="comment"/>
          <span class="mine-order-item-title">待评价</span>
        </div>
        <div class="mine-order-item">
          <svg-icon icon-class="refund"/>
          <span class="mine-order-item-title">售后服务</span>
        </div>
      </div>
      <div class="mine-order-line"></div>
    </div>
    <div class="mine-menu">
      <div class="mine-menu-item">
        <span class="mine-menu-item-title">优惠券</span>
        <span class="mine-menu-item-icon">
          <svg-icon icon-class="right"/>
        </span>
      </div>
      <div class="mine-menu-item">
        <span class="mine-menu-item-title">积分商城</span>
        <span class="mine-menu-item-icon">
          <svg-icon icon-class="right"/>
        </span>
      </div>
      <div class="mine-menu-item">
        <span class="mine-menu-item-title">我的互动</span>
        <span class="mine-menu-item-icon">
          <svg-icon icon-class="right"/>
        </span>
      </div>
      <div class="mine-menu-item">
        <span class="mine-menu-item-title">客服咨询</span>
        <span class="mine-menu-item-icon">
          <svg-icon icon-class="right"/>
        </span>
      </div>
      <div class="mine-menu-item">
        <span class="mine-menu-item-title">设置</span>
        <span class="mine-menu-item-icon">
          <svg-icon icon-class="right"/>
        </span>
      </div>
    </div>
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

<style lang="scss" scoped>
.mine-container {
  padding: 0 0.12rem;
  padding-bottom: 0 !important;
  background-color: #fff !important;
  background-color: #eeeeee;
  padding-bottom: 50px !important;
}
.padding {
  height: 0.07rem;
}
.mine-border {
  height: 1.5rem;
  border-radius: 0.04rem;
  background-color: #1ab192;
  box-shadow: 0.06rem 0.06rem 0.06rem #ddd;
  .mine-border-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.1rem;
    .min-border-top-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .mine-border-logo {
        width: 0.65rem;
        height: 0.65rem;
        border-radius: 50%;
        background-color: #fff;
        margin-left: 0.1rem;
      }
      .mine-border-btn {
        font-size: 0.13rem;
        margin-left: 0.1rem;
      }
    }
    .mine-border-invite {
      font-size: 0.12rem;
      line-height: 0.12rem;
      background-color: #fff;
      border-radius: 0.1rem 0 0 0.1rem;
      height: 0.25rem;
      width: 0.7rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
  .mine-border-bottom {
    padding-top: 0.2rem;
    display: flex;
    justify-content: space-around;
    font-size: 0.13rem;
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
        font-size: 0.15rem;
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
  height: 0.4rem;
  margin: 0.1rem 0;
  background-color: #f8f8f8;
  border-radius: 0.04rem;
  .mine-point {
    width: 33%;
    .mine-point-icon {
      color: gray;
    }
  }
  .mine-sign {
    width: 66%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .mine-sign-des {
      font-size: 0.105rem;
      color: #333;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;
      margin-right: 0.05rem;
    }
    .mine-sign-btn {
      width: 1rem;
      height: 0.28rem;
      border-radius: 0.05rem;
      background-color: #1ab192;
      color: #fff;
      font-size: 0.12rem;
      line-height: 0.28rem;
      text-align: center;
      vertical-align: center;
    }
  }
  .mine-point {
    color: #1ab192;
    font-size: 0.2rem;
    border-right: 0.5px solid #b4b4b4;
    text-align: center;
  }
}
.mine-order {
  background-color: #fff;
  .mine-order-header {
    font-size: 0.13rem;
    height: 0.2rem;
    line-height: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.08rem;
    .mine-order-header-two {
      color: #333;
    }
  }
  .mine-order-line {
    height: 1px;
    background-color: #e9e9e9;
  }
  .mine-order-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.5rem;
    color: #333;
    margin: 0.05rem 0.05rem;
    .mine-order-item {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      font-size: 0.2rem;
      .mine-order-item-title {
        font-size: 0.125rem;
      }
    }
  }
}
.mine-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.14rem;
  color: #333;
  .mine-menu-item {
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    justify-content: space-between;
    height: 0.45rem;
    line-height: 0.45rem;
    &:nth-last-child(1) {
      border-bottom: none;
    }
  }
}
</style>
