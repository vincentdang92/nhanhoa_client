<template>
    <a-row type="flex" justify="start">
      Trang quản trị
    </a-row>
</template>

<script>
import { getPageSize, setPageSize } from "~/utils/config";
export default {
  head: {
    title: 'Dashboard'
  },
  data() {
    return{
      content: 'Chào bạn đã đến với trang quản trị của phần mềm',
      
    }
  },
  methods: {
    async handleChange(item) {
      setPageSize(item.key);
    },
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/pages/_dashboard.scss";
</style>