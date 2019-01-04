<template>
  <div id="app">
    <div class="px-2">
      <div class="float-left"><router-link class="link" to="/">Change Plan</router-link></div>
      <div class="float-right"><router-link class="link" to="/planform">Cancel Your Plan</router-link></div>
      <div class="clearfix"></div>
      <div class="flex items-center border-b border-b-2 py-2"></div>
      <div class="clearfix"></div>
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
import '@/assets/styles/main.css'

import Plan from './components/Plan.vue'
import PlanForm from './components/PlanForm.vue'
import PlanMain from './components/PlanMain.vue'

export default {
  name: 'app',
  data() {
    return {
      title: 'Welcome',
      plans :[
      {id:1,title:'HOBBY', kuota:'1 GB', price:'$10 / mo'},
      {id:2,title:'GROWTH', kuota:'10 GB',price:'$100 / mo'},
      {id:3, title:'BUSINESS', kuota:'2 GB',price:'$20 / mo'},
      {id:4, title:'ENTERPRISE', kuota:'15 GB',price:'$40 / mo'}
      ],

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
