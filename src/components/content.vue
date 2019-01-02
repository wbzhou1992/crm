<template>
<div class="body">
    <div class="content">
        <h1>
            <slot></slot>
        </h1>
        <button type="button" class="new" @click="showCreateDialog"><span>新建</span><i class="fa fa-plus"></i></button>
        <div class="search">
        <input type="text" placeholder="输入查询id..." v-model="searchtext" @input="getCustomers">
        <button type="submit" @click.prevent="search"><i class="fa fa-search"></i></button>
    </div>
    <div class="table">
        <table>
            <thead>
                <th>ID</th>
                <th>客户名称</th>
                <th>客户来源</th>
                <th>客户所属行业</th>
                <th>客户级别</th>
                <th>固定电话</th>
                <th>手机</th>
                <th>操作</th>
            </thead>
            <tbody>
                <tr v-for="customer in customers" >
                    <td>
                        {{customer.cust_id}}
                    </td>
                    <td>
                        {{customer.cust_name}}
                    </td>
                    <td>
                        {{customer.cust_source}}
                    </td>
                    <td>
                        {{customer.cust_industry}}
                    </td>
                    <td>
                        {{customer.cust_level}}
                    </td>
                    <td>
                        {{customer.cust_phone}}
                    </td>
                    <td>
                        {{customer.cust_mobile}}
                    </td>
                    <td>
                        <button type="button" class="change" @click="showChangeDialog(customer)"><span>修改</span></button>
                        <button type="button" class="delete" @click="deleteCustomer(customer.cust_id)"><span>删除</span></button>
                    </td>
                </tr>
            </tbody>
        </table>
        <vuenav v-if="isSearch" :cur="params.pageNum" :all="all" :callback="callback"></vuenav>
    </div>
    </div>
    <div class="dialog" v-show="isShow">
    </div>
    <transition name="fade">
        <div class="dialog-content" v-show="isShow">
            <h2>修改客户信息</h2>
            <div class="customer-cont">
                <div>
                    <span>客户名称</span><input v-model="currentCustomer.cust_name" autocomplete="off" spellcheck="false" placeholder="" type="text" id="name"> 
                </div>
                <div>
                    <span>客户来源</span><input v-model="currentCustomer.cust_source" autocomplete="off" spellcheck="false" placeholder="" type="text" id="source"> 
                </div>
                <div>
                    <span>所属行业</span><input v-model="currentCustomer.cust_industry" autocomplete="off" spellcheck="false" placeholder="" type="text" id="industry"> 
                </div>
                <div>
                    <span>客户级别</span><input v-model="currentCustomer.cust_level" autocomplete="off" spellcheck="false" placeholder="" type="text" id="level"> 
                </div>
                <div>
                    <span>固定电话</span><input v-model="currentCustomer.cust_phone" autocomplete="off" spellcheck="false" placeholder="" type="text" id="phone"> 
                </div>
                <div>
                    <span>手机</span><input v-model="currentCustomer.cust_mobile" autocomplete="off" spellcheck="false" placeholder="" type="text" id="mobile"> 
                </div>
            </div>
            <div class="btn">
                 <button type="button" class="change" @click="close"><span>关闭</span></button>
                <button type="button" class="delete" @click="submit"><span>修改</span></button>
            </div>
        </div>
    </transition>
  </div>
