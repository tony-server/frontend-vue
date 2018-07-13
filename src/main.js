import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import './styles/index.less'
import '@/assets/icons/iconfont.css'
import '@/mock'
// 实际打包时应该不引入mock
// import env from '@/config/env'
// env === 'development' ? require('mock') : ''

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false

/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
importDirective(Vue)

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
