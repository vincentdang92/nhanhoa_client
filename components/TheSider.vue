<template>
  <a-layout-sider   :collapsed="collapsed"  :style="!collapsed  ? 'width:290px;max-width: 290px;flex: 0 0 290px;min-width: 290px;' : ''" 
      breakpoint="lg"
      :collapsed-width="!breakPoint ? 80: 0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint" >
    <div class="logo" />
    <a-menu
      mode="inline"
      theme="light"
      :defaultOpenKeys="openKeys"
      :defaultSelectedKeys="[selectedKeys]"
      @select="handleSelectItem"
      style="height: 100%"
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
    icon: 'fal fa-home'
  },
  {
    key: '/1',
    title: 'Nạp tiền',
    configKey:  '',
    icon: 'fal fa-money-bill-alt'
  },
  {
    key: '/2',
    configKey: 'tickets',
    title: 'Gửi ticket',
    icon: 'fal fa-tags',
  },
  {
    key: '/3',
    configKey: 'register_services',
    title: 'Đăng ký dịch vụ',
    icon: 'fal fa-tv',
    children : [
      {
        key: '/4',
        configKey: 'menu1',
        title: 'Đăng ký tên miền',
        icon: 'fal fa-server',
      },
      {
        key: '/5',
        configKey: 'menu2',
        title: 'Giữ chỗ tên miền',
        icon: 'fal fa-server',
      },
      {
        key: '/6',
        configKey: 'menu3',
        title: 'Chuyển tên miền',
        icon: 'fal fa-server',
      },
      {
        key: '/7',
        configKey: 'menu4',
        title: 'Thuê hosting',
        icon: 'fal fa-server',
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