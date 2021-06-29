<template>
  <div class="agency-table-groups">
    <a-row type="flex" justify="start">
      <a-col :span=12 class="col_user_add_action">
        <a-button type="primary" icon="plus" @click="showModalAdd">
          Thêm quản trị viên
        </a-button>
      </a-col>
    </a-row>
    <a-row type="flex" justify="start">
      <a-col :span="24">
      <a-table
        :scroll="tableScroll"
        id="user-table"
        size="middle"
        :columns="columns"
        :dataSource="users.data"
        :rowKey="record => record.id"
        :pagination="{
          pageSize: users.per_page,
          total: users.total,
          current: users.current_page
        }"
        :loading="tableLoading"
        @change="handleTableChange"
      >
        <div
          slot="filterDropdown"
          slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
          style="padding: 8px"
        >
          <a-input
            v-ant-ref="c => searchInput = c"
            :placeholder="`Search ${column.dataIndex}`"
            :value="selectedKeys[0]"
            @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
            @pressEnter="() => handleSearch(selectedKeys, confirm)"
            style="width: 188px; margin-bottom: 8px; display: block;"
          />
          <a-button
            type="primary"
            @click="() => handleSearch(selectedKeys, confirm)"
            icon="search"
            size="small"
            style="width: 90px; margin-right: 8px"
          >Search</a-button>
          <a-button @click="() => handleReset(clearFilters)" size="small" style="width: 90px">Reset</a-button>
        </div>

        <a-icon
          slot="filterIcon"
          slot-scope="filtered"
          type="search"
          :style="{ color: filtered ? '#108ee9' : undefined }"
        />

        <template
          slot="stt"
          slot-scope="text, record, index"
        >{{ (users.per_page * (users.current_page - 1)) + index + 1 }}</template>

        <template slot="roles" slot-scope="text, record">
          <span
            v-if="record.roles && record.roles.length"
            style="text-transform: capitalize"
          >{{ record.roles.map(item => item.name).join(', ') }}</span>
          <template v-else>--</template>
        </template>

        <template slot="customRender" slot-scope="text">
          <span v-if="searchText">
            <template
              v-for="(fragment, i) in text.toString().split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
            >
              <mark
                v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                :key="i"
                class="text--highlighted"
              >{{fragment}}</mark>
              <template v-else>{{fragment}}</template>
            </template>
          </span>
          <template v-else>{{text}}</template>
        </template>

        <template slot="operation" slot-scope="text, record">
          <div class="editable-row-operations" v-if="record.id !== 1">
            <a-button size="small" class="ant-btn-user-edit" type="primary" ghost @click="() => handleEdit(record)">Sửa</a-button>
            <a-popconfirm title="Bạn chắc chắn muốn xoá?" @confirm="handleDelete(record.id)">
              <a-button size="small" class="ant-btn-user-delete" type="danger" ghost>Xoá</a-button>
            </a-popconfirm>
          </div>
        </template>
      </a-table>

      <a-modal
        title="Thêm quản trị viên"
        :visible="modalAddShow"
        :width="600"
        :footer="null"
        @ok="hideModalAdd"
        @cancel="hideModalAdd"
      >
        <UsersFormAdd v-if="modalAddShow" @submitted="hideModalAdd" />
      </a-modal>

      <a-modal
        v-if="modalEditShow"
        title="Sửa thông tin quản trị viên"
        :visible="modalEditShow"
        :width="600"
        :footer="null"
        @ok="hideModalEdit"
        @cancel="hideModalEdit"
      >
        <UsersFormEdit v-if="modalEditShow" @submitted="hideModalEdit" :initialValues="editData" />
      </a-modal>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { getPageSize, setPageSize } from "~/utils/config";
import { mapState, mapGetters } from 'vuex';
import UsersFormAdd from '~/components/Users/UsersFormAdd';
import UsersFormEdit from '~/components/Users/UsersFormEdit';

export default {
  head: {
    title: 'Quản trị viên'
  },

  components: {
    UsersFormAdd,
    UsersFormEdit,
  },

  async fetch({ store }) {
    await store.dispatch('users/index', {
      params: {
          per_page: getPageSize()
        }
    });
  },

  data() {
    return {
      tableScroll: {x: null, y: document.documentElement.clientHeight - 400},
      searchText: '',
      searchInput: null,
      modalAddShow: false,
      modalEditShow: false,
      tableLoading: false,
      filters: {},
      editData: {},
      columns: [
        {
          title: 'STT',
          scopedSlots: {
            customRender: 'stt'
          }
        },
        {
          title: 'Tên',
          dataIndex: 'name',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender'
          },
          onFilter: (value, record) =>
            record.name
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: 'Email',
          dataIndex: 'email',
          scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender'
          },
          onFilter: (value, record) =>
            record.email
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: 'Thao tác',
          align: 'center',
          dataIndex: 'operation',
          width: 115,
          scopedSlots: { customRender: 'operation' }
        }
      ]
    };
  },

  computed: {
    ...mapState('users', ['users'])
  },

  methods: { 

    showModalAdd() {
      this.modalAddShow = true;
    },
    
    hideModalAdd() {
      this.modalAddShow = false;
    },

    showModalEdit() {
      this.modalEditShow = true;
    },

    hideModalEdit() {
      this.modalEditShow = false;
      this.editData = {};
    },

    handleEdit({ id, name, email }) {
      this.editData = { id, name, email };
      this.showModalEdit();
    },

    async handleDelete(id) {
      const doDelete = await this.$store.dispatch('users/delete', id);
      if (doDelete.error || doDelete.message || (doDelete.errors && doDelete.errors.length > 0)) {
        this.$message.error((doDelete.error && doDelete.error.message) || doDelete.message || doDelete.errors.join(', '));
      } else {
        this.$message.success('Xoá người dùng thành công');
      }
    },

    handleSearch(selectedKeys, confirm) {
      confirm();
      this.searchText = selectedKeys[0];
    },

    handleReset(clearFilters) {
      clearFilters();
      this.searchText = '';
    },

    async handleTableChange(pagination, filters) {
      //console.log('handleTableChange filters', filters);
      this.filters = filters;
      this.pagination = pagination;
      this.fetchData(pagination, filters);
    },

    async fetchData(pagination, filters) {
      this.tableLoading = true;
      await this.$store.dispatch('users/index', {
        params: {
          per_page: getPageSize(),
          page: pagination.current,
          name: filters.name ? filters.name.join('') : '',
          email: filters.email ? filters.email.join('') : ''
        }
      });
      this.tableLoading = false;
    }
    
  },
}

</script>
<style lang="scss">
@import "~/assets/scss/pages/_users.scss";
</style>