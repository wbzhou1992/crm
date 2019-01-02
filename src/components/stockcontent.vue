<template>
<div class="body">
    <div class="content">
        <h1>
            <slot></slot>
        </h1>
        <div class="search">
        <input type="text" placeholder="输入查询id..." v-model="searchtext" @input="getStocks">
        <button type="submit"><i class="fa fa-search"></i></button>
    </div>
    <div class="table">
        <table>
            <thead>
                <th>ID</th>
                <th>股票代码</th>
                <th>股票名称</th>
                <th>开盘价</th>
                <th>当前价格</th>
                <th>更新时间</th>
                <th>总值</th>
                
            </thead>
            <tbody>
                <tr v-for="stock in stocks" >
                    <td>
                        {{stock.id}}
                    </td>
                     <td>
                        {{stock.code}}
                    </td>
                    <td>
                        {{stock.name}}
                    </td>
                    <td>
                        {{stock.open}}
                    </td>
                    <td>
                        {{stock.price}}
                    </td>
                    <td>
                        {{stock.time}}
                    </td>
                    <td>
                        {{stock.volume}}
                    </td>
                   
                </tr>
            </tbody>
        </table>
        <vuenav v-if="isSearch" :cur="params.pageNum" :all="all" :callback="callback"></vuenav>
    </div>
    </div>

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
            stocks:[],
            params:{
                pageNum:1,
                pageSize:10
            }
        }
    },
    created(){
        this.getStocks();
    },
    methods:{
        getStocks(){
            let url = 'http://localhost:8080/stock/all';
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
                this.stocks = data.list;
                this.cur = data.pageNum;
                this.all=data.pages;
            }).catch(err => {
                console.log('请求错误', err);
            })
            this.isSearch=true;
        },
        // search(){
        //     let data = new FormData();
        //     data.append("id",this.searchtext);
        //     fetch('http://localhost:8080/customer/detail',{
        //         method: 'POST',
        //         mode: 'cors',
        //         body:data
        //     }).then(res => {
        //         return res.json();
        //     }).then(data => {
        //         console.log('获取的结果', data);
        //         let s = [];
        //         s.push(data);
        //         this.customers = s;
        //         this.isSearch=false;
        //     }).catch(err => {
        //         console.log('请求错误', err);
        //         this.isShow = false;
        //     })
        // },
        callback(page){
            this.params.pageNum = page;
            this.getStocks();
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


.table{
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
