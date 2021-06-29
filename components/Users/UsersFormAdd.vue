<template>
  <a-form :form="form">
    <a-row :gutter="24">
      <a-col v-for="(value, key) in data" :key="key" :span="12">
        <a-form-item v-if="key === 'password_confirmation'" :label="value.title">
          <a-input
            type="password"
            v-decorator="[value.decorator[0], { rules: [ ...value.decorator[1].rules, { validator: rePasswordValidator, message: 'Mật khẩu xác nhận phải trùng với mật khẩu bạn đã điền' } ]}]"
            :placeholder="`Nhập ${value.title}`"
          />
        </a-form-item>

        <a-form-item v-else :label="value.title">
          <a-input :type="key === 'password' ? 'password' : 'text'" v-decorator="value.decorator" :placeholder="`${value.title}`" />
        </a-form-item>
      </a-col>

      <a-col :span="24">
        <a-form-item>
          <a-button type="primary" @click="submit" :loading="buttonLoading">Thêm người dùng</a-button>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
import { users as usersValidation } from "~/utils/validations";

const data = {
  name: {
    title: "Tên",
    decorator: usersValidation.name
  },
  email: {
    title: "Email",
    decorator: usersValidation.email
  },
  password: {
    title: "Mật khẩu",
    decorator: usersValidation.password
  },
  password_confirmation: {
    title: "Nhập lại mật khẩu",
    decorator: usersValidation.password_confirmation
  }
};

export default {
  data() {
    return {
      data,
      buttonLoading: false,
      form: this.$form.createForm(this, { name: "add" })
    };
  },

  methods: {
    submit(e) {
      e.preventDefault();
      this.form.validateFields(async (error, values) => {
        if (!error) {
          this.buttonLoading = true;
          const doAdd = await this.$store.dispatch(
            "users/create",
            values
          );

          if (doEdit.status == "error") {
            this.$message.error(doEdit.message);
          } else {
            this.$message.success("Thêm quản trị thành công");
            this.$emit("submitted");
          }
        }
        this.buttonLoading = false;
      });
    },

    rePasswordValidator(rule, value, cb) {
      const password = this.form.getFieldValue('password');
      if (password && password === value) return cb();
      return false;
    }
  }
};
</script>
