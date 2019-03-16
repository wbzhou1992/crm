<template>
    <div class="header">
        <div class="left">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
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
        background: #FFFFFF;
        box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.01);
        .left{
            float: left;
            margin-left: 20px;
            font-size: 24px;
            &:hover{
                color:#005ea5;
            }
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
