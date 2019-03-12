<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import MapLoader from "@/lib/custom/map.js";
export default {
  data() {
    return {
      map: null
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
        var myLatlng = new qq.maps.LatLng(39.916527, 116.397128);
        var myOptions = {
          zoom: 8,
          center: myLatlng,
          mapTypeId: qq.maps.MapTypeId.ROADMAP
        };
        that.map = new qq.maps.Map(
          document.getElementById("container"),
          myOptions
        );
        var center = new qq.maps.LatLng(39.916527, 116.397128);
        // 创建标记
        var marker = new qq.maps.Marker({
          // 标记的位置
          position: center,
          map: that.map
        });
        // 提示窗
        var info = new qq.maps.InfoWindow({
          map: that.map
        });
        // 悬浮标记显示信息
        qq.maps.event.addListener(marker, "mouseover", function() {
          console.log(11)
          info.open();
          info.setContent(`<div style="margin:10px;">123</div>`);
          info.setPosition(center);
        });
        qq.maps.event.addListener(marker, "mouseout", function() {
          info.close();
        });
      },
      e => {
        console.log("地图加载失败", e);
      }
    );
    // this.renderFootCss();
  },
  methods: {
    // renderFootCss() {
    //   if (this.$route.meta.footTabCss) {
    //     document.getElementById("app-main-container").style.paddingBottom = "0";
    //   }
    // }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
#container {
  width: 100vw;
  height: 100vh;
  padding: 0 !important;
}
</style>
