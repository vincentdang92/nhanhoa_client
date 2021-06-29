<template>
  <a-layout-header class="the-header" style="background: #fff; padding: 0">
    
    <a-menu theme="light" mode="horizontal" :selectable="false" :style="{ lineHeight: '64px', textAlign: 'center' }">
      <slot style="float: left"/>
      <a-menu-item class="title-header">
      Trang quản lý dịch vụ Nhân Hòa
      </a-menu-item>
      <!-- User -->
      <a-menu-item v-if="isAuthenticated" class="the-header__user">
        <a-dropdown>
          <a class="ant-dropdown-link" href="#">
            <a-icon type="user" class="mr-2" />
            {{ userEmail }} -- {{userName}}
            <a-icon type="down" />
          </a>
          
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="#" @click.prevent="showModalChangeProfile">
                <a-icon type="profile" class="mr-2" /> Cập nhật profile
              </a>
              </a-menu-item>
              <a-menu-item>
            
              <a href="#" @click.prevent="logout">
                <a-icon type="logout" class="mr-2" /> Đăng xuất
              </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-menu-item>
      <!-- FAKE USER-->
      <a-menu-item v-else class="the-header__user">
        <a-dropdown>
          <a class="ant-dropdown-link" href="#">
            <span class="welcome_name">
              Xin chào, Nguyễn
            </span>
            <span>
              <img src="~/assets/imgs/user-1.png" />
            </span>
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="#" @click.prevent="showModalChangeProfile">
                <a-icon type="profile" class="mr-2" /> Cập nhật profile
              </a>
              </a-menu-item>
              <a-menu-item>
            
              <a href="#" @click.prevent="logout">
                <a-icon type="logout" class="mr-2" /> Đăng xuất
              </a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-menu-item>
      
    </a-menu>
    
    <a-modal
      title="Cập nhật profile"
      :visible="modalChangeProfileShow"
      :width="600"
      :footer="null"
      @ok="hiddenModalChangeProfile"
      @cancel="hiddenModalChangeProfile"
    >
      <TheEditProfile v-if="modalChangeProfileShow" @submitted="hiddenModalChangeProfile" :initialValues="{ email: userEmail,name: userName}" />
    </a-modal>
  </a-layout-header>
</template>

<script>
import TheEditProfile from './TheEditProfile';
export default {
  data() {
    return {
      modalChangeProfileShow: false,
    }
  },

  components: {
    TheEditProfile
  },

  computed: {
    userEmail() {
      return this.$store.state.auth.token.userEmail;
    },

    userName() {
      return this.$store.state.auth.token.userName;
    },
    
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated']
    }
  },

  methods: {
    showModalChangeProfile() {
      this.modalChangeProfileShow = true;
    },
    hiddenModalChangeProfile() {
      this.modalChangeProfileShow = false;
    },
    async logout() {
      const doLogout = await this.$store.dispatch('auth/logout');
      if(doLogout.status == 'success') {
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/components/_the-header.scss";
</style>