<template>
    <a-row :gutter="16" class="dashboard_card mt-2">
      <a-col class="gutter-row" :span="5">
        <div class="gutter-box">
          <div class="card card-hover-1 border-left border-orange">
              <div class="card-body">
                  <div class="d-flex no-block align-items-center">
                      <div>
                          <span class="text-orange  display-6"><i class=" icon_xl fas fa-globe"></i></span>
                      </div>
                      <div class="ml-auto">
                          <h2 class="text-orange">290</h2>
                          <h6 class="text-orange">
                            <nuxt-link class="text-orange" to="/">Gia hạn tên miền</nuxt-link>
                          </h6>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="5">
        <div class="gutter-box">
          <div class="card card-hover-1 border-left border-info">
              <div class="card-body">
                  <div class="d-flex no-block align-items-center">
                      <div>
                          <span class="text-info   display-6"><i class=" icon_xl fas fa-file-invoice"></i></span>
                      </div>
                      <div class="ml-auto">
                          <h2 class="text-info">290</h2>
                          <h6 class="text-info">Đơn hàng chờ thanh toán</h6>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="5">
        <div class="gutter-box">
          <div class="card card-hover-1 border-left border-success">
              <div class="card-body">
                  <div class="d-flex no-block align-items-center">
                      <div>
                        <span class="text-info  display-6"><i class="icon_xl fas fa-file-invoice"></i></span>
                      </div>
                      <div class="ml-auto">
                          <h2 class="text-info">290</h2>
                          <h6 class="text-info">Dịch vụ cần gia hạn</h6>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="9">
        <div v-for="i in 2" :key="i" class="gutter-box">
          <div class="card">
              <div class="card-body text-center">
                  <h4 class="card-title">Thông tin cá nhân</h4>
                  <div class="profile-pic mb-3 mt-3">
                      <img src="https://wrappixel.com/demos/admin-templates/materialpro-bootstrap-latest/material-pro/src/assets/images/users/5.jpg" width="150" class="rounded-circle" alt="user">
                      <h4 class="mt-3 mb-0">Daniel Kristeen</h4>
                      <a href="mailto:danielkristeen@gmail.com">danielkristeen@gmail.com</a>
                      <h4>Số dư tài khoản:
                      
                      </h4>
                      <a href="javascript:void(0)" class="mt-1 waves-effect waves-dark btn btn-info btn-md btn-rounded">59.100 đ</a>
                  </div>
                  <div class="row text-center mt-5">
                      <div class="col-4">
                          <h3 class="fw-bold text-warning ">
                            <i class="fas fa-star icon_xl"></i>
                          </h3>
                          <h6>Thành viên vàng</h6></div>
                      <div class="col-4">
                          <h3 class="fw-bold">2</h3>
                          <h6>Open</h6></div>
                      <div class="col-4">
                          <h3 class="fw-bold">3</h3>
                          <h6>Closed</h6></div>
                  </div>
              </div>
              <div class="p-4 border-top mt-3">
                  
              </div>
          </div>
          <!-- END CARD-->
          
        </div>
        
      </a-col>
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