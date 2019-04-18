<template>
  <div class="search-container">
    <search
      :placeholder="settingData.$placeholder"
      :cancel-text="settingData.$cancelText"
      v-model="settingData.$searchValue"
      :results="settingData.$results"
      :auto-fixed="settingData.$autoFixed"
      :top="settingData.$fixedTop"
      :position="settingData.$position"
      :auto-scroll-to-top="settingData.$autoScrollToTop"
      @on-submit="onSubmit"
      @on-cancel="onCancel"
      @on-change="onChange"
      @on-result-click="resultClick"
      @on-focus="onFocus"
      @on-blur="onBlur"
      @on-clear="onClear"
      ref="search"
    ></search>
  </div>
</template>

<script>
import { Search } from "vux";
export default {
  data() {
    return {
      settingData: {
        $placeholder: this.placeholder,
        $cancelText: this.cancelText,
        $searchValue: this.searchValue,
        $searchResults: this.searchResults,
        $autoFixed: this.autoFixed,
        $fixedTop: this.fixedTop,
        $position: this.position,
        $autoScrollToTop: this.autoScrollToTop
      }
    };
  },
  components: {
    Search
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.searchValue);
    },
    onCancel() {
      this.$emit("onCancel", this.searchValue);
    },
    onChange() {
      this.$emit("onChange", this.searchValue);
    },
    resultClick(item) {
      this.$emit("resultClick", item);
    },
    onFocus() {
      this.$emit("onFocus");
    },
    onBlur() {
      this.$emit("onBlur");
    },
    onClear() {
      this.$emit("onClear");
    }
  },
  props: {
    placeholder: {
      type: String,
      default: "有问题，点我搜搜看"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    searchValue: {
      type: String,
      default: ""
    },
    searchResults: {
      type: Array,
      default: function() {
        return [];
      }
    },
    autoFixed: {
      type: Boolean,
      default: true
    },
    fixedTop: {
      type: String,
      default: "0px"
    },
    position: {
      type: String,
      default: "relative"
    },
    autoScrollToTop: {
      type: Boolean,
      default: true
    }
  },
  created: function() {
    console.log(this.$props);
  }
};
</script>
<style lang="scss" scoped>
.search-container {
  font-size: 0.14rem;
}
</style>