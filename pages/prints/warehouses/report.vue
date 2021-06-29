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
            <strong class="title"><img src="@/assets/imgs/checkbox.jpg"/>Báo Cáo Tồn Kho</strong>
          </td>
        </tr>
      </table>
    </div>
    <table class="tb-option">
      <tr>
        <td width="100">Kho:</td>
        <td colspan="4">
           <span v-for="(value, key) in warehousesReport" :key=key>{{value.code}}</span>
        </td>
      </tr>
    </table>
    <table class="tb-detail">
      <thead>
        <tr >
          <th width="490" class="date">

          </th>
          <th class="date">Ngày tháng: <span></span>{{new Date().getDate()}}<span>/</span>{{new Date().getMonth()+1}}<span>/</span>{{new Date().getFullYear()}}</th>
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
          <th width="140">TL Thực Tế (KG)</th>
          <th>TL Tiêu Chuẩn(KG)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in items" :key="key">
          <td>{{key + 1}}</td>
          <td>{{value.member_no}}</td>
          <td>{{findName(value.member_no)}}</td>
          <td>{{value.unit}}</td>
          <td>{{value.actual_weight_sum}}</td>
          <td>{{value.quantity_sum}}</td>
          <td>{{value.standard_weight_sum}}</td>
        </tr>
        <tr>
          <td colspan="7" rowspan="3">
            Ghi Chú: 
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
        title: "Báo Biểu Kho"
      };
    },
    async created() { 
      const data = await Promise.all([
        this.$store.dispatch('warehouses/report', {
          warehouses: Array.isArray(this.$route.query.warehouses)? this.$route.query.warehouses: [this.$route.query.warehouses]
        }),
      ]);
      // this.warehousesReport = this.warehouses.data;
      this.items = data[0].data.data;
      // this.warehousesReport = this.warehouses.data;
      if(this.$route.query.warehouses){
        this.warehousesReport = [];
        for(let id in this.$route.query.warehouses) {
          this.warehousesReport.push(this.findWareHouse(this.$route.query.warehouses[id]));
        }
      }
      this.printer();
    },
    async fetch({ store }) {
      await Promise.all([
        store.dispatch('all/all'),
        store.dispatch('warehouses/index', {
          params: {
            per_page: 999999
          }
        }),
      ]);
      
    },
    computed: {
      ...mapState('all', ['all']),
      ...mapState('warehouses', ['warehouses']),
    },
    data: () => ({
      items: [],
      warehousesReport: [],
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
      findWareHouse(id){
        try {
          return this.warehouses.data.filter( (item) => item.id == id)[0];
        } catch (error) {
          return null;
        }
        
      },
    },
    
};
</script>
<style lang="scss">
@import "~/assets/scss/pages/_priceReport.scss";
</style>