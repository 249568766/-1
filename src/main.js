// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import less from 'less'
import './assets/index.less'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

// import './units/swiper/swiper-3.4.2.min.css'
// import './units/swiper/swiper-3.4.2.min.js'

Vue.use(less)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
