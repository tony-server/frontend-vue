import Vue from 'vue'
import Router from 'vue-router'
// 路由记录
import routes from './routes'

Vue.use(Router)

const router = new Router({
	base: '/',
	mode: 'history',
	routes: routes
})

router.onError( err => {
	console.log(err)
})

router.beforeEach( (to, from, next) => {
	const { params, query, fullPath, matched } = to
	console.log('beforeEach')
	next()
})

export default router
