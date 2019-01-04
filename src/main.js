// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import PlanForm from './components/PlanForm.vue'
import PlanMain from './components/PlanMain.vue'


Vue.config.productionTip = false



const routes = [
  { path: '/', component: PlanMain },
  { path: '/planform', component: PlanForm }
]

const router = new VueRouter({
  routes
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
