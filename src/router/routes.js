// 异步加载
const App = resolve => require(['@/views/app/index.vue'], resolve)
const C1 = resolve => require(['@/views/Composition/c1.vue'], resolve)
const C2 = resolve => require(['@/views/Composition/c2.vue'], resolve)
const Settings = resolve => require(['@/views/settings/index.vue'], resolve)
const Components = resolve => require(['@/views/components/index.vue'], resolve)
const Color = resolve => require(['@/views/components/base/color.vue'], resolve)
const Button = resolve => require(['@/views/components/base/button.vue'], resolve)
const Icon = resolve => require(['@/views/components/base/icon.vue'], resolve)
const Data = resolve => require(['@/views/components/example/data.vue'], resolve)
const Input = resolve => require(['@/views/components/form/input.vue'], resolve)
const Radio = resolve => require(['@/views/components/form/radio.vue'], resolve)
const Checkbox = resolve => require(['@/views/components/form/checkbox.vue'], resolve)
const Switch = resolve => require(['@/views/components/form/switch.vue'], resolve)
const Select = resolve => require(['@/views/components/form/select.vue'], resolve)
const Table = resolve => require(['@/views/components/form/table.vue'], resolve)
const ViewsMenu = resolve => require(['@/views/components/navigation/viewsMenu.vue'], resolve)
const ViewsBreadcrumb = resolve => require(['@/views/components/navigation/viewsBreadcrumb.vue'], resolve)
const ViewsTabs = resolve => require(['@/views/components/navigation/viewsTabs.vue'], resolve)
const ViewsProgress = resolve => require(['@/views/components/view/viewsProgress.vue'], resolve)
const ViewsAllTips = resolve => require(['@/views/components/view/viewsAllTips.vue'], resolve)
const ViewsNotice = resolve => require(['@/views/components/view/viewsNotice.vue'], resolve)
const ViewsModal = resolve => require(['@/views/components/view/viewsModal.vue'], resolve)
const ViewsCollapse = resolve => require(['@/views/components/view/viewsCollapse.vue'], resolve)
const ViewsUpload = resolve => require(['@/views/components/navigation/viewsUpload.vue'], resolve)
const ViewsBadge = resolve => require(['@/views/components/view/viewsBadge.vue'], resolve)
const ViewsTag = resolve => require(['@/views/components/view/viewsTag.vue'], resolve)
const ViewsTooltip = resolve => require(['@/views/components/view/viewsTooltip.vue'], resolve)
const ViewsPopovers = resolve => require(['@/views/components/view/viewsPopovers.vue'], resolve)
const ViewsAnchorLinks = resolve => require(['@/views/components/view/viewsAnchorLinks.vue'], resolve)
const Upload =resolve => require(['@/views/components/form/upload.vue'], resolve)
const Form = resolve => require(['@/views/components/form/form.vue'], resolve)
const ViewsAlarm = resolve => require(['@/views/components/view/viewsAlarm.vue'], resolve)
const ViewsCountInput = resolve => require(['@/views/components/form/viewsCountInput.vue'], resolve)
const ViewsTimeSelect = resolve => require(['@/views/components/form/viewsTimeSelect.vue'], resolve)
const List = resolve => require(['@/views/components/base/list.vue'], resolve)
const Page = resolve => require(['@/views/components/navigation/page.vue'], resolve)
const Avatar = resolve => require(['@/views/components/view/avatar.vue'], resolve)
const ViewsTimeLine = resolve => require(['@/views/components/view/viewsTimeLine.vue'], resolve)
const ViewsCarousel = resolve => require(['@/views/components/view/viewsCarousel.vue'], resolve)
const Tree = resolve => require(['@/views/components/view/tree.vue'], resolve)
const Steps = resolve => require(['@/views/components/navigation/steps.vue'], resolve)
const ViewsDateSelect = resolve => require(['@/views/components/form/viewsDateSelect.vue'], resolve)
const AutoComplete = resolve => require(['@/views/components/form/auto-complete.vue'], resolve)
const Slider = resolve => require(['@/views/components/form/slider.vue'], resolve)
const Cascader = resolve => require(['@/views/components/form/cascader.vue'], resolve)
const Transfer = resolve => require(['@/views/components/form/transfer.vue'], resolve)
const Rate = resolve => require(['@/views/components/form/rate.vue'], resolve)
const ColorPicker = resolve => require(['@/views/components/form/color-picker.vue'], resolve)
const Card = resolve => require(['@/views/components/view/card.vue'], resolve)
const DropDown = resolve => require(['@/views/components/navigation/drop-down.vue'], resolve)
const Circle = resolve => require(['@/views/components/chart/circle.vue'], resolve)
const Affix = resolve => require(['@/views/components/other/affix.vue'], resolve)
const BackTop = resolve => require(['@/views/components/other/back-top.vue'], resolve)
const Spin = resolve => require(['@/views/components/other/spin.vue'], resolve)
const Pipelines = resolve => require(['@/views/components/example/pipelines.vue'], resolve)
const Board = resolve => require(['@/views/issues/board/list'], resolve)

