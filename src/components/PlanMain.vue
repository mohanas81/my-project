<template>
<div class="flex -mx-2 pt-20">
  <Plan v-for="plan in plans"
  :id="plan.id"
  :title="plan.title"
  :kuota="plan.kuota"
  :price="plan.price" />
</div>
</template>
<script>
import '@/assets/styles/main.css'

import Plan from '../components/Plan.vue'
import PlanForm from '../components/PlanForm.vue'

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
  },
  components: {
    Plan,
    PlanForm
  }
}
</script>
