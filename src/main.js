import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "iview";
import config from '@/config';
import "./styles/index.less";
import env from '../config/env';
if (env === 'development') require('@/mock');

Vue.use(iView);
Vue.config.productionTip = false;

/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
