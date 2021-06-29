<template>
        <!-- begin option -->
        <a-col :key="key" :span="span">
          <a-form-item class="full" :label="value.title">
            <a-input v-if="value.type == 'text'" :type="'text'" :disabled=value.disabled v-decorator="[value.decorator[0], {...value.decorator[1], initialValue:initialValue }]" :placeholder="`${value.title}`" />
            <a-textarea v-if="value.type == 'textarea'" :type="'textarea'" v-decorator="[value.decorator[0], {...value.decorator[1], initialValue:initialValue }]" :placeholder="`${value.title}`" :rows="5" />
            <a-input-number v-if="value.type == 'number'"disabled :disabled=value.disabled v-decorator="[value.decorator[0], {...value.decorator[1], initialValue:initialValue }]" :placeholder="`${value.title}`" />
            <a-select v-if="value.type == 'select'" v-decorator="[value.decorator[0], {...value.decorator[1], initialValue: value.data[initialValue] } ]" :placeholder="`${value.title}`">
              <a-select-option v-for="(value, key) in value.data" :value="key" :key="key">
                {{value}}
              </a-select-option>
            </a-select>
            <a-date-picker  v-if="value.type == 'date'" :ns="key" placeholder="Chọn ngày" :format="['DD/MM/YYYY', 'DD/MM/YY']" v-decorator="[value.decorator[0], {...value.decorator[1], initialValue:initialValue }]" />
          </a-form-item>
        </a-col>
        <!-- end option -->
</template>
<script>
export default {
  props: ['objectKey','objectValue','objectSpan', 'objectInitialValue'],
  data: function () {
    return {
      key: this.objectKey,
      value: this.objectValue,
      span: this.objectSpan,
      initialValue: this.objectInitialValue
    }
  }
}
</script>