<template>
   <div class="nav">
        <ul>
            <router-link tag="li" to="/home" active-class="active"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>客户管理</router-link>
            <router-link tag="li" to="/stock" active-class="active"><i class="fa fa-cloud" aria-hidden="true"></i>股票信息</router-link>
        </ul>
   </div>
</template>
<style lang="less" scoped> 
.nav{
    background: #f3f5f7;
    width: 200px;
    height: 660px;
    float: left;
    .active{
        background-color: #eee;
         &:hover{
            cursor: default;
        }
    }
    li{
        line-height: 40px;
        border: 1px solid #eee;
        text-align: center;
        i{
            margin-right: 10px;
        }
        &:hover{
            cursor: pointer;
        }
    }
}
</style>
