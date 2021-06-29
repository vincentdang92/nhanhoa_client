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
          <a-input v-if="key === 'password'" type="password" v-decorator="value.decorator" :placeholder="`${value.title}`" />
          <a-input v-else v-decorator="[value.decorator[0], {...value.decorator[1], initialValue: initialValues[key]}]" :placeholder="`Nhập ${value.title}`" />
          <!-- <a-input :type="key === 'password' ? 'password' : 'text'" v-decorator="[value.decorator[0], {...value.decorator[1], initialValue: key !== 'password' ? initialValues[key] : ''}]" :placeholder="`Nhập ${value.title}`" /> -->
        </a-form-item>
      </a-col>

      <a-col :span="24">
        <a-form-item>
          <a-button type="primary" @click="submit" :loading="buttonLoading">Sửa người dùng</a-button>
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
  props: {
    initialValues: {
      type: Object,
      default: () => {},
      validator: (value) =>
        ["id", "name", "email"].every((key) => key in value)
    }
  },

  data() {
    return {
      data,
      buttonLoading: false,
      form: this.$form.createForm(this, { name: "edit" })
    };
  },

  watch: {
    initialValues(newValue, oldValue) {
      this.form.resetFields();
    }
  },

  methods: {
    submit(e) {
      e.preventDefault();
      this.form.validateFields(async (error, values) => {
        if (!error) {
          this.buttonLoading = true;
          const doEdit = await this.$store.dispatch(
            "users/update",
            { ...values, id: this.initialValues.id }
          );

          if (doEdit.status == "error") {
            this.$message.error(doEdit.message);
          } else {
            this.$message.success("Sửa quản trị thành công");
            this.$emit("submitted");
          }
        }
        this.buttonLoading = false;
      });
    },

    rePasswordValidator(rule, value, cb) {
      const password = this.form.getFieldValue('password');
      if (password === value) return cb();
      return false;
    }
  }
};
</script>
