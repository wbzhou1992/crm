
<style>

</style>
<template>
 <div>
   <cheader></cheader>
   <cnav></cnav>
   <ccontent></ccontent>
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
