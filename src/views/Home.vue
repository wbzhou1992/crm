
<template>
 <div>
   <cnav @gotoSub="gotoSub"></cnav>
   <ccontent></ccontent>
 </div>
</template>
<script>
import cnav from './nav.vue'
import ccontent from './content.vue'
  export default {
    components:{
      cnav,
      ccontent
    },
    methods: {
      gotoSub (name) {
        console.log(name)
      }
    }
        
  }
</script>
