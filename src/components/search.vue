<template>
  <div>
    <form action v-on:submit.prevent>
      <van-search
        v-model="settingData.$searchValue"
        :placeholder="settingData.$placeholder"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settingData: {
        $placeholder: this.placeholder ? this.placeholder : "搜索",
        $searchValue: ""
      }
    };
  },
  created() {},
  methods: {
    onSearch: function() {
      console.log(11);
    },
    onCancel: function() {
      this.settingData.$searchValue = "";
    }
  },
  watch: {},
  props: ["placeholder"]
};
</script>
<style lang="scss" scoped>
</style>

