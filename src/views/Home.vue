<template>
	<div class="container-center">
		<div class="card-wrapper">
			<div class="flex-wrapper">
				<dark-mode-switch />
			</div>
			<p>Wer sitzt dort so spät, bei Nacht und Wind?</p>
			<p>Entwickler Clemens, mit einem Pint.</p>
			<p>Man hört ihn seufzen, ziemlich hart -</p>
			<p>Sonntag ist's, die Deadline naht</p>
		</div>
	</div>
</template>

<script>
import DarkModeSwitch from '../components/DarkModeSwitch.vue';
export default {
	name: 'Home',
	components: { DarkModeSwitch },
};
</script>

<style scoped>
p {
	color: var(--text-primary-color);
}

.container-center {
	background-color: var(--background-color-primary);
	display: flex;
	align-items: center;
	justify-content: center;
}

.card-wrapper {
	padding: 2rem 4rem;
	height: 200px;
	width: 300px;
	text-align: center;
	border: 1px solid var(--accent-color);
	border-radius: 4px;
	background-color: var(--background-color-secondary);
}
.flex-wrapper {
	display: flex;
	justify-content: center;
}
</style>
