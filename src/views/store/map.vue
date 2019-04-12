<template>
  <div>
    <div id="map-container"></div>
  </div>
</template>

<script>
import MapLoader from "@/lib/custom/map.js";
import wx from "weixin-jsapi";
import { getWxConfig } from "@/api/common";
export default {
  data() {
    return {
      map: null,
      param: {
        content: "台州椒江洪龙路198号山鑫市场"
      }
    };
  },
  created() {},
  mounted() {
    let that = this;
    MapLoader("qq").then(
      // AMap => {
      //   console.log("地图加载成功");
      //   that.map = new AMap.Map("container", {
      //     resizeEnable: true, //是否监控地图容器尺寸变化
      //     zoom: 11, //初始化地图层级
      //     center: [116.397428, 39.90923] //初始化地图中心点
      //   });
      // },
      qq => {
        var myLatlng = new qq.maps.LatLng(28.619101, 121.400862);
        var myOptions = {
          zoom: 14,
          center: myLatlng,
          mapTypeId: qq.maps.MapTypeId.ROADMAP
        };
        that.map = new qq.maps.Map(
          document.getElementById("map-container"),
          myOptions
        );
        var scaleControl = new qq.maps.ScaleControl({
          align: qq.maps.ALIGN.BOTTOM_LEFT,
          margin: qq.maps.Size(0, 0),
          map: that.map
        });
        var center = new qq.maps.LatLng(28.619101, 121.400862);
        // 创建标记
        var marker = new qq.maps.Marker({
          // 标记的位置
          position: center,
          map: that.map,
          data: that.param
        });
        // 提示窗
        var info = new qq.maps.InfoWindow({
          map: that.map
        });
        //获取标记的点击事件
        qq.maps.event.addListener(marker, "click", function(e) {
          info.open();
          info.setContent(that.makerContet(e.target.data));
          info.setPosition(e.latLng);
        });
        //给地图添加点击事件
        //并获取鼠标点击的经纬度
        // qq.maps.event.addListener(that.map, "click", function(event) {
        //   this.longitude = event.latLng.getLat();
        //   this.latitude = event.latLng.getLng();
        //   alert("经度:" + this.longitude + "," + "纬度:" + this.latitude);
        // });
      },
      e => {
        console.log("地图加载失败", e);
      }
    );
    this.initWxConfig();
  },
  methods: {
    makerContet(item) {
      let href = window.location.origin + "/content-detail?hotelId=" + item.id;
      return `<div style="font-size:15px;">                
                <p style="color: #333333;">${item.content}</p>                
                <a style="font-size:12px;float:right;color:#01CEAD" href="${href}">到这去</a>
            </div>`;
    },
    initWxConfig() {
      getWxConfig()
        .then(data => {
          wx.config({
            debug: true,
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳，精确到秒
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名
            jsApiList: ["scanQRCode"]
          });
        })
        .catch(() => {
          this.$$.msgInf("failed");
        });
    },
    getLocation() {
      wx.getLocation({
        type: "gcj02", // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function(res) {
          qq.maps.convertor.translate(
            new qq.maps.LatLng(
              listdata[sltno].latitude,
              listdata[sltno].longitude
            ),
            3,
            function(ret) {
              var latlng = ret[0];
              openLocation(res, latlng);
            }
          );
        },
        fail: function() {
          this.$$.msgInf("无法获取您的城市信息,请稍后重试!", "提示");
        },
        cancel: function(res) {
          this.$$.msgInf("用户拒绝授权获取地理位置");
        },
        fail: function(res) {
          this.$$.msgInf("获取位置失败");
        }
      });
    },
    openLocation(res, latlng) {
      wx.openLocation({
        latitude: latlng.lat, // 纬度，浮点数，范围为90 ~ -90
        longitude: latlng.lng, // 经度，浮点数，范围为180 ~ -180。
        name: listdata[sltno].name, // 位置名
        address: listdata[sltno].address, // 地址详情说明
        scale: 12, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl:
          "baidumap://map/show?center=" +
          latlng.lng +
          "," +
          latlng.lat +
          "&zoom=11&traffic=on" // 在查看位置界面底部显示的超链接,可点击跳转（测试好像不可用）
      });
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
#map-container {
  width: 100vw;
  height: 100vh;
  padding: 0 !important;
}
</style>
