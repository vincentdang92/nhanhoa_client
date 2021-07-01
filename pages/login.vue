<template>
  <a-form
    :form="form"
    class="form-auth-custom"
    @submit.prevent="submit"
  >
  <h1 >
    <img src="~/assets/imgs/logo-main.png" alt="Đăng nhập tài khoản Nhân Hòa" />
  </h1>
  <h2 :class="'form-auth__title'">Đăng nhập tài khoản</h2>
    <a-form-item
    >
      <a-input
        v-decorator="emailDecorator"
        placeholder="Nhân Hòa ID"
         allow-clear
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item
    >
      <a-input
        v-decorator="passwordDecorator"
        type="password"
        placeholder="Mật khẩu"
        allow-clear
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item></a-form-item>
      <recaptcha
        @error="onError"
        @success="onSuccess"
        @expired="onExpired"
      />
    <a-form-item  class="action_item">
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
        @change="handleChange"
      >
        Nhớ tài khoản
      </a-checkbox>
      <a class="login-form-forgot" href="">
        Quên mật khẩu?
      </a>
      <a-button  type="primary" html-type="submit" class="login-form-button">
        Đăng nhập
      </a-button>

    </a-form-item>
  </a-form>
</template>

<script>
export default {
    layout: "auth",
    beforeCreate() {
      this.form = this.$form.createForm(this, { name: 'normal_login' });
    },
    head() {
      return {
        title: "Trang quản lý dịch vụ Nhân Hòa"
      };
    },
    data() {
        return {
            checkRemember: false,
            buttonLoading: false,
            form: this.$form.createForm(this, { name: "login" }),
            emailDecorator: [
                "email",
                {
                rules: [
                    { required: true, message: "Bạn chưa điền ID." },
                   
                    { whitespace: true, message: "Không cho phép khoảng trắng." }
                ]
                }
            ],
            passwordDecorator: [
                "password",
                {
                rules: [
                    { required: true, message: "Bạn chưa điền mật khẩu." },
                    { whitespace: true, message: "Không cho phép khoảng trắng." },
                    {
                    min: 6,
                    message: "Mật khẩu phải có ít nhất 6 ký tự."
                    }
                ]
                }
            ]
        };
    },
    methods: {
      async submit() { 
          this.buttonLoading = true;
          const hideLoginMessage = this.$message.loading("Đang tiến hành đăng nhập...", 0);
          const token = await this.$recaptcha.getResponse();
          console.log();
          this.form.validateFields(async (err) => {
            if (!err) {
              const doLogin = await this.$store.dispatch(
                "auth/login",
                this.form.getFieldsValue()
              );

              if (doLogin.success) {
                setTimeout(hideLoginMessage, 1);
                const hideConfigMessage = this.$message.loading("Đang lấy thông tin tài khoản");
                setTimeout(hideLoginMessage, 1);
                this.$message.success("Đăng nhập thành công");
                this.$router.push("/");
              } else {
                setTimeout(hideLoginMessage, 1);
                doLogin.message
                  ? this.$message.error(doLogin.message)
                  : this.$message.error("Có lỗi xảy ra. Hãy thử lại sau!");
              }
            }
            else{
              setTimeout(hideLoginMessage, 1);
            }
          });
          this.buttonLoading = false;
        },
        handleChange(e) {
          this.checkRemember = e.target.checked;
        },
        onError(){

        },
        onSuccess(){

        },
        onExpired(){

        }
    },
    
};
</script>
<style lang="scss">
  // @font-face {
  //   font-family: 'SFUHelveticaBlack';
  //   src: url("~/assets/fonts/sfuhelveticablack.ttf") format("truetype");
  // }
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@700&display=swap');
  .form-auth-custom{
    h1{
      height: 50px;
      display: block;
      width: 200px;
      margin: 10px auto;
      margin-top: 0;
      img{
        width: 100%;
      }
    }
    h2{
      font-size: 1.5em;
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
      text-transform: uppercase;
      color: #3b88c8;
    }
    .ant-input, .ant-form-explain{
      text-align: left;
    }
    .ant-input, .login-form-button {
      height: 50px;
      line-height: 50px;
    }
  }
</style>