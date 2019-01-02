
<style>

</style>
<template>
 <div>
   <cheader>
    <template slot="title">
        股票信息
      </template>
     </cheader>
   <cnav></cnav>
   <ccontent>股票信息</ccontent>
 </div>
</template>

<script>
import cheader from './header.vue'
import cnav from './nav.vue'
import ccontent from './stockcontent.vue'
  export default {
    components:{
      cheader,
      cnav,
      ccontent
    }
        
  }
</script>
