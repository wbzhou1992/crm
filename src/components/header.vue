<template>
    <div class="header">
        <span class="left">客户管理系统</span>
        <ul class="right">
            <li><i class="fa fa-envelope" aria-hidden="true"></i><i class="fa fa-caret-down" aria-hidden="true"></i></li>
            <li><i class="fa fa-indent" aria-hidden="true"></i><i class="fa fa-caret-down" aria-hidden="true"></i></li>
            <li><i class="fa fa-bell" aria-hidden="true"></i><i class="fa fa-caret-down" aria-hidden="true"></i></li>
            <li><i class="fa fa-user" aria-hidden="true"></i><i class="fa fa-caret-down" aria-hidden="true"></i></li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
    .header{
        height: 50px;
        line-height: 50px;
        background: #f3f5f7;
        border-bottom: 1px solid #eee;
        .left{
            float: left;
            margin-left: 20px;
        }
        .right{
            float: right;
            width: 200px;
            li{
                padding: 0;
                list-style: none;
                float: left;
                width: 50px;
                line-height: 50px;
                 i{
                    margin-right: 4px;
                }
            }
        }
    }
</style>
