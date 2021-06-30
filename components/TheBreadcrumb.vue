<template>
  <div class="ant-page-header custom_pageheader">
    <a-breadcrumb separator=">" :routes="routes">
      <template slot="itemRender" slot-scope="{route, params, routes, paths}">
        
        <span v-if="routes.indexOf(route) === routes.length - 1">
          <i v-if="route.icon" :class="route.icon"></i>
          {{route.breadcrumbName}}
        </span>
        <router-link v-else :to="route.path">
          <i v-if="route.icon" :class="route.icon"></i>
          {{route.breadcrumbName}}
        </router-link>
      </template>
    </a-breadcrumb>
   </div>
</template>

<script>
export default {
  data() {
    return {
      routesData: [
        {
          path: "/",
          breadcrumbName: "Trang chủ"
        },
        {
          path: "addfunds",
          breadcrumbName: "Nạp tiền"
        },
        {
          path: "supports",
          breadcrumbName: "Hỗ trợ",
          
        },
        {
          path: 'add-ticket',
          breadcrumbName: 'Gửi ticket',
        },
        {
          path: 'domain-register',
          breadcrumbName: 'Đăng ký tên miền',
        },
      ]
    };
  },
  computed: {
    routes() {
      const currentPath = this.$route.path;
      
      //console.log(currentPath.split('/'));
      var currentPathData = this.routesData.reduce((acc, cur) => {
        const index = currentPath.split('/').indexOf(cur.path);
        if (index > 0) {
          acc[index - 1] = cur;
        }
        return acc;
      }, []);
      // currentPathData.filter((item) => {
      //   if( item.path === 'supports'  ){
      //     item.path = '/'
      //   }
      // });
      return [{breadcrumbName: 'Trang chủ', path: '/', icon:'fas fa-home'},...currentPathData]
    }
  }
};
</script>