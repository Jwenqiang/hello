import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Hello from '@/components/Hello'
import Hi from '@/components/TestA'
import Child from '@/components/Child'
import Error from '@/components/Error'
import About from '@/components/About'

Vue.use(Router)

const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const Joven = {
  template: '<div>Joven</div>'
}
export default new Router({
	mode: 'hash',//两种模式 hash history需要服务器配置
	routes:[
		{ path: '/', redirect: '/home'},//默认的首页
		{ 
			path: '/home',
			component:Home,
		  children:[        //子路由,嵌套路由 
			{path:'child1',name:'child1',component:Child},
			{path:'child2',name:'child2',component:Hello}
		  ]			
		},//默认的首页
		{
			path:'/About',
			name:'About',
			component:About,
		},		
		
		{
			path:'/he/:id',
			name:'Hw',
			component:Hello,
		},
		{
		  path:'/hi',
		  name:'Hh',
		  component:Hi,
		  children:[        //子路由,嵌套路由 
			{path:'child',name:'child',component:Child}
		  ]
		},	
    { path: '/user/:id', component: Child},

    // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
    // {
    //   path: '/user/:id',
    //   components: { default: User, sidebar: Hello },
    //   props: { default: true, sidebar: false }
    // }		
		
	]
})

