
<style>

</style>
<template>
 <div>
   <cheader>
     <template slot="title">
       客户管理系统
     </template>
   </cheader>
   <cnav></cnav>
   <ccontent>客户管理</ccontent>
 </div>
</template>

<script>
import cheader from './header.vue'
import cnav from './nav.vue'
import ccontent from './content.vue'
  export default {
    components:{
      cheader,
      cnav,
      ccontent
    }
        
  }
</script>
