import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Input, Table } from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"
Vue.component(Input.name, Input)
Vue.component(Table.name, Table)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
