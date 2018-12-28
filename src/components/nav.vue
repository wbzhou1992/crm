<template>
   <div class="nav">
        <div class="search">
        <input type="text" placeholder="查询内容..."><button type="submit"><i class="fa fa-search"></i></button>
    </div>
    <ul>
        <li class="active"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>客户管理</li>
        <li><i class="fa fa-cloud" aria-hidden="true"></i>客户拜访</li>
    </ul>
   </div>
</template>
<style scoped>
    .active{
        background-color: #eee;
    }
    .nav{
        background: #f3f5f7;
        width: 200px;
        height: 660px;
        float: left;
    }
    .search{
        position: relative;
        padding: 10px;
    }
    input{
        width: 100%;
        outline: none;
        height: 30px;
        padding: 0;
        margin: 0;
        border:1px solid #ced4da;
        border-radius: 4px;
        padding-left: 8px;

    }
   
    ul li{
        line-height: 40px;
        border: 1px solid #eee;
        text-align: center;
    }
    ul li i{
        margin-right: 10px;
    }
    button{
       
        padding: 0;
        margin: 0;
        border: none;
         width: 40px;
        position: absolute;
        background-color: transparent;
        line-height: 30px;
        right: 12px;
        border-left: 1px solid #eee;

    }
   
</style>