// const User = resolve => require(['@/views/user/index.vue'], resolve)
// const UserList = resolve => require(['@/views/user/list.vue'], resolve)

// 最外层的app路由作为根路由来进行权限判断等。
// 根路由包含页头页脚组件，及container路由。container路由需要重定向初始化到默认显示的首页视图。
// 页头组件控制container的路由，container路由中包含各视图主体
// container出口通常包含sidebar组件，main出口。
// sidebar组件控制main出口的内容。
//
// 路由命名：模块-功能
const routes = [
	// 所有未配置的路径重定向到该路由下
	// redirect: 'page_404'
	{
		path: '*',
		redirect: '/app'
	},
	// 访问根路径时重定向到app
	{
        path: "/",
        redirect: {
        	name: 'app'
        }
    },
	{
		path: '/app',
		name: 'app',
		component: App,
		meta: {
			requiresAuth: true
		},
		redirect: {
			name: 'components'
		},
		children: [
			{
				path: 'components',
				name: 'components',
				component: Components,
				redirect: {
					name: 'data'
				},
				children: [
					{
						path: 'data',
						name: 'data',
						component: Data,
                        meta : {
                            group: [0]
                        }
					},
					{
						path: 'color',
						name: 'color',
						component: Color,
                        meta : {
                            group: [1]
                        }
					},
					{
						path: 'button',
						name: 'button',
						component: Button,
                        meta : {
                            group: [1]
                        }
					},
					{
						path: 'icon',
						name: 'icon',
						component: Icon,
                        meta : {
                            group: [1]
                        }
					},
					{
						path: 'input',
						name: 'input',
						component: Input,
                        meta : {
                            group: [2]
                        }
					},
					{
						path: 'radio',
						name: 'radio',
						component: Radio,
                        meta : {
                            group: [2]
                        }
					},
					{
						path: 'checkbox',
						name: 'checkbox',
						component: Checkbox,
                        meta : {
                            group: [2]
                        }
					},
					{
						path: 'switch',
						name: 'switch',
						component: Switch,
                        meta : {
                            group: [2]
                        }
					},
					{
						path: 'select',
						name: 'select',
						component: Select,
                        meta : {
                            group: [2]
                        }
					},
					{
						path: 'table',
						name: 'table',
						component: Table,
                        meta : {
                            group: [2]
                        }
					},
                    {
                        path: 'viewsMenu',
                        name: 'viewsMenu',
                        component:ViewsMenu
                    },
                    {
                        path: 'viewsBreadcrumb',
                        name: 'viewsBreadcrumb',
                        component:ViewsBreadcrumb
                    },
                    {
                        path: 'viewsTabs',
                        name: 'viewsTabs',
                        component:ViewsTabs
                    },
                    {
                        path: 'viewsProgress',
                        name: 'viewsProgress',
                        component:ViewsProgress
                    },
                    {
                        path: 'viewsAllTips',
                        name: 'viewsAllTips',
                        component:ViewsAllTips
                    },
                    {
                        path: 'viewsNotice',
                        name: 'viewsNotice',
                        component:ViewsNotice
                    },
                    {
                        path: 'viewsModal',
                        name: 'viewsModal',
                        component:ViewsModal
                    },
                    {
                        path: 'viewsCollapse',
                        name: 'viewsCollapse',
                        component:ViewsCollapse
                    },
                    {
                        path: 'viewsUpload',
                        name: 'viewsUpload',
                        component:ViewsUpload
                    },
                    {
                        path: 'viewsBadge',
                        name: 'viewsBadge',
                        component:ViewsBadge
                    },
                    {
                        path: 'viewsTag',
                        name: 'viewsTag',
                        component:ViewsTag
                    },
                    {
                        path: 'viewsTooltip',
                        name: 'viewsTooltip',
                        component:ViewsTooltip
                    },
                    {
                        path: 'viewsPopovers',
                        name: 'viewsPopovers',
                        component:ViewsPopovers
                    },
                    {
                        path: 'viewsAnchorLinks',
                        name: 'viewsAnchorLinks',
                        component:ViewsAnchorLinks
                    },
                    {
                    	path: 'tree',
                    	name: 'tree',
                    	component: Tree
                    },
                    {
                    	path: 'steps',
                    	name: 'steps',
                    	component: Steps
                    },
					{
						path: 'upload',
						name: 'upload',
						component :Upload
					},
					{
						path: 'form',
						name: 'form',
						component: Form
					},
                    {
                        path: 'viewsAlarm',
                        name: 'viewsAlarm',
                        component:ViewsAlarm
                    },
                    {
                        path: 'viewsCountInput',
                        name: 'viewsCountInput',
                        component:ViewsCountInput
                    },
                    {
                        path: 'viewsTimeSelect',
                        name: 'viewsTimeSelect',
                        component:ViewsTimeSelect
                    },
                    {
                        path: 'list',
                        name: 'list',
                        component:List
                    },
                    {
                        path: 'page',
                        name: 'page',
                        component:Page
                    },
                    {
                        path: 'avatar',
                        name: 'avatar',
                        component:Avatar
                    },
                    {
                        path:'viewsTimeLine',
                        name:'viewsTimeLine',
                        component:ViewsTimeLine
                    },
                    {
                        path:'viewsCarousel',
                        name:'viewsCarousel',
                        component:ViewsCarousel
                    },
                    {
                        path:'viewsDateSelect',
                        name:'viewsDateSelect',
                        component:ViewsDateSelect
                    },
                    {
                        path: 'auto-complete',
                        name: 'auto-complete',
                        component:AutoComplete
                    },
                    {
                        path: 'slider',
                        name: 'slider',
                        component:Slider
                    },
                    {
                        path: 'cascader',
                        name: 'cascader',
                        component:Cascader
                    },
                    {
                        path: 'transfer',
                        name: 'transfer',
                        component:Transfer
                    },
                    {
                        path: 'rate',
                        name: 'rate',
                        component:Rate
                    },
                    {
                        path: 'color-picker',
                        name: 'color-picker',
                        component:ColorPicker
                    },
                    {
                        path: 'card',
                        name: 'card',
                        component:Card
                    },
                    {
                        path: 'drop-down',
                        name: 'drop-down',
                        component:DropDown
                    },
                    {
                        path: 'circle',
                        name: 'circle',
                        component:Circle
                    },
                    {
                        path: 'affix',
                        name: 'affix',
                        component:Affix
                    },
                    {
                        path: 'back-top',
                        name: 'back-top',
                        component:BackTop
                    },
                    {
                        path: 'spin',
                        name: 'spin',
                        component:Spin
                    },
                    {
                        path: 'pipelines',
                        name: 'pipelines',
                        component:Pipelines,
                        meta : {
                            group: [0]
                        }
                    },
                    {
                        path: 'board',
                        name: 'board',
                        component:Board,
                        meta : {
                            group: [0]
                        }
                    }
				]
			},
			{
				path: 'settings',
				name: 'settings',
				component: Settings
			},
            {
                path: 'c1',
                name: 'c1',
                component: C1
            },
            {
                path: 'c2',
                name: 'c2',
                component: C2
            }
		]
	}
]

export default routes
