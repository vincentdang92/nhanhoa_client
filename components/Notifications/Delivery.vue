<template>
  <div class="delivery-detail">
    
  <a-form :layout="formLayout">
    <!-- 8 người tạo | 8 nhóm | 8 Ngày tạo-->
    <a-row :gutter="24">
      <a-col :span="8">
        <a-form-item
          label="Người tạo"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          >
          <span class="ant-form-text">
            {{initialValues.account.full_name}}
          </span>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item
          label="Nhóm"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          >
          <span class="ant-form-text">
            {{initialValues.group !== null ? initialValues.group.name : 'Company'}}
          </span>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item
        label="Ngày tạo"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        >
          <span class="ant-form-text">
            {{initialValues.created_at}}
          </span>
        </a-form-item>
      </a-col>
      
    </a-row>
    <hr/>
    <!--  12 Nội dung | 8 loại  -->
    <a-row :gutter="24">
      <a-col :span="16" >
        <a-form-item
          label="Mô tả ngắn"
          :label-col="{span:4}"
          :wrapper-col="{span:20}"
          >
          <span class="ant-form-text">
            {{initialValues.content}}
          </span>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item
          label="Loại"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          >
          <span class="ant-form-text">
            {{initialValues.content_type == 1 ? 'YES_NO' : 'OK'}}
          </span>
        </a-form-item>
      </a-col>
    </a-row>
    <hr/>
    <a-row :gutter="24">
      <a-col :span="16">
        <a-form-item
          label="Nội dung"
          :label-col="{span:4}"
          :wrapper-col="{span:20}"
          >
          <span class="ant-form-text">
            {{initialValues.description}}
          </span>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item v-if="initialValues.image"
          label="Hình ảnh"
          :label-col="{span:24}"
          :wrapper-col="{span:24}"
          >
          <span class="ant-form-text">
            <img class="img-delivery" :src="initialValues.image" :alt="initialValues.title"/>
          </span>
        </a-form-item>
      </a-col>
    </a-row>
    <hr/>
    <a-row :gutter="24">
      <a-col :span="24">
        <a-form-item
          label="Gửi đến"
          :label-col="{span:24}"
          :wrapper-col="{span:24}"
          >
          <a-table
            size="middle"
            :columns="columns"
            :dataSource="deliveriesTo"
            :rowKey="record => record.id"
            :scroll="{ y: 200 }"
            :pagination="false" 
          ></a-table>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      formLayout: 'horizontal',
      columns: [
        {
          title: 'Tên',
          dataIndex: 'account.full_name'
        },
        {
          title: 'Điện thoại',
          dataIndex: 'account.phone'
        },
        {
          title: 'Phản hồi',
          dataIndex: 'status',
          customRender: (text, row, index) => {
            return this.getStatusResponse(text)
          }
        },
      ]
    };
  },
  props: {
    initialValues: {
      type: Object,
      default: () => {}
    }
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
    deliveriesTo() {
      let receives = this.initialValues.notification_receive_logs
      
      return this.initialValues.notification_receive_logs
    }
  },
  methods: {
    getStatusResponse(status) {
      let result = ''
      switch (status) {
        case 0: result = 'Chưa xem'
          break
        case 1: result = 'Đã xem'
          break
        case 2: result = 'Yes'
          break
        case 3: result = 'No'
          break
        case 4: result = 'Ok'
      }

      return result
    }
  }
};
</script>
