// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import Element from 'element-ui'
import router from './router'
import store from './store'
2222东风风神
Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app4',
  router,
  store,
  components: { App },
  template: '<App/>'
})
