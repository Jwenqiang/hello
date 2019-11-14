<template>
	<div>
	
		子路由
		<div>测试钩子：{{test}}</div>
		<el-button type="text">文字按钮</el-button>
		<el-button type="primary">默认按钮</el-button>
		<el-pagination
		  background
		  layout="prev, pager, next"
		  :total="1000">
		</el-pagination>
	</div>
</template>

<script>
	import "./js/test.js"
	export default{

        data(){
            return {
                test:'改变之前'
            }
        },
		methods:{
		
		},
        beforeCreate(){//组件生命周期函数
            console.log('beforeCreate')
        },
        //当进入组件之前，执行 beforRouteEnter 路由钩子函数
        beforeRouteEnter(to,from,next){
            console.log('beforRouteEnter')
            console.log(this) // 结果为undefined，因为在执行beforRouteEnter时候，组件还没有被创建出来；先执行beforRouteEnter，再执行beforeCreate
            next((vm)=>{ //参数vm就是当前组件的实例。
                vm.test = '我被改变了'
            })
        }

	}
</script>

<style>
</style>
