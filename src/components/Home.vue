<template>
	<div>
		<p>显示vuex公共data : {{$store.state.count}}   计算属性的：{{$store.getters.getterCount}}</p>
		<div>
			      <button @click="handleAddClick(1)">增加</button>
			      <button @click="handleReduceClick(1)">减少</button>
		</div>
		
 <div>异步操作</div>
  <div>
    <button @click="handleActionsAdd(1)">异步增加</button>
    <button @click="handleActionsReduce(1)">异步减少</button>
  </div>		
		
		<p>{{msg}}</p>
		<router-link to='/he/123'>go to hello </router-link>
		<router-link to='/he/456'>go to hello</router-link>
		<router-link :to="{name: 'child'}">go to test</router-link>	
		
		<router-link :to='{name:"child1"}'>去子路由哦1</router-link>
		<router-link :to='{name:"child2"}'>去子路由哦2</router-link>
		<router-link :to='{name:"About"}'>去About</router-link>
		<ul>
			<li @click="goto1()">子路由1</li>
			<li @click="goto2()">子路由2</li>
		</ul>
		<div>{{reversedMessage}}</div>
		<input v-model="message" />
		监听后的：{{newmessage}}
		<router-view ></router-view>
		<mt-button @click.native="handleClick">按钮</mt-button>
		

    <div class="pickerDemo">
        <div class="showTime">
            <p class="timeDes">当前时间是：{{selectedValue}}</p>
            <div class="selectTime" @click="selectData">选择时间</div>
        </div>
        <!-- @touchmove.prevent 阻止默认事件，此方法可以在选择时间时阻止页面也跟着滚动。 -->
        <div class="pickerPop" @touchmove.prevent>
            <!-- 年月日时分选择 -->
            <mt-datetime-picker
                lockScroll="true"
                ref="datePicker"
                v-model="dateVal"
                class="myPicker"
                type="datetime"
                year-format="{value}"
                month-format="{value}"
                date-format="{value}"
                hour-format="{value}"
                minute-format="{value}"
                second-format="{value}"
                @confirm="dateConfirm()">
            </mt-datetime-picker>
        </div>
    </div>
	
	</div>	
</template>

<script>
	import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  props: {
    msg: String
  },
	  data(){
		  return {
            dateVal: '', // 默认是当前日期
            selectedValue: '',
			message: 'Hello',
			newmessage: ''
		  }
	  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message+"计算属性"
    }	,
	
    // count(){
    //   return this.$store.getters.getterCount
    // }	
    },
  watch: {
    message: function (val,oldval) {
		console.log(val);
		console.log(oldval);
      this.newmessage = val+' 555'
    },
  }	,	  
  methods:{
	  // 代替下面注释部分  一样的效果
    ...mapMutations({
      handleAddClick: 'mutationsAddCount',
      handleReduceClick: 'mutationsReduceCount'
    }),
    ...mapActions({
      handleActionsAdd: 'actionsAddCount',
      handleActionsReduce: 'actionsReduceCount'
    }),
    // handleAddClick(n){
    //   this.$store.commit('mutationsAddCount',n);
    // },
    // handleReduceClick(n){
    //   this.$store.commit('mutationsReduceCount',n);
    // },
    // handleActionsAdd(n){
    //   this.$store.dispatch('actionsAddCount',n)
    // },
    // handleActionsReduce(n){
    //   this.$store.dispatch('actionsReduceCount',n)
    // },	  
	  
	  
	  
	  // 两种形式
  goto1(){
	  this.$message("提示");
	this.$router.push({name:"Hw",params:{id:'123'}})
  },
  goto2(){
	this.$router.push('/child2')
  },
handleClick: function() {
  this.$toast('Hello world!')
},
// add(n){
// 	this.$store.commit('mutationsAddCount',n);
// },
// handleActionsAdd(n){
//       this.$store.dispatch('actionsAddCount',n)
// },
// handleActionsReduce(n){
//   this.$store.dispatch('actionsReduceCount',n)
// },

        selectData () { // 打开时间选择器
            // 如果已经选过日期，则再次打开时间选择器时，日期回显（不需要回显的话可以去掉 这个判断）
            if (this.selectedValue) {
                this.dateVal = this.selectedValue
            } else {
                this.dateVal = new Date()
            }
			// 打开日期选择器
            this.$refs['datePicker'].open()
        },
        dateConfirm () { // 时间选择器确定按钮，并把时间转换成我们需要的时间格式
            this.selectedValue = this.dateVal
        }


  }
}	
</script>

<style scoped lang="less">
    .pickerDemo{
        width: 100%;
        height: 18rem;
        background-color: #ccc;
        .showTime{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 2rem;
            .timeDes{
                font-size: 0.4rem;
                color: red;
            }
            .selectTime{
                display: inline-block;
                width: 4rem;
                height: 1rem;
                line-height: 1rem;
                text-align: center;
                background-color: #ff776d;
                color: #fff;
                font-size: 0.24rem;
                border-radius: 8px;
                margin-top: 1rem;
            }
        }
    }
    .pickerPop{
        /deep/ .picker{
            .picker-toolbar{
                background-color: #eee;
                .mint-datetime-action{
                    font-size: 0.26rem;
                    color: #000!important;
                }
            }
        }
    }
</style>

