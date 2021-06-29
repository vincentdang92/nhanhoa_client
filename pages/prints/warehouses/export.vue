<template>
  <div>
    <div class="head-printer">
      <table>
        <tr>
          <td>
            <img src="@/assets/imgs/logo-print.jpg"/>
          </td>
          <td class="info-company"> 
            <div><p>CÔNG TY TNHH MTV NHỰA <span>LỘC PHÁT</span></p></div>
            <p><span>Đ/C:</span>Thửa đất số 1125, tờ bản đồ số 34, Khu phố Bình Khánh,</p>
            <p><span></span>Phường khánh Bình, Thị Xã Tân Uyên, Tỉnh Bình Dương.</p>
            <p><span>MST:</span> 3702670307 <span class="tel">TEL:</span>02743 639 671</p>
          </td>
          <td>
            <strong class="title"><img src="@/assets/imgs/checkbox.jpg"/>ĐƠN LÃNH (PHÁT) LIỆU</strong><br/>
            <strong class="title"><img src="@/assets/imgs/checkbox.jpg"/>XUẤT KHO</strong>
          </td>
        </tr>
      </table>
    </div>
    <table class="tb-option">
      <tr>
        <td>Loại máy:</td>
        <td><img src="@/assets/imgs/checkbox.jpg"/>Máy tự động</td>
        <td><img src="@/assets/imgs/checkbox.jpg"/>Máy truyền Thống</td>
        <td><img src="@/assets/imgs/checkbox.jpg"/>Máy nắp ly</td>
        <td><img src="@/assets/imgs/checkbox.jpg"/>Máy xích</td>
        <td><img src="@/assets/imgs/checkbox.jpg"/>Máy PP</td>
      </tr>
      <tr class="option-sub">
        <td>
        </td>
        <td>
          <span><img src="@/assets/imgs/checkbox.jpg"/>#1</span> <br/>
          <span><img src="@/assets/imgs/checkbox.jpg"/>#2</span> <br/>
        </td>
        <td>
          <span><img src="@/assets/imgs/checkbox.jpg"/>#1</span> 
          <span><img src="@/assets/imgs/checkbox.jpg"/>#4</span> <br/>
          <span><img src="@/assets/imgs/checkbox.jpg"/>#2</span> 
          <span><img src="@/assets/imgs/checkbox.jpg"/>#5</span> <br/>
          <span><img src="@/assets/imgs/checkbox.jpg"/>#3</span> 
          <span><img src="@/assets/imgs/checkbox.jpg"/>#6</span> <br/>
        </td>
        <td>
          <span><img src="@/assets/imgs/checkbox.jpg"/>#1</span> 
          <span><img src="@/assets/imgs/checkbox.jpg"/>#4</span> <br/>
          <span><img src="@/assets/imgs/checkbox.jpg"/>#2</span> 
          <span><img src="@/assets/imgs/checkbox.jpg"/>#5</span> <br/>
          <span><img src="@/assets/imgs/checkbox.jpg"/>#3</span> 
          <span><img src="@/assets/imgs/checkbox.jpg"/>#6</span> <br/>
        </td>
        <td>
          <span><img src="@/assets/imgs/checkbox.jpg"/>#1</span> <br/>
          <span><img src="@/assets/imgs/checkbox.jpg"/>#2</span> <br/>
        </td>
        <td></td>
      </tr>
      <tr class="option-ma">
        <td>Loại Liệu:</td>
        <td colspan="4">
          <span><img src="@/assets/imgs/checkbox.jpg"/>PET</span>
          <span><img src="@/assets/imgs/checkbox.jpg"/>PP</span>
          <span><img src="@/assets/imgs/checkbox.jpg"/>PS</span>
          <span><img src="@/assets/imgs/checkbox.jpg"/>PVC</span>
          <span><img src="@/assets/imgs/checkbox.jpg"/>Khác</span>
        </td>
        <td></td>
      </tr>
    </table>
    <table class="tb-detail">
      <thead>
        <tr v-if="warehouse_export_code">
          <th width="490" class="date">
            Mã đơn: {{warehouse_export_code}}<span></span>
            Mã kho: {{warehouseExport.warehouses.code}}<span></span>
          </th>
          <th class="date">Ngày tháng: <span></span>{{dateExport[0]}}<span>/</span>{{dateExport[1]}}<span>/</span>{{dateExport[2]}}</th>
        </tr>
      </thead>
    </table>
    <table class="tb-detail" border="1">
      <thead>
        <tr>
          <th width="40">STT</th>
          <th width="120">Mã liệu</th>
          <th width="200">Tên nguyên vật liệu</th>
          <th width="50">Đơn vị</th>
          <th width="80">Số lượng</th>
          <th width="140">Ghi chú đống gói</th>
          <th>Mã đơn gia công</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in warehouseExport.warehouse_export_detail" :key="key">
          <td>{{key + 1}}</td>
          <td>{{value.member_no}}</td>
          <td>{{findName(value.member_no)}}</td>
          <td>{{value.unit}}</td>
          <td>{{value.quantity}}</td>
          <td></td>
          <td></td>
        </tr>
        <tr v-if="warehouse_export_code">
          <td colspan="7" rowspan="3">
            Ghi Chú: {{warehouseExport.title}}
          </td>
        </tr>
      </tbody>
    </table>
    <table class="tb-confirm">
      <tr>
        <td>Quản lý kho:</td>
        <td>Nhân viên kho:</td>
        <td>Lập phiêu:</td>
      </tr>
    </table>
    <a-button class="hidden-print" type="primary" icon="plus" @click="printer">printer</a-button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    layout: "print",
    head() {
      return {
        title: "Xuất Kho"
      };
    },
    async created() { 
      const data = await Promise.all([
        this.$store.dispatch('warehouseExport/show', {
          params: {
            id: this.$route.query.id
          }
        }),
      ]);
      this.warehouseExport = data[0];
      this.warehouse_export_code = this.warehouseExport.warehouse_export_code;
      let dateCustom = new Date(this.warehouseExport.created_at_publish);
      this.dateExport = [dateCustom.getDate(), dateCustom.getMonth()+1, dateCustom.getFullYear()];
      this.printer();
    },
    async fetch({ store }) {
      await Promise.all([
        store.dispatch('all/all'),
      ]);
    },
    computed: {
      ...mapState('all', ['all']),
    },
    data: () => ({
      warehouseExport: [],
      warehouse_export_code: null,
      dateExport: [,,],
      
    }),
    methods: {
      printer () {
        setTimeout(
          () => window.print(), 200
        );
      },
      findName(member_no){
        try {
          return this.all.filter( (item) => item.member_no == member_no)[0].name_quantity
        } catch (error) {
          return null;
        }
        
      },
      findType(type){
        switch (type) {
          case 1:
              return 'bán';
          case 2:
              return 'điều chỉnh kho';
          case 3:
              return 'điều kho';
          default:
            break;
        }
      },
    },
    
};
</script>
<style lang="scss">
@import "~/assets/scss/pages/_priceExports.scss";
</style>