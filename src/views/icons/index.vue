<template>
  <div class="icons-container">
    <div class="icons-wrapper">
      <div
        class="icon-item"
        v-for="item of iconsMap"
        :key="item"
        @click="handleClipboard(generateIconCode(item),$event)"
      >
        <svg-icon :icon-class="item"/>
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import icons from "@/icons/generateIconsView";
import clipboard from "@/utils/clipboard";

export default {
  name: "icons",
  data() {
    return {
      iconsMap: []
    };
  },
  mounted() {
    const iconsMap = icons.state.iconsMap.map(i => {
      return i.default.id.split("-")[1];
    });
    this.iconsMap = iconsMap;
  },
  methods: {
    generateIconCode(symbol) {
      return `<svg-icon icon-class="${symbol}" />`;
    },
    handleClipboard(text, event) {
      clipboard(text, event);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.icons-container {
  margin: 10px 20px 0;
  overflow: hidden;
  .icons-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    &:after {
      content: "";
      flex: auto;
    }
    .icon-item {
      margin: 20px;
      height: 110px;
      text-align: center;
      width: 110px;
      font-size: 30px;
      color: #24292e;
      cursor: pointer;
    }
    span {
      display: block;
      font-size: 24px;
      margin-top: 10px;
    }
  }
}
</style>
