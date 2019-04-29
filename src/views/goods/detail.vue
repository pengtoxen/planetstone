<template>
  <div>
    <swiper :photoList="sliderList"></swiper>
  </div>
</template>

<script>
import swiper from "@/components/swiper.vue";
export default {
  data() {
    return {
      sliderList: [
        {
          img:
            "http://pic.linshimuye.com/image/-1/2018-11-12-048762ee39b7-45ea-9548-1c843e9c01fe.jpg"
        },
        {
          img:
            "http://pic.linshimuye.com/image/-1/2018-11-12-048762ee39b7-45ea-9548-1c843e9c01fe.jpg"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
  components: {
    swiper
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
</style>