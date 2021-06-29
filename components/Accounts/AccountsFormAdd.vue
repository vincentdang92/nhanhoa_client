<template>
  <a-form :form="form">
    <a-row :gutter="24">
      <a-col v-for="(value, key) in data" :key="key" :span="12">
        <a-form-item :label="value.title">
          <a-input v-if="value.type == 'text'" :type="'text'" :disabled=value.disabled v-decorator="value.decorator" :placeholder="`Nhập ${value.title}`" />
          <a-select v-else label-in-value :disabled=value.disabled v-decorator="value.decorator" :placeholder="`Nhập ${value.title}`">
            <a-select-option v-for="role in value.data" :key="role.key">{{role.label}}</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="24">
        <a-form-item>
          <a-button type="primary" @click="submit" :loading="buttonLoading">Thêm Tài khoản</a-button>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
import { accounts as accountsValidation } from "~/utils/validations";

const data = {
  name: {
    title: "Họ và tên",
    disabled: false,
    type: 'text',
    decorator: accountsValidation.name
  },
  email: {
    title: "Thư điện tử",
    disabled: false,
    type: 'text',
    decorator: accountsValidation.email
  },
  prefixPhone: {
    title: "Mã quốc gia",
    disabled: true,
    type: 'text',
    decorator: [accountsValidation.prefixPhone[0], {...accountsValidation.prefixPhone[1], initialValue: '+84'} ]
  },
  phone: {
    title: "Số điện thoại",
    disabled: false,
    type: 'text',
    decorator: accountsValidation.phone
  },
  role: {
    title: "quyền",
    disabled: false,
    type: 'select',
    data: [
      {key: 0, label: "Thành viên"},
      {key: 1, label: "Quản lý"}
    ],
    decorator: [accountsValidation.role[0], {...accountsValidation.role[1], initialValue: {key: 0}} ]
  },
  
};

export default {
  data() {
    return {
      data,
      buttonLoading: false,
      form: this.$form.createForm(this, { name: "add" })
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
          const doAdd = await this.$store.dispatch(
            "accounts/create",
            values
          );
          if (doAdd.status == "error") {
            const objectKey = Object.keys(doAdd.messages);
            if ( objectKey.length > 1 ) {
              objectKey.forEach(key => {
                this.$message.error(doAdd.messages[key]);
              });
            } else {
              this.$message.error(doAdd.message);
            }
          } else {
            this.$message.success("Thêm tài khoản thành công");
            this.$emit("submitted");
          }
        }
        this.buttonLoading = false;
      });
    },
  }
};
</script>
