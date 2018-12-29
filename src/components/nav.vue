<template>
   <div class="nav">
        <ul>
            <li class="active"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>客户管理</li>
            <li><i class="fa fa-cloud" aria-hidden="true"></i>客户拜访</li>
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
    }
    li{
        line-height: 40px;
        border: 1px solid #eee;
        text-align: center;
        i{
            margin-right: 10px;
        }
    }
}
</style>
