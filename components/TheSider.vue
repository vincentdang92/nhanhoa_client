<template>
  <a-layout-sider :trigger="null" collapsible :collapsed="collapsed" :width="230">
    <a-menu
      mode="inline"
      theme="dark"
      :defaultOpenKeys="openKeys"
      :defaultSelectedKeys="[selectedKeys]"
      @select="handleSelectItem"
      style="height: 100%"
    >
      <n-link to="/" class="the-sider__logo" style="background: #fff">
        <img src="@/assets/imgs/logo.jpg"/>
        <!-- <img src="http://locphatbioplastics.com/vi/images/Main_index_images/logo.png" alt /> -->
      </n-link>

      <template v-for="item in privateMenu">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon v-if="item.icon" :type="item.icon" />
          <span>{{item.title}}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.key" />
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { isEmpty } from 'lodash';
import TheSiderSubMenu from './TheSiderSubMenu';

const initialMenu = [
  {
    key: '/',
    title: 'Dashboard',
    configKey:  '',
    icon: 'dashboard'
  },
  {
    key: '/users',
    configKey: 'users',
    title: 'Quản trị viên',
    icon: 'cluster',
  },
  {
    key: '/employees',
    configKey: 'employees',
    title: 'Quản lý nhân viên',
    icon: 'user',
  },
  // {
  //   key: '/containers',
  //   configKey: 'containers',
  //   title: 'Quản lý xe tải',
  //   icon: 'cluster',
  // },
  {
    key: '/customers',
    configKey: 'customers',
    title: 'Quản lý khách hàng',
    icon: 'cloud',
  },
  {
    key: '/suppliers',
    configKey: 'suppliers',
    title: 'Quản lý nhà cung ứng',
    icon: 'rocket',
  },
  {
    key: '/warehouses',
    configKey: 'warehouses',
    title: 'Quản lý kho',
    icon: 'bank',
    children : [
      {
        key: '/warehouses',
        configKey: 'warehouses',
        title: 'Danh sách kho',
        icon: 'unordered-list',
      },
      {
        key: '/warehouses/imports',
        configKey: 'imports',
        title: 'Nhập kho',
        icon: 'import',
      },
      {
        key: '/warehouses/exports',
        configKey: 'exports',
        title: 'Xuất kho',
        icon: 'export',
      },
      {
        key: '/warehouses/rotations',
        configKey: 'rotations',
        title: 'Điều kho',
        icon: 'swap',
      },
      {
        key: '/warehouses/report',
        configKey: 'report',
        title: 'Báo biểu tồn kho',
        icon: 'dot-chart',
      }
    ]
  },
  {
    key: '/met',
    configKey: 'met',
    title: 'Quản lý mã vật tư',
    icon: 'build',
    children : [
      {
        key: '/products',
        configKey: 'products',
        title: 'Mã liệu',
        icon: 'qrcode',
      },
      {
        key: '/products_2/',
        configKey: 'products',
        title: 'Mã màng',
        icon: 'barcode',
      },
      {
        key: '/products_3/',
        configKey: 'products',
        title: 'Mã định hình',
        icon: 'gold',
      },
      {
        key: '/products_4/',
        configKey: 'products',
        title: 'Mã phối phương',
        icon: 'deployment-unit',
      },
      {
        key: '/tag-one/',
        configKey: 'tag-one',
        title: 'Đơn vị tính',
        icon: 'tag',
      },
      {
        key: '/product_others/',
        configKey: 'products',
        title: 'Sản phẩm khác',
        icon: 'number',
      }
    ]
  },
  // {
  //   key: '/purchase-order',
  //   configKey: 'purchase-order',
  //   title: 'Quản lý mua hàng',
  //   icon: 'container',
  // }


];

export default {
  components: {
    'sub-menu': TheSiderSubMenu
  },

  props: {
    collapsed: Boolean
  },

  data() {
    return {
      menu: Object.freeze(initialMenu)
    };
  },

  computed: {
    selectedKeys() {
      return this.$route.path;
    },

    openKeys() {
      const splitedPath = this.$route.path.split('/');
      if (splitedPath.length <= 1) {
        return splitedPath[0];
      } else {
        const tmp = splitedPath.map(item => '/' + item);
        return tmp.slice(1, tmp.length);
      }
    },

    privateMenu() {
      const menuConfig = this.$store.getters['config/menu'];
      return this.menu;
    }
  },

  methods: {
    handleSelectItem({ item, key, selectedKeys }) {
      const route = selectedKeys.reverse().join('');
      this.$router.push(route);
    }
  }
};
</script>

<style lang="scss">
@import '~/assets/scss/components/_the-sider.scss';
</style>