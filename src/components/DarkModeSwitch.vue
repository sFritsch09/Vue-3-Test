<template>
	<input
		@change="this.$store.dispatch('darkMode/toggleTheme')"
		id="checkbox"
		type="checkbox"
		class="switch-checkbox"
	/>
	<label for="checkbox" class="switch-label" :style="cssVars">
		<span>🌙</span>
		<span>☀️</span>
		<div
			class="switch-toggle"
			:class="{
				'switch-toggle-checked': this.$store.state.darkMode.userTheme === 'dark-theme',
			}"
		></div>
	</label>
</template>

<script>
export default {
	props: {
		size: {
			type: String,
			default: '4em',
		},
	},
	computed: {
		cssVars() {
			return {
				/* variables you want to pass to css */
				'--size': this.size,
			};
		},
	},
};
</script>

<style scoped>
.switch-label {
	/* for width, use the standard element---size */
	width: var(--size);

	/* for other dimensions, calculate values based on it */
	border-radius: var(--size);
	border: calc(var(--size) * 0.025) solid var(--accent-color);
	padding: calc(var(--size) * 0.1);
	font-size: calc(var(--size) * 0.3);
	height: calc(var(--size) * 0.35);
	align-items: center;
	background: var(--text-primary-color);
	cursor: pointer;
	display: flex;
	position: relative;
	transition: background 0.5s ease;
	justify-content: space-between;
	z-index: 1;
}
.switch-checkbox {
	display: none;
}
.switch-toggle {
	position: absolute;
	background-color: var(--background-color-primary);
	border-radius: 50%;
	top: calc(var(--size) * 0.07);
	left: calc(var(--size) * 0.07);
	height: calc(var(--size) * 0.4);
	width: calc(var(--size) * 0.4);
	transform: translateX(0);
	transition: transform 0.3s ease, background-color 0.5s ease;
}
.switch-toggle-checked {
	transform: translateX(calc(var(--size) * 0.6)) !important;
}
</style>
