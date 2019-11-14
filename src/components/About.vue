
<template>
    <div>
		<p>显示vuex公共data : {{$store.state.count}}   计算属性的：{{$store.getters.getterCount}}</p>	
			<div><mt-button @click="ad(2)">加一</mt-button></div>
        我是about
        <hr>
        <ul class="subnave f-cb">
            <!-- a标签中href属性不需要写地址，页面编译完成后自动会在href中加入对应的路劲 -->
            <router-link :to='{name:"About"}' exact tag="li">
                <a>study</a>
            </router-link>
            <router-link :to='{name:"child"}' tag="li">
                <a>work</a>
            </router-link>
            <router-link :to='{name:"Hh"}' tag="li">
                <a>hobby</a>
            </router-link>
        </ul>
        测试数据：{{test1}}
        <router-view></router-view>
    </div>
</template>
 
<script>
    export default {
        data(){
            return {
                test1:'改变之前'
            }
        },
		methods:{
		ad(n){
			this.$store.commit('mutationsAddCount',n);
		},	
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
        },
        beforeRouteUpdate(to,from,next){//当前路由改变时
            console.log('beforeRouteUpdate')
            next()
        },
        beforeRouteLeave(to,from,next){//离开组件的时候触发
            //什么都不写的时候，不会离开(走下一步)
            next()
        }
    }
	</script>
