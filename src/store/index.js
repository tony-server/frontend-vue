import Vue from 'vue'
import Vuex from 'vuex'
import root from './root'
import modules from './modules'

Vue.use(Vuex)
// 所有子模块添加命名空间
// 调用 commit('[模块/]子模块/方法')
const store = new Vuex.Store({
	...root,
	modules
})

export default store