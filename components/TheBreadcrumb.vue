<template>
  <a-breadcrumb style="margin: 5px" :routes="routes">
    <template slot="itemRender" slot-scope="{route, params, routes, paths}">
      <span v-if="routes.indexOf(route) === routes.length - 1">{{route.breadcrumbName}}</span>
      <n-link v-else :to="`${basePath}/${paths.join('/')}`">{{route.breadcrumbName}}</n-link>
    </template>
  </a-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      basePath: ``,
      routesData: [
        {
          path: "",
          breadcrumbName: "Dashboard"
        },
        {
          path: "users",
          breadcrumbName: "Quản trị viên"
        },
        {
          path: "accounts",
          breadcrumbName: "Quản lý tài khoản"
        },
        {
          path: "notifications",
          breadcrumbName: "Thông báo"
        },
        {
          path: "groups",
          breadcrumbName: "Quản lý nhóm"
        },
      ]
    };
  },

  computed: {
    routes() {
      const currentPath = this.$route.path;
      const currentPathData = this.routesData.reduce((acc, cur) => {
        const index = currentPath.split('/').indexOf(cur.path);
        if (index > 0) {
          acc[index - 1] = cur;
        }
        return acc;
      }, []);

      return currentPathData
    }
  }
};
</script>