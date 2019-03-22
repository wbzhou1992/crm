<template>
  <div class="body">
    <cheader></cheader>
    <div class="content">
      <div class="breadcrumb">
        <span><i class="fa fa-line-chart"></i>系统管理</span>/<span><i class="fa fa-envelope"></i>用户管理</span>
      </div>
      <div class="table-cont">
        <div class="button-group">
          <input type="text" placeholder="输入查询id" v-model="searchtext" @input="getCustomers">
          <button type="submit" @click.prevent="search">
            <i class="fa fa-search"></i>
            <span>查询</span>
          </button>
          <button type="button" @click="showCreateDialog">
            <span>新建</span>
            <i class="fa fa-plus"></i>
          </button>
        </div>
        <ctable
          class="table"
          :customers="customers"
          @showChangeDialog="showChangeDialog"
          @deleteCustomer="deleteCustomer"
        ></ctable>
        <vuenav class="page"v-if="isSearch" :cur="params.pageNum" :all="all" :callback="callback"></vuenav>
      </div>
    </div>
    <cmodal v-model="currentCustomer" :isShow="isShow">
      <div class="btn">
        <button type="button" class="change" @click="close">
          <span>关闭</span>
        </button>
        <button type="button" class="delete" @click="submit">
          <span>修改</span>
        </button>
      </div>
    </cmodal>
  </div>
</template>
<script>
import vuenav from "@/components/vuenav.vue";
import cheader from "./header.vue";
import ctable from "@/components/table.vue";
import cmodal from "@/components/modal.vue";
export default {
  components: {
    vuenav,
    ctable,
    cmodal,
    cheader
  },
  data() {
    return {
      isShow: false,
      all: 0,
      searchtext: "",
      isSearch: true,
      customers: [],
      params: {
        pageNum: 1,
        pageSize: 10
      },
      currentCustomer: {
        cust_id: "",
        cust_name: "",
        cust_source: "",
        cust_industry: "",
        cust_level: "",
        cust_phone: "",
        cust_mobile: ""
      }
    };
  },
  created() {
    this.getCustomers();
  },
  methods: {
    getCustomers() {
      let url = "http://localhost:8080/customer/all";
      if (this.params) {
        let paramsArray = [];
        //拼接参数
        Object.keys(this.params).forEach(key =>
          paramsArray.push(key + "=" + this.params[key])
        );
        if (url.search(/\?/) === -1) {
          url += "?" + paramsArray.join("&");
        } else {
          url += "&" + paramsArray.join("&");
        }
      }
      fetch(url, {
        method: "GET",
        mode: "cors"
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.customers = data.list;
          this.cur = data.pageNum;
          this.all = data.pages;
        })
        .catch(err => {
          console.log("请求错误", err);
        });
      this.isSearch = true;
    },
    showChangeDialog(currentCustomer) {
      this.isShow = true;
      this.currentCustomer = Object.assign({}, currentCustomer);
    },
    showCreateDialog() {
      this.isShow = true;
      this.currentCustomer = {
        cust_id: "",
        cust_name: "",
        cust_source: "",
        cust_industry: "",
        cust_level: "",
        cust_phone: "",
        cust_mobile: ""
      };
    },
    changeCustomer() {
      let data = new FormData();
      data.append("cust_id", this.currentCustomer.cust_id);
      data.append("cust_name", this.currentCustomer.cust_name);
      data.append("cust_source", this.currentCustomer.cust_source);
      data.append("cust_industry", this.currentCustomer.cust_industry);
      data.append("cust_level", this.currentCustomer.cust_level);
      data.append("cust_phone", this.currentCustomer.cust_phone);
      data.append("cust_mobile", this.currentCustomer.cust_mobile);
      fetch("http://localhost:8080/customer/update", {
        method: "POST",
        mode: "cors",
        body: data
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log("获取的结果", data);
          this.getCustomers();
          this.isShow = false;
        })
        .catch(err => {
          console.log("请求错误", err);
          this.isShow = false;
        });
    },
    createCustomer() {
      let data = new FormData();
      data.append("cust_name", this.currentCustomer.cust_name);
      data.append("cust_source", this.currentCustomer.cust_source);
      data.append("cust_industry", this.currentCustomer.cust_industry);
      data.append("cust_level", this.currentCustomer.cust_level);
      data.append("cust_phone", this.currentCustomer.cust_phone);
      data.append("cust_mobile", this.currentCustomer.cust_mobile);
      fetch("http://localhost:8080/customer/create", {
        method: "POST",
        mode: "cors",
        body: data
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log("获取的结果", data);
          this.getCustomers();
          this.isShow = false;
        })
        .catch(err => {
          console.log("请求错误", err);
          this.isShow = false;
        });
    },
    submit() {
      let data = new FormData();
      if (this.currentCustomer.cust_id) {
        this.changeCustomer();
      } else {
        this.createCustomer();
      }
    },
    deleteCustomer(id) {
      let data = new FormData();
      data.append("id", id);
      fetch("http://localhost:8080/customer/delete", {
        method: "POST",
        mode: "cors",
        body: data
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log("获取的结果", data);
          this.isShow = false;
          this.getCustomers();
        })
        .catch(err => {
          console.log("请求错误", err);
          this.isShow = false;
        });
    },
    search() {
      let data = new FormData();
      data.append("id", this.searchtext);
      fetch("http://localhost:8080/customer/detail", {
        method: "POST",
        mode: "cors",
        body: data
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log("获取的结果", data);
          let s = [];
          s.push(data);
          this.customers = s;
          this.isSearch = false;
        })
        .catch(err => {
          console.log("请求错误", err);
          this.isShow = false;
        });
    },
    close() {
      this.isShow = false;
    },
    callback(page) {
      this.params.pageNum = page;
      this.getCustomers();
    }
  }
};
</script>

<style lang="less" scoped>
.body {
  margin-left: 200px;
  padding: 0;
}
  input::-webkit-input-placeholder {
    color: #aab2bd;
    font-size: 12px;
  }
  
.table-cont {
  background: #fff;
  padding:0 16px 0;
  .page{
    margin-top: 10px;
    padding-bottom: 10px;
  }
  .button-group{
    display: flex;
    padding:20px 20px 20px 0;
    margin-right:20px;
    input {
      width: 400px;
      outline: none;
      height: 32px;
      padding: 0;
      margin: 0;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      padding-left: 8px;
      transition:all .3s;
      &:focus{
        border-color: #3d85bb;
        outline:0;
        box-shadow:0 0 0 2px rgba(0, 94, 165, 0.2);
      }
    }
  }
}
.content {
  background: rgb(236, 236, 236);
  margin: 0 16px;
  padding: 16px;
  height: calc(100vh - 10px);
  min-height: 200px;
  .breadcrumb{
    line-height:48px;
    span{
    margin:10px;
    i{
      margin-right:4px;
    }
    }
    
  }
}
button {
  padding: 0;
  margin: 0;
  margin-left: 20px;
  margin-right: 20px;
  outline:none;
  border:none;
  width: 100px;
  background-color: #005ea5;
  line-height: 30px;
  color:#fff;
  border-color:#005ea5;
  border-radius:4px;
  &:hover{
    background-color:#3d85bb;
    border-color:#3d85bb;
  }
  i {
    margin-right: 6px;
    color: #fff;
  }
}
</style>
