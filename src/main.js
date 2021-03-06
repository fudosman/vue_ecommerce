import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'

Vue.config.productionTip = false

Vue.use(VueNoty, {
  timeout: 2000,
  progressBar: true,
  layout: 'topRight'
});

const authUser = localStorage.getItem('auth')

new Vue({
  router,
  data: {
      user: JSON.parse(authUser) || null
  },
  render: h => h(App),
}).$mount('#app')
