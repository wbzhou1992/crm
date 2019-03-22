<template>
    <div class="asideBox">
      <aside>
          <div class="avatar">
              <img src="../assets/images/logo.png">
              <div class="title">admin</div>
          </div>
        <ul class="asideMenu">
          <li v-for="(item,index) in menuList">
            <div class="oneMenu" @click="showToggle(item,index)">
              <i class="icon" :class="item.iconClass" />
              <span>{{item.name}}</span>
              <i class="arrow" v-show="item.subItems&&item.subItems.length>0" :class="[item.isSubShow ? 'fa fa-angle-up':'fa fa-angle-down']"></i>
            </div>
            <ul v-show="item.isSubShow">
              <li v-for="(subItem,index) in item.subItems" :key="index">
                <div class="oneMenuChild" @click.prevent="gotoSub(item.subItems[index].name)">
                    <i class="icon" :class="item.iconClass" />
                    {{subItem.name}}
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
</template>
<script>
 export default {
    data(){
      return{
        menuList:[
          {
            name:'仪表盘',
            iconClass:'fa fa-laptop',
            isSubShow:false,
          },
          {
            name:'系统管理',
            iconClass:'fa fa-line-chart',
            isSubShow:false,
            subItems:[
              {
                name:'用户管理'
              },
              {
                name:'角色管理'
              },
              {
                name:'测试菜单'
              }
            ]
          },
          {
            name:'测试菜单',
            iconClass:'fa fa-tasks',
            isSubShow:false,
            subItems:[
              {
                name:'测试菜单'
              },
              {
                name:'测试菜单'
              },
            ]
          },
          {
            name:'测试菜单',
            iconClass:'fa fa-video-camera',
            isSubShow:false,
            subItems:[
              {
                name:'测试菜单'
              },
              {
                name:'测试菜单'
              },
            ]
          }
        ]
      }
 
    },
    computed: {
        arrow () {

            return 'fa fa-angle-down'
        }
    },
    methods:{
      gotoSub (name) {
        this.$emit('gotoSub',name)
      },
      showToggle (item,ind) {
        // this.menuList.forEach(i => {
        //   // 判断如果数据中的menuList[i]的show属性不等于当前数据的isSubShow属性那么menuList[i]等于false
        //   if (i.isSubShow !== this.menuList[ind].isSubShow) {
        //     i.isSubShow = false;
        //   }
        // });
        item.isSubShow = !item.isSubShow;
        console.log(item.name)
      }
    }
  }
</script>
<style lang="less" scoped>
  .asideBox{
    height: 100%;
    width: 190px;
    float:left;
    background: #FFFFFF;
    aside{
      height: 100%;
      .avatar{
          margin: 24px 0 12px;
          text-align: center;
          img{
              display: inline-block;
              height:24px;
          }
          .title{
              font-size:16px;
              line-height:16px;
              text-transform: uppercase;
          }
      }
      .asideMenu{
        font-size:12px;
        line-height:42px;
        margin-top:20px;
        padding-left:20px;
        li{
            list-style:none;
        }
        .oneMenu{
          height: 50px;
          line-height: 50px;
          font-weight: normal;
          color: #000;
          transition:border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
            &:hover{
                color: #005ea5;
                cursor: pointer;
            }
          img{
            width: 20px;
            height: 20px;
            margin: 15px 16px 15px 20px;
            vertical-align: top;
          }
          .arrow{
              float:right;
              line-height: 50px;
          }
          .icon{
              margin-right:6px;
          }
        }
        .oneMenuChild{
          padding: 0 20px;
          height: 40px;
          line-height: 40px;
          color: #454343;
          transition:border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
            &:hover{
                color: #005ea5;
                cursor: pointer;
            }
        }
      }
    }
  }
 
</style>