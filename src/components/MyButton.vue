<!--
 * @Author: your name
 * @Date: 2020-06-04 15:52:27
 * @LastEditTime: 2020-06-05 16:23:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \javaf:\vue3-demo\src\components\MyButton.vue
-->
<template>
	<div>
		<button class="btn" @click="onClick">{{ props.name }}</button>
		<p>abc: {{ props.abc }}</p>
		<span>positon, x: {{ position.x }}, y: {{ position.y }}</span>
	</div>
</template>

<script>
import usePosition from '../hooks/usePosition'

export default {
	props: {
		name: String,
		abc: Number,
	},
	setup(props, { emit }) {
		const onClick = () => {
			emit('get', Date.now())
		}

		const position = usePosition()

		return {
			onClick,
			props,
			position,
		}
	},
}
</script>

<style lang="scss">
.btn {
	font-weight: bold;
}
button {
	border: 0;
	font-size: 18px;
	color: #fff;
	background: #1375e6;
	width: 60px;
	height: 30px;
	&:focus {
		outline: none;
	}
}
</style>
