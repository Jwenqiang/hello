import Vue from 'vue'
import axios from 'axios'
import router from './router'
// 使用elmentUI 适合PC
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 使用 mintUI  适合移动端 全局引入
import Mint from 'mint-ui';

	//引入全局样式
import 'mint-ui/lib/style.css'
// 引入全局的配置
import global_ from './global/Global.vue'

import store from './vuex/store' // 引入store vuex

import App from './App.vue'

Vue.prototype.GLOBAL = global_;
axios.defaults.baseURL=global_.BASE_URL;

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Mint)


Vue.prototype.$axios = axios;
new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')

// new Vue({
// 	el:"#app",
// 	router,
// 	template:"<p>测试一下</p>"
// })
// 例子：判断页面是否登录状态
// router.beforeEach((to, from, next) => {
// 	console.log("进去路由页面前执行");
//     const role = localStorage.getItem('ms_username');
//     if(!role && to.path !== '/login'){
// 		console.log("没登录");
//         next('/login');
//     }else if(to.meta.permission){
//         // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//         role === 'admin' ? next() : next('/403');
//     }else{
//         // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//         if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
//             Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//                 confirmButtonText: '确定'
//             });
//         }else{
//             next();
//         }
//     }
// })