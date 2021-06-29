<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <TheSider collapsible :collapsed="collapsed" />
    <a-layout>
      <TheHeader>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="changeCollapsed"
        />
      </TheHeader>

      <TheBreadcrumb />

      <a-layout-content
        :style="{ margin: '0 0 10px 10px', padding: '10px', background: '#fff', minHeight: '280px' }"
      >
        <nuxt />
      </a-layout-content>
      
    </a-layout>
  </a-layout>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import TheHeader from "~/components/TheHeader";
import TheSider from "~/components/TheSider";
import TheBreadcrumb from "~/components/TheBreadcrumb";

export default {
  middleware: "auth",

  components: {
    TheHeader,
    TheSider,
    TheBreadcrumb
  },

  computed: {
    ...mapState('menu', ['collapsed'])
  },

  data: () => ({
    // collapsed: false
  }),

  methods: {
    changeCollapsed() {
      this.$store.dispatch("menu/changeMenu", !this.collapsed);
    }
  },
  
  mounted() {

  }
};
</script>

<style lang="scss">
@import "~/assets/scss/layouts/_default.scss";
</style>