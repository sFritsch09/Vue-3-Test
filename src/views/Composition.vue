<template>
	<div>
		<button @click="increment">{{ count }}</button>
		<button @click="a++">{{ a }}</button>
		<button @click="b++">{{ b }}</button>
		<div v-for="msg in history" :key="msg">{{ msg }}</div>
	</div>
</template>

<script>
import { useNumbers } from '../components/useNumbers';
export default {
	setup() {
		const { history, increment, count, a, b } = useNumbers();
		return {
			history,
			increment,
			count,
			a,
			b,
		};
	},
};
</script>

<style></style>
