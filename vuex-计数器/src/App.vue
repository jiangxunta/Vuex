<template>
  <div id="app">
    <h3>vuex</h3>
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
    <input type="button" value="偶数增加" @click="clickOdd">
    <input type="button" value="异步增加" @click="clickAsync">
    <div>
      <span>现在数字是：{{num}}，它是：{{getOdd}}</span>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'app',
    computed:mapGetters([
      'num',
      'getOdd'
    ]),
    methods:mapActions([
      'increment',
      'decrement',
      'clickOdd',
      'clickAsync'
    ])
  }
</script>

<style scoped>
  #app{
    width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  #app h3{
    font-size: 80px;
    color: #666;
    margin: 20px 0;
  }
  #app input{
    padding: 8px 10px;
    background: #337ab7;
    border: 0;
    border-radius: 8px;
    color: #fff;
    outline: none;
    box-shadow: 2px 2px 6px #999;
  }
  #app div{
    margin-top: 20px;
  }
</style>
