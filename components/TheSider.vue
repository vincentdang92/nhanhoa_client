<template>
  <a-layout-sider class=""   :collapsed="collapsed"  :style="!collapsed  ? 'width:290px;max-width: 290px;flex: 0 0 290px;min-width: 290px;' : ''" 
      breakpoint="lg"
      :collapsed-width="!breakPoint ? 80: 0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint" >
      <div class="logo"></div>
    <a-menu
      mode="inline"
      theme="light"
      :defaultOpenKeys="openKeys"
      :defaultSelectedKeys="[selectedKeys]"
      @select="handleSelectItem"
      style="height: 100%;"
    >
      <!-- <n-link to="/" class="sidebar_menu__logo">
        <img src="@/assets/imgs/logo.png"/>
        
      </n-link> -->

      <template v-for="item in privateMenu">
        <a-menu-item v-if="!item.children" :key="item.key">
          <i v-if="item.icon" :class="item.icon"> </i>
           <span>{{ item.title }}</span>
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
    title: 'Trang chủ',
    configKey:  '',
    icon: 'fas fa-home'
  },
  {
    key: '/addfunds',
    title: 'Nạp tiền',
    configKey:  '',
    icon: 'fas fa-money-bill-alt'
  },
  {
    key: '/supports/add-ticket',
    configKey: 'tickets',
    title: 'Gửi ticket',
    icon: 'fas fa-tags',
  },
  {
    key: 'services-register',
    configKey: 'services_register',
    title: 'Đăng ký dịch vụ',
    icon: 'fas fa-tv',
    children : [
      {
        key: '/domain-register',
        configKey: 'menu1',
        title: 'Đăng ký tên miền',
        icon: 'fas fa-globe',
      },
      {
        key: '/domain-transfer',
        configKey: 'menu2',
        title: 'Chuyển tên miền',
        icon: 'fas fa-globe',
      },
      
    ]
  },
  {
    key: 'orders',
    configKey: 'orders',
    title: 'Danh sách đơn hàng',
    icon: 'fas fa-file-spreadsheet',
    children : [
      {
        key: 'orders/queue',
        configKey: 'queue',
        title: 'Đang chờ',
        icon: 'fas fa-globe',
      },
      {
        key: 'pending',
        configKey: 'pending',
        title: 'Đang khởi tạo',
        icon: 'fas fa-globe',
      },
      
      
    ]
  },
  {
    key: 'supports',
    configKey: 'supports',
    title: 'Hỗ trợ',
    icon: 'fas fa-comments',
    children : [
      {
        key: '/pending',
        configKey: 'pending',
        title: 'Đang chờ',
        icon: 'fas fa-globe',
      },
      {
        key: '/processing',
        configKey: 'processing',
        title: 'Đang xử lý',
        icon: 'fas fa-globe',
      },
      {
        key: '/replied',
        configKey: 'replied',
        title: 'Đã trả lời',
        icon: 'fas fa-exchange',
      },
      
      
    ]
  },
  


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
      menu: Object.freeze(initialMenu),
      breakPoint:false
    };
  },

  computed: {
    selectedKeys() {
      console.log(this.$route.path);
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
    },
    onCollapse(collapsed, type) {
      // this.$store.dispatch("menu/changeMenu", !collapsed);
      console.log('onCollapse',collapsed, type);
      if(type === 'responsive'){
        this.breakPoint = true;

      }
      else{
        this.breakPoint = false;
      }
    },
    onBreakpoint(broken) {
      this.breakPoint = broken;
      console.log('onBreakpoint',broken);
    },
  }
};
</script>

<style lang="scss">
  
  
</style>