<template>
<div>
    <div class="dialog">
    </div>
    <div class="dialog-content">
           <h1>修改客户信息</h1>
           <div class="customer-cont">
               <label for="name"></label><input type="text" name="name"> 
           </div>
    </div>
</div>
</template>
<style scoped> 
 .dialog{
     position:fixed;
     top:0;
     left:0;
     bottom: 0;
     right:0;
     z-index: 3;
     background-color: #000;
     opacity: .5;
}
 .dialog-content{
     width:400px;
     height:900px;
     background: #fff;
     margin:0 auto;
     position: relative;
     z-index: 4;
     
 }
</style>
