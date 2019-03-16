<template>
  <div>
    <div class="dialog" v-show="isShow"></div>
    <div class="dialog-content" v-show="isShow">
      <h2>修改客户信息</h2>
      <div class="customer-cont">
        <div>
          <span>客户名称</span>
          <input
            v-model="currentCustomer.cust_name"
            autocomplete="off"
            spellcheck="false"
            placeholder
            type="text"
            id="name"
          >
        </div>
        <div>
          <span>客户来源</span>
          <input
            v-model="currentCustomer.cust_source"
            autocomplete="off"
            spellcheck="false"
            placeholder
            type="text"
            id="source"
          >
        </div>
        <div>
          <span>所属行业</span>
          <input
            v-model="currentCustomer.cust_industry"
            autocomplete="off"
            spellcheck="false"
            placeholder
            type="text"
            id="industry"
          >
        </div>
        <div>
          <span>客户级别</span>
          <input
            v-model="currentCustomer.cust_level"
            autocomplete="off"
            spellcheck="false"
            placeholder
            type="text"
            id="level"
          >
        </div>
        <div>
          <span>固定电话</span>
          <input
            v-model="currentCustomer.cust_phone"
            autocomplete="off"
            spellcheck="false"
            placeholder
            type="text"
            id="phone"
          >
        </div>
        <div>
          <span>手机</span>
          <input
            v-model="currentCustomer.cust_mobile"
            autocomplete="off"
            spellcheck="false"
            placeholder
            type="text"
            id="mobile"
          >
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isShow: Boolean,
    value: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    currentCustomer: {
      get: function() {
        return this.value; // 将props中的value赋值给currentValue
      },
      set: function(val) {
        this.$emit("input", val); // 通过$emit触发父组件
      }
    }
  }
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.dialog-content {
  width: 600px;
  height: 500px;
  left: 50%;
  margin-left: -300px;
  background: #fff;
  position: absolute;
  z-index: 4;
  top: 100px;
  border-radius: 8px;
  button {
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
    border-radius: 3px;
    outline: 0;
    margin-right: 5px;
    padding: 1px 7px 2px;
    cursor: pointer;
  }
  input {
    width: 440px;
    outline: 0;
    font-size: 16px;
    padding-left: 6px;
    height: 34px;
    line-height: 1.5;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    background-color: #fff;
    cursor: text;
    transition: border 0.2s ease-in-out, background 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;
  }
  h2 {
    border-bottom: 1px solid #eee;
    margin-top: 20px;
    margin-left: 20px;
    text-align: left;
  }
  .customer-cont {
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
    & > div {
      margin-top: 20px;
    }
    span {
      width: 80px;
      margin-right: 10px;
      font-size: 16px;
      font-weight: 400;
      text-align: right;
      display: inline-block;
    }
  }
  .btn {
    float: right;
    margin-right: 30px;
    margin-top: 30px;
    button {
      height: 40px;
      width: 100px;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
  background-color: #000;
  opacity: 0.5;
}
</style>
