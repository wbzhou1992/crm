<template>
  <div class="home">
    
    <Stock msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Stock from '@/components/stock.vue'

export default {
  name: 'home',
  components: {
    Stock
  }
}
</script>
