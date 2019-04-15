import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'


Vue.use(ElementUI)//注册ElementUI 插件
Vue.prototype.$axios=axios; //把axiso设置为所有的Vue组件实例的成员属性，以后可以使用this.$axios使用一部请求功能
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
