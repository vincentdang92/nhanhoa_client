<template>
      <a-layout-content
        :style="{ margin: '0 0 10px 10px', padding: '10px', background: '#fff', minHeight: '280px' }"
      >
        <nuxt />
      </a-layout-content>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  middleware: "auth",
  mounted() {

  }
};
</script>
<style lang="scss">
@import "~/assets/scss/layouts/_print.scss";
</style>