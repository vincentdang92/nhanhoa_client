<template>
  <a-row>
    <a-col :span="24">
      <a-table :columns="columns" :data-source="data">
    <a slot="action" slot-scope="text" href="javascript:;">Delete</a>
    <p slot="expandedRowRender" slot-scope="record" style="margin: 0">
      {{ record.description }}
    </p>
  </a-table>
    </a-col>
  </a-row>
</template>
<script>
const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  { title: 'Action', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } },
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
