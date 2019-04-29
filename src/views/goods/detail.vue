<template>
  <div>
    <swiper :photoList="sliderList" :height="'auto'"></swiper>
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
            "http://pic.linshimuye.com/image/-1/2018-7-4-fba41500fc08-492b-87e9-4c88f482b3cd.jpg@750h_750w_1e_1c_0l_1wh"
        },
        {
          img:
            "http://pic.linshimuye.com/image/-1/2018-7-4-8af1abc83220-408e-8234-745b89ed0e75.jpg@750h_750w_1e_1c_0l_1wh"
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