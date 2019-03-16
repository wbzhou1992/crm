<template>
  <table>
    <thead>
      <th>ID</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Linkman</th>
      <th>Level</th>
      <th>Address</th>
      <th>CreateTime</th>
      <th>Action</th>
    </thead>
    <tbody>
      <tr v-for="customer in customers">
        <td>{{customer.cust_id}}</td>
        <td>{{customer.cust_name}}</td>
        <td>{{customer.cust_mobile}}</td>
        <td>{{customer.cust_linkman}}</td>
        <td>{{customer.cust_level}}</td>
        <td>{{customer.cust_address}}</td>
        <td>{{customer.cust_createtime}}</td>
        <td>
          <button type="button" class="change" @click="showChangeDialog(customer)">
            <span>修改</span>
          </button>
          <button type="button" class="delete" @click="deleteCustomer(customer.cust_id)">
            <span>删除</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
    props: {
       customers: Array 
    },
    methods: {
        showChangeDialog (customer) {
            this.$emit("showChangeDialog",customer)
        },
        deleteCustomer (id) {
            this.$emit("deleteCustomer",id)
        }
    }
}
</script>
<style scoped lang="less">

table {
    width: 100%;
    padding: 40px;
    border-collapse: collapse;
    text-align: left;
    font-family:"Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif

  }
  th{
      background:#f7f7f7;
      padding:16px 8px;
      color:rgba(0, 0, 0, 0.65);
      font-size:12px;
  }
  th,
  tr {
    height: 48px;
  }
  tr{
      border-bottom:1px solid #e9e9e9;
      transition:all .3s;
      &:hover{
          td{
             background: #ebf2f8;
          }
      }
      td{
          transition:all .3s;
          color:rgba(0, 0, 0, 0.65);
          font-size:12px;
      }
  }
  .delete {
    background-color: #ed4014;
    border-color: #ed4014;
  }

  button {
    outline:none;
    border:none;
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
    border-radius: 3px;
    margin-right: 5px;
    padding: 1px 7px 2px;
    cursor: pointer;
    &:hover{
      opacity:0.8;
    }
  }
  input {
    width: 440px;
    outline: 0;
    font-size: 16px;
    padding-left: 6px;
    height: 34px;
    line-height: 1.5;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    background-color: #fff;
    cursor: text;
    transition: border 0.2s ease-in-out, background 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  }
</style>
