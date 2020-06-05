<!--
 * @Author: your name
 * @Date: 2020-06-04 15:33:59
 * @LastEditTime: 2020-06-05 16:05:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \javaf:\vue3-demo\App.vue
-->
<template>
	<div class="container">
		hello {{ state.message }}
		<div>数字: {{ count }}</div>
		<div>两倍数字: {{ doubleCount }}</div>
		<div @click="deleteComponent">去除mybutton组件?</div>
		<my-button v-if="flag" :abc="12" name="增加" @get="increment"></my-button>
	</div>
</template>

<script>
import { computed, ref, reactive, watchEffect, onBeforeMount, onMounted, onUpdated } from 'vue'
import MyButton from './components/MyButton.vue'
export default {
	components: {
		MyButton,
	},
	setup(props, context) {
		const count = ref(0)
		const flag = ref(true)

		const state = reactive({
			count: count,
			message: 'Vue3',
		})

		const doubleCount = computed(() => count.value * 2)

		const deleteComponent = () => {
			flag.value = !flag.value
		}

		const increment = (e) => {
			console.log(e)
			count.value += 10
			state.message = `Vue3. Good! ${e}`
		}

		watchEffect(
			() => {
				console.log('count: ', count.value)
				console.log('state: ', state.count, state.count.value)
			}
		)

		onBeforeMount(() => {
			console.log('beforeMount')
		})

		onMounted(() => {
			console.log('Mounted')
		})

		onUpdated(() => {
			console.log('updated')
		})

		return {
			count,
			state,
			doubleCount,
			increment,
			flag,
			deleteComponent
		}
	},
}
</script>
<style lang="scss">
body {
	font-size: 16px;
}
.container {
	text-align: center;
	line-height: 2;
}
</style>