</template>
<script>
import vuenav from './vuenav.vue'
export default {
    components:{
        vuenav
    },
    data(){
        return {
            isShow:false,
            all:0,
            searchtext:'',
            isSearch:true,
            customers:[],
            params:{
                pageNum:1,
                pageSize:10
            },
            currentCustomer:{
                cust_id:'',
                cust_name:'',
                cust_source:'',
                cust_industry:'',
                cust_level:'',
                cust_phone:'',
                cust_mobile:''
            }
        }
    },
    created(){
        this.getCustomers();
    },
    methods:{
        getCustomers(){
            let url = 'http://localhost:8080/customer/all';
            
            if (this.params) {  
                let paramsArray = [];  
                //拼接参数  
                Object.keys(this.params).forEach(key => paramsArray.push(key + '=' + this.params[key]))  
                if (url.search(/\?/) === -1) {  
                    url += '?' + paramsArray.join('&')  
                } else {  
                    url += '&' + paramsArray.join('&')  
                }  
            } 
            fetch(url,{
                method: 'GET',
                mode: 'cors',
            }).then(res => {
                return res.json();
            }).then(data => {
                this.customers = data.list;
                this.cur = data.pageNum;
                this.all=data.pages;
            }).catch(err => {
                console.log('请求错误', err);
            })
            this.isSearch=true;
        },
        showChangeDialog(currentCustomer){
            this.isShow = true;
            this.currentCustomer =Object.assign({},currentCustomer);
        },
        showCreateDialog(){
            this.isShow = true;
        },
        changeCustomer(){
            let data = new FormData();
            data.append("cust_id",this.currentCustomer.cust_id);
            data.append("cust_name",this.currentCustomer.cust_name);
            data.append("cust_source",this.currentCustomer.cust_source);
            data.append("cust_industry",this.currentCustomer.cust_industry);
            data.append("cust_level",this.currentCustomer.cust_level);
            data.append("cust_phone",this.currentCustomer.cust_phone);
            data.append("cust_mobile",this.currentCustomer.cust_mobile);
            fetch('http://localhost:8080/customer/update',{
                method: 'POST',
                mode: 'cors',
                body:data
            }).then(res => {
                return res.json();
            }).then(data => {
                console.log('获取的结果', data);
                this.getCustomers();
                this.isShow = false;
            }).catch(err => {
                console.log('请求错误', err);
                this.isShow = false;
            })
        },
        createCustomer(){
            let data = new FormData();
            data.append("cust_name",this.currentCustomer.cust_name);
            data.append("cust_source",this.currentCustomer.cust_source);
            data.append("cust_industry",this.currentCustomer.cust_industry);
            data.append("cust_level",this.currentCustomer.cust_level);
            data.append("cust_phone",this.currentCustomer.cust_phone);
            data.append("cust_mobile",this.currentCustomer.cust_mobile);
            fetch('http://localhost:8080/customer/create',{
                method: 'POST',
                mode: 'cors',
                body:data
            }).then(res => {
                return res.json();
            }).then(data => {
                console.log('获取的结果', data);
                this.getCustomers();
                this.isShow = false;
            }).catch(err => {
                console.log('请求错误', err);
                this.isShow = false;
            })
        },
        submit(){
            let data = new FormData();
            if(this.currentCustomer.cust_id){
                this.changeCustomer();
            }else{
                this.createCustomer();
            }
        },
        deleteCustomer(id){
            let data = new FormData();
            data.append("id",id);
            fetch('http://localhost:8080/customer/delete',{
                method: 'POST',
                mode: 'cors',
                body:data
            }).then(res => {
                return res.json();
            }).then(data => {
                console.log('获取的结果', data);
                this.isShow = false;
                this.getCustomers();
            }).catch(err => {
                console.log('请求错误', err);
                this.isShow = false;
            })
        },
        search(){
            let data = new FormData();
            data.append("id",this.searchtext);
            fetch('http://localhost:8080/customer/detail',{
                method: 'POST',
                mode: 'cors',
                body:data
            }).then(res => {
                return res.json();
            }).then(data => {
                console.log('获取的结果', data);
                let s = [];
                s.push(data);
                this.customers = s;
                this.isSearch=false;
            }).catch(err => {
                console.log('请求错误', err);
                this.isShow = false;
            })
        },
        close(){
            this.isShow = false;
        },
        callback(page){
            this.params.pageNum = page;
            this.getCustomers();
        }
    }
}
</script>

<style lang="less" scoped>
.body{
    margin: 0;
    padding: 0;
}
.content{
    margin-left: 200px;
    margin-top: 20px;
    .new{
        float: left;
        margin:20px;
        height: 30px;
        color: #fff;
        background-color: #2d8cf0;
        border-color: #2d8cf0;
        border-radius: 3px;
        outline:0;
        margin-right: 5px;
        padding:1px 7px 2px;
        cursor:pointer;
        i{
            margin-left:4px;
        }
    }
}
.table{
    padding: 20px;
    table{
        width:100%;
        padding:40px;
        border-collapse: collapse;
    }
    td,th{
            border:1px solid #eee;

    }
    th,tr{
        height:48px;
    }
    .delete{
        background-color: #ed4014;
        border-color: #ed4014;
    }
}
.search{
    position: relative;
    padding: 20px;
    float:left;
    input{
        width:200px;
        outline: none;
        height: 30px;
        padding: 0;
        margin: 0;
        border:1px solid #ced4da;
        border-radius: 4px;
        padding-left: 8px;
    }
    button{
        padding: 0;
        margin: 0;
        border: none;
        width: 40px;
        position: absolute;
        background-color: transparent;
        line-height: 30px;
        right: 20px;
        border-left: 1px solid #eee;
        i{
            color: #000;
        }
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

 .dialog{
    position:fixed;
    top:0;
    left:0;
    bottom: 0;
    right:0;
    z-index: 3;
    background-color: #000;
    opacity: .5;
 }
 .dialog-content{
    width:600px;
    height:500px;
    left:50%;
    margin-left:-300px; 
    background: #fff;
    position: absolute;
    z-index: 4;
    top: 100px;
    border-radius: 8px;
    h2{
        border-bottom: 1px solid #eee;
        margin-top: 20px;
        margin-left: 20px;
        text-align: left;
    }
    .customer-cont{
        margin-top:20px;
        padding-bottom:20px;
        border-bottom:1px solid #eee;
        &>div{
            margin-top:20px;
        }
        span{
            width:80px;
            margin-right:10px;
            font-size:16px;
            font-weight: 400;
            text-align:right;
            display: inline-block;
        }
    }
    .btn{
        float: right;
        margin-right: 30px;
        margin-top: 30px;
        button{
            height:40px;
            width: 100px;
        }
    }
 }
.table,.dialog-content{
    button{
        color: #fff;
        background-color: #2d8cf0;
        border-color: #2d8cf0;
        border-radius: 3px;
        outline:0;
        margin-right: 5px;
        padding:1px 7px 2px;
        cursor:pointer;
    }
    input{
        width:440px;
        outline:0;
        font-size:16px;
        padding-left:6px;
        height: 34px;
        line-height: 1.5;
        border:1px solid #dcdee2;
        border-radius: 4px;
        color:#515a6e;
        background-color: #fff;
        cursor:text;
        transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
    }
}
</style>
