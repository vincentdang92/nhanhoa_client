<template>
        <!-- begin option -->
        <a-col :key="key" :span="span">
          <a-form-item class="full" :label="value.title">
            <a-input v-if="value.type == 'text'" :type="'text'" :disabled=value.disabled v-decorator="value.decorator" :placeholder="`${value.title}`" />
            <a-input v-if="value.type == 'label'" :type="'label'" style="color: #ff1100; background-color: #fff;" disabled :value="customerCode" :placeholder="`${value.title}`" />
            <a-textarea v-if="value.type == 'textarea'" :type="'textarea'" v-decorator="value.decorator" :placeholder="`${value.title}`" :rows="5" />
            <a-input-number v-if="value.type == 'number'"disabled :disabled=value.disabled v-decorator="value.decorator" :placeholder="`${value.title}`" />
            <a-select v-if="value.type == 'select'" :disabled=value.disabled v-decorator="value.decorator" :placeholder="`${value.title}`">
              <a-select-option v-for="(value, key) in value.data" :ns="value.name" :key="key">
                {{value}}
              </a-select-option>
            </a-select>
            <a-date-picker  v-if="value.type == 'date'" :ns="key" placeholder="Chọn ngày" :format="['DD/MM/YYYY', 'DD/MM/YY']" v-decorator="value.decorator" />
          </a-form-item>
        </a-col>
        <!-- end option -->
</template>
<script>
export default {
  props: ['objectKey','objectValue','objectSpan','decorator'],
  data: function () {
    return {
      key: this.objectKey,
      value: this.objectValue,
      span: this.objectSpan
    }
  }
}
</script>