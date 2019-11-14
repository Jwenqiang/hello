<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <Home msg="55555"/> -->
	<!-- <p>当前路由的名字： {{$route.name}}</p> -->
	<transition name="fade">
	<keep-alive>
	<router-view ></router-view>
	</keep-alive>
	</transition>
	<!-- <el-button type="primary">按钮</el-button> -->
	<!-- <div @click="goto">goto</div> -->
	<!-- <about></about> -->
  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
	
export default {
  name: 'app',
  data(){
  return{
	msg:'测试首页'
  }
  },
  components: {
    Home,
    About,
  },
  methods:{
 //  goto(){
	// this.$router.push('/helloworld/123')
 //  }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
