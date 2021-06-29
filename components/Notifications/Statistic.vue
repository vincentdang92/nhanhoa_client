<template>
  <div class="delivery-detail">
    <a-form :layout="formLayout">
      <a-row :gutter="24">
        <a-col :span="8">
          <a-form-item
            label="Đã gửi"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
            <span class="ant-form-text">
              {{initialValues.sent}}
            </span>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item
            label="Chưa kiểm tra"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
            <span class="ant-form-text padding-left-10">
              {{initialValues.status.not_yet_check.percent}}%
            </span>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item
            label="Chưa trả lời"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
            <span class="ant-form-text">
              {{initialValues.status.no_replay.percent}}%
            </span>
          </a-form-item>
        </a-col>
      </a-row>
      <hr/>
      <a-row :gutter="24" v-if="initialValues.status.yes">
        <a-col :span="12">
          <a-form-item
            label="Trả lời Yes"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
            <span class="ant-form-text">
              {{initialValues.status.yes.percent}}%
            </span>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="Trả lời No"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
            <span class="ant-form-text">
              {{initialValues.status.no.percent}}%
            </span>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="24" v-if="initialValues.status.ok">
        <a-col :span="24">
          <a-form-item
            label="Trả lời Ok"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            >
            <span class="ant-form-text">
              {{initialValues.status.ok.percent}}%
            </span>
          </a-form-item>
        </a-col>
      </a-row>
      <hr/>
      <a-row :gutter="24">
        <a-col :span="24">
          <a-form-item
            label="Đã xem"
            :label-col="{span: 24}"
            :wrapper-col="{span: 24}"
            >
            <a-table
              size="middle"
              :columns="columnsChecked"
              :dataSource="accountChecked"
              :rowKey="record => record.id"
              :scroll="{ y: 144 }"
              :pagination="false" 
            ></a-table>
          </a-form-item>
        </a-col>
      </a-row>
      <hr/>
      <a-row :gutter="24">
        <a-col :span="24">
          <a-form-item
            label="Chưa xem"
            :label-col="{span: 24}"
            :wrapper-col="{span: 24}"
            >
            <a-table
              size="middle"
              :columns="columnsUnCheck"
              :dataSource="accountUnCheck"
              :rowKey="record => record.id"
              :scroll="{ y: 144 }"
              :pagination="false" 
            ></a-table>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      formLayout: 'horizontal',
      columnsChecked: [
        {
          title: 'Tên',
          dataIndex: 'full_name'
        },
        {
          title: 'Điện thoại',
          dataIndex: 'phone'
        },
        {
          title: 'Email',
          dataIndex: 'email'
        },
      ],
      columnsUnCheck: [
        {
          title: 'Tên',
          dataIndex: 'full_name'
        },
        {
          title: 'Điện thoại',
          dataIndex: 'phone'
        },
        {
          title: 'Email',
          dataIndex: 'email'
        },
      ],
    };
  },
  computed: {
    formItemLayout() {
    const { formLayout } = this;
    return formLayout === 'horizontal'
        ? {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        }
        : {};
    },
    accountChecked() {
        return this.initialValues.list_account_checked;
    },
    accountUnCheck() {
        return this.initialValues.list_account_not_yet_check;
    }
  },
  props: {
    initialValues: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
  }
};
</script>
