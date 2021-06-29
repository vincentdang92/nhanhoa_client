<template>
  <a-form
    :form="form"
    class="form-auth-custom"
    @submit.prevent="submit"
  >
  <h1 :class="'form-auth__title'">Login</h1>
    <a-form-item
    >
      <a-input
        v-decorator="emailDecorator"
        placeholder="email"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item
    >
      <a-input
        v-decorator="passwordDecorator"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item >
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
        Remember me
      </a-checkbox>
      <a class="login-form-forgot" href="">
        Forgot password
      </a>
      <a-button  type="primary" html-type="submit" class="login-form-button">
        Log in
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
        title: "Hệ thống quản lý công ty Lộc Phát Bio Plastics"
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
                    { required: true, message: "Bạn chưa điền email." },
                    { type: "email", message: "Hãy nhập đúng định dạng email." },
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
        }
    },
    
};
</script>